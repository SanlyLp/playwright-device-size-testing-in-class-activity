import {test, device, expect}from '@playwright/test'

test.use({
    browserName: 'chromium',
    ...device
})