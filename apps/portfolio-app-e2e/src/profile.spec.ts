import { test, expect } from '@playwright/test';
import { mockProfileEn } from './fixtures/profiles';

test.beforeEach(async ({ page }) => {
  await page.route('**/profile.en.json', route => route.fulfill({ json: mockProfileEn }));
  await page.goto('/');
  // wait for the async profile fetch to complete before each test
  await page.waitForSelector('h1');
});

test.describe('Profile header', () => {
  test('shows name and title', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Test User');
    await expect(page.getByRole('banner').getByText('Test Developer', { exact: true })).toBeVisible();
  });

  test('shows avatar image', async ({ page }) => {
    await expect(page.getByRole('img', { name: 'Test User' })).toBeVisible();
  });

  test('shows social links', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'LinkedIn' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'GitHub' })).toBeVisible();
  });
});

test.describe('Main sections', () => {
  test('renders Experience section with first job', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Experience' })).toBeVisible();
    await expect(page.getByText('Test Corp')).toBeVisible();
  });

  test('renders Education section', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Education' })).toBeVisible();
    await expect(page.getByText('Test University')).toBeVisible();
  });

  test('renders Projects section', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Projects' })).toBeVisible();
    await expect(page.getByText('Test Project', { exact: true })).toBeVisible();
  });
});

test.describe('Sidebar sections', () => {
  test('renders About section', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'About' })).toBeVisible();
    await expect(page.getByText("Hi, I'm a test user")).toBeVisible();
  });

  test('renders Contacts section', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Contacts' })).toBeVisible();
    await expect(page.getByText('test@example.com')).toBeVisible();
  });

  test('renders Skills section with items', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Skills', exact: true })).toBeVisible();
    await expect(page.getByText('TypeScript')).toBeVisible();
  });
});
