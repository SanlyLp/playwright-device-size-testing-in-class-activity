const {devices} = require('@playwright/test');

const config ={
    timeout : 30000,
    use{
        ignoreHTTPSErrors: true,
        
    }
}