import { CustomWorld } from "./world";
import { Before, After } from "@cucumber/cucumber";
import { Browser, chromium, Page, BrowserContext } from "@playwright/test";

// let browser: Browser;
// let context: BrowserContext;
// let page: Page;
Before(async function (this: CustomWorld) {
  console.log("inside hooks");
  this.browser = await chromium.launch({ headless: false });

  console.log("chrome launched");
  const context = await this.browser.newContext();
  this.page = await context.newPage();
});

After(async function (this: CustomWorld) {
  await this.page?.close();
  await this.browser?.close();
});
