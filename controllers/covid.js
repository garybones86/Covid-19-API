import Country from "../models/covid.js";

export const getCountries = async (req, res) => {
  try {
    const countries = await Country.find();
    res.json(countries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getCountry = async (req, res) => {
  try {
    const { id } = req.params;
    const country= await Country.findById(id);

    if (country) {
      return res.json(country);
    }

    res.status(404).json({ message: "Country not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const createCountry = async (req, res) => {
  try {
    const country = new Country(req.body);
    await country.save();
    res.status(201).json(country);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateCountry = async (req, res) => {
  try {
    const { id } = req.params;
    const country = await country.findByIdAndUpdate(id, req.body);
    res.status(201).json(country);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteCountry = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Country.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Country deleted!");
    }

    throw new Error("Country not found");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
