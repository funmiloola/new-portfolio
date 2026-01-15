import { ref, set } from "firebase/database";
import {database} from '../firebase';
import portfolioData from "./data.json";

export const uploadPortfolio = async () => {
  try {
    await set(ref(database, "portfolio"), portfolioData);
    console.log("Portfolio data uploaded successfully");
  } catch (error) {
    console.error("Upload failed:", error);
  }
};
