import { Given, When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../support/world";
import { expect } from "@playwright/test";
// import { expect } from "../support/catalog";
// import { CatalogPage } from "../pages/catalogPage";

Given("the application is loaded successfully", async function () {
  // Write code here that turns the phrase above into concrete actions
  const title = await this.page.title();
  expect(title).toBe(
    "Learn the Latest Tech Skills; Advance Your Career | Udacity"
  );
  console.log("Actual page title is " + title);
});

Given("user search for {string}", async function (string) {
  // Write code here that turns the phrase above into concrete actions
});

Given("user clicks on {string} Dropdown", async function (string) {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

When("user search for {string} in Skill Dropdown", async function (string) {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

Then("user sees results matching the search term in the UI", async function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

Then("user fetch search results from the API", async function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

Then("the UI results should match the API results", async function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

Then("user should see a {string} message", async function (string) {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});
