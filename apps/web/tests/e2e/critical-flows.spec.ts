import { expect, test } from '@playwright/test'

// The API is mocked so these tests cover the website alone; apps/api has its own tests.
const API = 'http://localhost:8000'

test('homepage hero bill explains a line when tapped', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Your bills shouldn')
  await expect(page.getByRole('link', { name: 'Explore your bills' })).toHaveAttribute('href', '/categories')
  await page.getByRole('button', { name: /Distribution/ }).click()
  await expect(page.getByText('poles, wires and substations')).toBeVisible()
})

test('category explorer switches categories', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('tab', { name: 'Water & Sewer' }).click()
  await expect(page.getByRole('link', { name: /Read the water & sewer guide/i })).toHaveAttribute('href', '/categories/water-sewer')
})

test('supply-or-delivery quiz scores answers', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'delivery', exact: true }).click()
  await expect(page.getByText('Right.')).toBeVisible()
})

test('search finds glossary terms and articles', async ({ page }) => {
  await page.goto('/search?q=escrow')
  await expect(page.getByText(/results for/)).toBeVisible()
  await expect(page.getByRole('link', { name: /escrow/i }).first()).toBeVisible()
})

test('every category page renders all 13 sections', async ({ page }) => {
  await page.goto('/categories/water-sewer')
  for (const id of ['overview', 'how-it-works', 'charges', 'why-costs-rise', 'read-your-bill', 'review', 'tools', 'compare', 'videos', 'articles', 'faq', 'by-state', 'shop']) {
    await expect(page.locator(`section#${id}`)).toHaveCount(1)
  }
  await expect(page.getByRole('heading', { name: 'Sources' })).toBeVisible()
})

test('electricity calculator computes a bill from user inputs', async ({ page }) => {
  await page.goto('/tools/electricity-cost')
  await page.getByLabel('Electricity used').fill('600')
  await page.getByLabel('Supply (energy) rate').fill('12')
  await page.getByLabel('Delivery rate').fill('10')
  await page.getByLabel('Fixed monthly charge').fill('15')
  await page.getByLabel('Taxes and percentage fees').fill('5')
  await expect(page.locator('#panel-bill output')).toContainText('$154.35')
})

test('newsletter signup sends consent and shows the confirm state', async ({ page }) => {
  let body: Record<string, unknown> | null = null
  await page.route(`${API}/v1/newsletter/subscribe`, async (route) => {
    body = route.request().postDataJSON()
    await route.fulfill({ status: 202, json: { message: 'ok' }, headers: { 'access-control-allow-origin': '*' } })
  })
  await page.goto('/newsletter')
  const form = page.locator('form').filter({ has: page.getByRole('button', { name: 'Subscribe' }) }).first()
  await form.getByRole('button', { name: 'Subscribe' }).click()
  await expect(form.getByText('Enter a valid email address.')).toBeVisible()
  await form.getByPlaceholder('you@example.com').fill('reader@example.com')
  await form.getByRole('checkbox', { name: /Yes, email me/ }).check()
  await form.getByRole('button', { name: 'Subscribe' }).click()
  await expect(page.getByText('Check your inbox to confirm.')).toBeVisible()
  expect(body).toMatchObject({ email: 'reader@example.com', consent: true, website: '' })
})

test('bag works and checkout is honest about launch', async ({ page }) => {
  await page.goto('/shop/classic-tee')
  await page.getByRole('button', { name: /Add to bag/ }).click()
  await expect(page.getByText('Choose a size.')).toBeVisible()
  await page.getByRole('button', { name: 'M', exact: true }).click()
  await page.getByRole('button', { name: /Add to bag/ }).click()
  await expect(page.getByRole('link', { name: /Shopping bag, 1 item/ })).toBeVisible()
  await page.goto('/cart')
  await expect(page.getByText('Size: M')).toBeVisible()
  await page.getByRole('button', { name: 'Checkout' }).click()
  await expect(page.getByRole('dialog')).toContainText('Checkout opens at launch')
})

test('unknown pages return the 404 view', async ({ page }) => {
  const res = await page.goto('/categories/not-a-real-bill')
  expect(res?.status()).toBe(404)
  await expect(page.getByText('This page isn')).toBeVisible()
})

test('mobile menu opens full screen and navigates', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'The hamburger menu only shows on smaller screens')
  await page.goto('/')
  await page.getByRole('button', { name: 'Open menu' }).click()
  const menu = page.locator('#mobile-nav')
  await expect(menu).toBeVisible()
  expect((await menu.boundingBox())!.height).toBeGreaterThan(300)
  await menu.getByText('Explore Bills').click()
  await menu.getByRole('link', { name: 'Water & Sewer' }).click()
  await expect(page).toHaveURL(/\/categories\/water-sewer$/)
  await expect(menu).toHaveCount(0)
})
