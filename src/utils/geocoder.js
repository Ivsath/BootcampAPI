import NodeGeocoder from "node-geocoder";
import config from "../config";

const options = {
  provider: config.geocoderProvider,
  httpAdapter: "https",
  apiKey: config.geocoderAPIKey,
  formatter: null,
};

const geocoder = NodeGeocoder(options);

export default geocoder;
