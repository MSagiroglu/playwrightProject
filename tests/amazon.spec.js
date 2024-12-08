const { test, expect } = require('@playwright/test');

test('sayfanın başlığı doğru olmalı', async ({ page }) => {
    await page.goto('https://www.amazon.com');
    const title = await page.title();
    await expect(page).toHaveTitle(title);
    await expect(page).toHaveURL('https://www.amazon.com');
    
    console.log('Sayfanın başlığı:', title);
});

test('bir ürün araması yap' , async ({ page }) => {
    await page.goto('https://www.amazon.com');
    await page.fill('#twotabsearchtextbox', 'laptop'); // locator id ise # , class ise . işaretli kullanılır 
    await page.keyboard.press('Enter');
    await page.waitForSelector('.a-section.a-spacing-medium');
})
