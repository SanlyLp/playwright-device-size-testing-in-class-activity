const {devices} = require('@playwright/test');

/**@type  */

const config ={
    timeout : 30000,
    use{
        ignoreHTTPSErrors: true,

    }
}