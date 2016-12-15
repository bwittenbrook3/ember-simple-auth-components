/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'dummy',
    environment: environment,
    podModulePrefix:'dummy/pods',
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV["ember-simple-auth-components"] = {
    // logo: "/images/logo.jpg",
    // forgotPasswordRoute: "foo-bar",
  };
  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.APP.host = "http://localhost:3000";
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }


  ENV['ember-simple-auth'] = { 
    authenticationRoute: 'login',  
    authorizer: 'simple-auth-authorizer:devise',
    routeAfterAuthentication: 'admin',
    routeIfAlreadyAuthenticated: 'admin',
    crossOriginWhitelist: [ENV.APP.host],
  };
  ENV['simple-auth-devise'] = { 
    serverTokenEndpoint : ENV.APP.host + '/users/sign_in'
   };


 return ENV;
};
