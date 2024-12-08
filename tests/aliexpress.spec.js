const {test, expect} = require('@playwright/test');

test.describe('Aliexpress Arama İşlevselliği', () => {
    
test.beforeEach(async ({ page }) => {

    await page.goto('https://www.aliexpress.us/?gatewayAdapt=tur2usa' , {timeout: 5000, waitUntil: 'domcontentloaded'});

    })

    test ('Arama giriş alanının görünür ve etkin olduğunu doğrula', async ({ page }) => {
        const searhInput = page.locator('.search--keyword--15P08Ji');
        
        await expect(searhInput).toBeVisible();
        await expect(searhInput).toBeEnabled();

}









)})