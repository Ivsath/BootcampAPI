import dotenv from "dotenv";

dotenv.config();

export const config = {
  secrets: {
    jwt: process.env.JWT_SECRET,
  },
  dbUrl: process.env.DB_URL,
  geocoderProvider: process.env.GEOCODER_PROVIDER,
  geocoderKey: process.env.GEOCODER_API_KEY,
};
