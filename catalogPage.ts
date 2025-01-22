import { Page } from "@playwright/test";

export class CatalogPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public goto = async () => {
    await this.page.goto("https://www.udacity.com/catalog");
  };
  public searchButton = async () => {
    await this.page.click('//div[@class="css-odegoo"]/button[@type ="button"]');
  };

  public searchFor = async (term: string) => {
    await this.page
      .locator('[role="searchbox"][aria-label="Search input"]')
      .fill(term);
  };
}
export { expect } from "@playwright/test";
