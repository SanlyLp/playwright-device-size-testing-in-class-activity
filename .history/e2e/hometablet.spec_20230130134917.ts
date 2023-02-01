import { test, devices, expect } from '@playwright/test';

test.use({
    browserName: 'chromium',
    ...devices['ipad Air'],
    viewport: {width: 820, height: 1180}
})

test.describe("testing for home tablet,", ()=>{
    test('Testing for colours on tablet', async({page})=>{
        await page.goto('http://localhost:3000/')

        const mainContainer = page.locator ('#colouring');

        const chechinkgBackgroundColour = await mainContainer.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue('backgroun-colour')

        })
        console.log(chechinkgBackgroundColour);
        expect(chechinkgbackgroundColour).toBe('rgb(204, 105, 192)')
    })
})