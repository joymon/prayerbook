exports.config = {
        framework: 'jasmine', //Type of Framework used 
        directConnect:true, 
        capabilities: {
            'browserName': 'chrome',
            args: ['--headless', '--no-sandbox'] ,
            chromeOptions: {
                args: [ "--headless", "--disable-gpu", "--window-size=800x600", "--no-sandbox" ]
              }
        },
        specs: ['./tests/integration/*.spec.ts','./tests/integration/*test.ts'], //Name of the Specfile 
        onPrepare() { 
              require('ts-node').register({ 
              project: require('path').join(__dirname, './tsconfig.json') // Relative path of tsconfig.json file 
         });
        } 
}