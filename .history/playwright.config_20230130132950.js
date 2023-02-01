const {devices} = require('@playwright/test');

/**@type {import('')} */

const config ={
    timeout : 30000,
    use{
        ignoreHTTPSErrors: true,

    }
}