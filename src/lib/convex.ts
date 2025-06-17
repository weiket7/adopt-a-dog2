import { ConvexHttpClient } from "convex/browser";
import { api } from "./convex/_generated/api"; // Adjust path as necessary based on your project structure
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });
const CONVEX_URL = process.env["CONVEX_URL"] || "";
if(CONVEX_URL == "") {
    console.error("CONVEX_URL not found");
}

const httpClient = new ConvexHttpClient(CONVEX_URL);
export { httpClient, api }; // Re-export api for convenience