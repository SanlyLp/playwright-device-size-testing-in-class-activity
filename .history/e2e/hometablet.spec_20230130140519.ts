import { test, devices, expect } from '@playwright/test';

test.use({
    browserName: 'chromium',
    ...devices['iPad Air'],
    viewport: {width: 820, height: 1180}
})

test.describe("Testing for home tablet,", ()=>{
    test('Testing for colours on tablet', async ({ page })=>{
        await page.goto('http://localhost:3000/')

        const mainContainer = page.locator ('#colouring');

        const checkingBackgroundColour = await mainContainer.evaluate((e1e) => {
            return window.getComputedStyle(e1e).getPropertyValue('background-color')
        })

        console.log(checkingBackgroundColour);
        expect(checkingBackgroundColour).toBe("rgb(204, 105, 192)");
    })
})