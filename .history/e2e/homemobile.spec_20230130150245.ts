import {test, devices, expect}from '@playwright/test'

test.use({
    browserName: 'chromium',
    ...devices['iphone XR']
})

test.describe("The mobile viewport for iphone XR", ()=>{
    test('Testing for colours on iphone XR', async({page})=>{
        await page.goto('http://localhost:3000')

        const mainContainer = page.locator ("#colour");

        const checkingBackgroundColour = await mainContainer.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue('background-color')
        })

        console.log(checkingBackgroundColour);
        expect(checkingBackgroundColour).toBetoBe("rgb(0, 0, 255)");
    })
})