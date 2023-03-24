const { defineConfig } = require('cypress')

// module.exports = defineConfig({
//   reporter: 'cypress-mochawesome-reporter',
//   reporterOptions: {
//     charts: true,
//     reportPageTitle: 'custom-title',
//     embeddedScreenshots: true,
//     inlineAssets: true,
//     saveAllAttempts: false,
//     code: false,
//     autoOpen: true,
//     overwrite: false,
//     reportDir :'cypress/reports'
//   },
//   e2e: {
//     setupNodeEvents(on, config) {
//       require('cypress-mochawesome-reporter/plugin')(on);
//     },
//   },
// });

module.exports = defineConfig({
  projectId: 'uk9hz8',
  viewportWidth: 1920,
  viewportHeight: 1080,
  env: {
    santosh: {
      id: 1,
      email: 'skakade@meetsoci.com',
      password: 'Logitech@2',
      utc_offset: 360,
     
        
      },
    
    },  
  // ,              { 
    reporter: 'cypress-mochawesome-reporter',

  "reporterOptions": {
    "charts": true,
    "reportDir" :'cypress/reports',
    "reportPageTitle": 'Demo-title1',
    "embeddedScreenshots": true,
    "inlineAssets": true,
    "saveAllAttempts": false,
    "embeddedScreenshots": true,
    "overwrite": false,
    "html" : true },


    retries:{

      openMode: 2,
      runMode: 3
    } ,

    chromeWebSecurity: false , 


  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      // return require('./cypress/plugins/index.js')(on, config)
      require('cypress-mochawesome-reporter/plugin')(on);
      
    },

    baseUrl: 'https://sneaky.meetsoci.com',
    // baseUrl: 'https://sneaky.test-meetsoci.com',
  },



});


