import { test, expect } from '../utils/test.fixtures'

test('Logo is visible', async ({ homePage }) => {
  expect(await homePage.headerComponent.isLogoVisible()).toBe(true);
});

test('Home button is visible', async ({ homePage }) => {
  expect(await homePage.headerComponent.isHomeButtonVisible()).toBe(true);
});

test('Projects button is visible', async ({ homePage }) => {
  expect(await homePage.headerComponent.isProjectsButtonVisible()).toBe(true);
});

test('Contacts button is visible', async ({ homePage }) => {
  expect(await homePage.headerComponent.isContactsButtonVisible()).toBe(true);
});