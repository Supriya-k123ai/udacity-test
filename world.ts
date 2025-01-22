import { setWorldConstructor } from "@cucumber/cucumber";
import { Browser, Page } from "playwright";

export interface CustomWorld {
  searchTerm?: string;
  uiResults?: string[] | null;
  apiResults?: string[] | null;
  browser: Browser | null;
  page: Page | null;
}

class World implements CustomWorld {
  searchTerm: string = "";
  uiResults: string[] | null = null;
  apiResults: string[] | null = null;
  browser: Browser | null = null;
  page: Page | null = null;
}

setWorldConstructor(World);
