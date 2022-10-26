import axios from "axios"
import db from "../db/connection.js";
import Country from "../models/covid.js";

const seedCountryDatabase = async (data) => {
  let covidData = []

  for (let key in data) {
    let country = data[key]
    covidData.push({
      confirmed: country.All.confirmed,
      deaths: country.All.deaths,
      country: key,
      life_expectancy: country.All.life_expectancy || "n/a",
      population: country.All.population,
    })
  }

  await db.dropDatabase();
  await Country.create(covidData);
  await db.close();
};

async function getCountry() {
  let response = await axios('https://covid-api.mmediagroup.fr/v1/cases')
  let covidData = response.data
  seedCountryDatabase(covidData)
}

getCountry()





