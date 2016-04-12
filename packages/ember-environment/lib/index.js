import global from './global';

/**
  The hash of environment variables used to control various configuration
  settings. To specify your own or override default settings, add the
  desired properties to a global hash named `EmberENV` (or `ENV` for
  backwards compatibility with earlier versions of Ember). The `EmberENV`
  hash must be created before loading Ember.

  @namespace Ember
  @property ENV
  @type Object
  @public
*/
export const ENV = (typeof global.EmberENV === 'object' && global.EmberENV) ||
                   (typeof global.ENV === 'object' && global.ENV) || {};

// ENABLE_ALL_FEATURES was documented, but you can't actually enable non optional features.
if (ENV.ENABLE_ALL_FEATURES) {
  ENV.ENABLE_OPTIONAL_FEATURES = true;
}

// DEFAULT true unless explicitly false
ENV.EXTEND_PROTOTYPES = ENV.EXTEND_PROTOTYPES === false ? false : true;
ENV.LOG_STACKTRACE_ON_DEPRECATION = ENV.LOG_STACKTRACE_ON_DEPRECATION === false ? false : true;
ENV.LOG_VERSION = ENV.LOG_VERSION === false ? false : true;
// DEFAULT false unless explicitly true
ENV.MODEL_FACTORY_INJECTIONS = ENV.MODEL_FACTORY_INJECTIONS === true ? true : false;
ENV.LOG_BINDINGS = ENV.LOG_BINDINGS === true ? true : false;
ENV.RAISE_ON_DEPRECATION = ENV.RAISE_ON_DEPRECATION === true ? true : false;

// check if window exists and actually is the global
const hasDOM = typeof window !== 'undefined' && window === global &&
               window.document && window.document.createElement &&
               !ENV.disableBrowserEnvironment;

// legacy imports/exports/lookup stuff (should we keep this??)
const originalContext = global.Ember || {};

export const context = {
  // import jQuery
  imports: originalContext.imports || global,
  // export Ember
  exports: originalContext.exports || (global.module && global.module.exports) || global,
  // search for Namespaces
  lookup: originalContext.lookup || global
};

// TODO: cleanup single source of truth issues with this stuff
export const environment = hasDOM ? {
  hasDOM: true,
  isChrome: !!window.chrome && !window.opera,
  isFirefox: typeof InstallTrigger !== 'undefined',
  isPhantom: !!window.callPhantom,
  location: window.location,
  history: window.history,
  userAgent: window.navigator.userAgent,
  window: window
} : {
  hasDOM: false,
  isChrome: false,
  isFirefox: false,
  isPhantom: false,
  location: null,
  history: null,
  userAgent: 'Lynx (textmode)',
  window: null
};
