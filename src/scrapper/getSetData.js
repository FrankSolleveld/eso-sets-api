const axios = require("axios");
const cheerio = require("cheerio");
const { first } = require("../data/dbConfig");
const db = require("../data/dbConfig");
const { spanWrapper } = require("./spanWrapper");

async function getSetData(url) {
  const headers = {
    "User-Agent": "FireNinja",
  };
  const { data } = await axios.get(url, { headers });
  console.log(url);
  const $ = cheerio.load(data);

  const tooltip = $(".set-tooltip-center");
  const name = $(".set-tooltip-setname").first().text();
  console.log("name:", name);
  const type = tooltip.find('span:contains("Type")').next().text();
  console.log("type:", type);

  let extraInfo = {};

  // const location = $('.col-md-7.order-md-1 strong:contains("Location:")')[0].nextSibling.nodeValue.trim();
  // console.log(location);

  $('.col-md-7.order-md-1 strong').each((i, elem) => {
    const key = $(elem).text().replace(':','').trim();
    let value = $(elem).next().text();
    if(key === 'Obtainable items'){
      value = []
      $(elem).next().find('li').each((i,elem) => value.push($(elem).text()))
      extraInfo['obtainableItems'] = value
    }
    if (key == 'Location' || key == 'Traits needed to craft' || key == 'Requires DLC') {
      extraInfo[key] = elem.nextSibling.nodeValue.trim()
    }
  })

  const { Location, 'Requires DLC': RequiresDLC, 'Traits needed to craft': Traits } = extraInfo

  const bonusData = tooltip
    .find('strong:contains("Set bonus")')
    .parent()
    .text()
    .replace("ArmorSet bonus", "")
    .split("\n")
    .filter((string) => string)
    .map((string) => {
      return string.trim();
    })
    .filter((string) => string)
    .join(" ")
    .split("(")
    .filter((string) => string)
    .map((string) => {
      const splitter = string.split(")");
      const piece = splitter[0];
      const bonus = splitter[1];
      const wrapped = spanWrapper(bonus);
      return `(${piece})${wrapped}`;
    });

  console.log("bonuses:", bonusData.join(" "));

  try {
    if (name) {
      const added = await db("sets")
        .insert({
          name,
          link: url,
          type,
          bonuses: bonusData.join(" "),
          traits: Traits,
          location: Location,
          dlc: RequiresDLC,
          obtainableItems: extraInfo['obtainableItems']
        })
        .returning("*");
        console.log("Added:", added[0]);
    }
    // process.exit(0);
  } catch (err) {
    console.log("Error message:", err.message);
    process.exit(1);
  }
}

// getSetData("https://eso-sets.com/set/chaotic-whirlwind");
// getSetData("https://eso-sets.com/set/adept-rider");
module.exports = getSetData;
