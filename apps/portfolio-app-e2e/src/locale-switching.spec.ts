import { test, expect } from '@playwright/test';
import { mockProfileEn, mockProfileRu } from './fixtures/profiles';

test.beforeEach(async ({ page }) => {
  await page.route('**/profile.en.json', route => route.fulfill({ json: mockProfileEn }));
  await page.route('**/profile.ru.json', route => route.fulfill({ json: mockProfileRu }));
  await page.goto('/');
  // wait for the async profile fetch to complete before each test
  await page.waitForSelector('h1');
});

test.describe('Locale switching', () => {
  test('shows locale switcher with En and Ru buttons', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'En' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Ru' })).toBeVisible();
  });

  test('switches to Russian content when Ru is clicked', async ({ page }) => {
    await page.getByRole('button', { name: 'Ru' }).click();
    await expect(page.getByRole('banner').getByText('Тест разработчик', { exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Опыт работы' })).toBeVisible();
  });

  test('switches back to English content when En is clicked', async ({ page }) => {
    await page.getByRole('button', { name: 'Ru' }).click();
    await expect(page.getByRole('banner').getByText('Тест разработчик', { exact: true })).toBeVisible();

    await page.getByRole('button', { name: 'En' }).click();
    await expect(page.getByRole('banner').getByText('Test Developer', { exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Experience' })).toBeVisible();
  });
});
