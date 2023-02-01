const {devices} = require('@playwright/test');

/**@type {import('@playwright/test').play} */

const config ={
    timeout : 30000,
    use{
        ignoreHTTPSErrors: true,

    }
}