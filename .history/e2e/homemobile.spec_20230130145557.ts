import {test, devices, expect}from '@playwright/test'

test.use({
    browserName: 'chromium',
    ...device['iphone XR']
})

test.describe("The mobile viewport for iphone XR", ()=>{
    test('Testing for colours on iphone XR', async({page})=>{
        await page.goto
    })
})