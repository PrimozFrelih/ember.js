import require from 'require';

import { context } from 'ember-environment';

/**
@module ember
@submodule ember-metal
*/

/**
  This namespace contains all Ember methods and functions. Future versions of
  Ember may overwrite this namespace and therefore, you should avoid adding any
  new properties.

  At the heart of Ember is Ember-Runtime, a set of core functions that provide
  cross-platform compatibility and object property observing.  Ember-Runtime is
  small and performance-focused so you can use it alongside other
  cross-platform libraries such as jQuery. For more details, see
  [Ember-Runtime](http://emberjs.com/api/modules/ember-runtime.html).

  @class Ember
  @static
  @version VERSION_STRING_PLACEHOLDER
  @public
*/
const Ember = (typeof context.imports.Ember === 'object' && context.imports.Ember) || {};

// Make sure these are set whether Ember was already defined or not
Ember.isNamespace = true;

Ember.toString = function() { return 'Ember'; };

// The debug functions are exported to globals with `require` to
// prevent babel-plugin-filter-imports from removing them.
let debugModule = require('ember-metal/debug');
Ember.assert = debugModule.assert;
Ember.warn = debugModule.warn;
Ember.debug = debugModule.debug;
Ember.deprecate = debugModule.deprecate;
Ember.deprecateFunc = debugModule.deprecateFunc;
Ember.runInDebug = debugModule.runInDebug;

/**
  The semantic version.

  @property VERSION
  @type String
  @default 'VERSION_STRING_PLACEHOLDER'
  @static
  @public
*/
Ember.VERSION = 'VERSION_STRING_PLACEHOLDER';

// ..........................................................
// BOOTSTRAP
//

/**
  An empty function useful for some operations. Always returns `this`.

  @method K
  @return {Object}
  @public
*/
function K() { return this; }
export { K };
Ember.K = K;
//TODO: ES6 GLOBAL TODO

export default Ember;
