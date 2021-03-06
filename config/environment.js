/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'supplejack-client',
    environment: environment,
    rootURL: '/',
    locationType: 'router-scroll',
    historySupportMiddleware: true,
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    // remove the whiteist errors by adding your server port below
    //fastboot: {
    //      hostWhitelist: [/^localhost:\d+$/, 'WEBSERVER-PORT-HERE']
   // }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    //VARIABLES FOR DIGITAL NZ DATASET
    /*
    ENV.APP.host = 'http://api.digitalnz.org';
    ENV.APP.namespace = 'v3';
    ENV.APP.api_key = '<your api key>';
    ENV.APP.primaryKey = 'id';
    ENV.APP.searchFields = 'title,creator,thumbnail_url,description,id,locations';
    ENV.APP.resultFields = 'default';
    */

    //VARIABLES FOR LOCAL SUPPLEJACK DATASET
    ENV.APP.host = 'YOUR-SJ-IP-HERE:3000';
    ENV.APP.namespace = '';
    ENV.APP.api_key = 'YOUR-APIKEY-HERE';
    ENV.APP.primaryKey = 'record_id';
    ENV.APP.searchFields = 'default';
    ENV.APP.resultFields = 'all';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
