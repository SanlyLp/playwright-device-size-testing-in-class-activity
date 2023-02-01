import { test, devices, expect } from '@playwright/test';

test.use({
    browserName: 'chromium',
    ...devices['ipad Air'],
    viewport: {width: 820, height: 1180}
})

test.describe