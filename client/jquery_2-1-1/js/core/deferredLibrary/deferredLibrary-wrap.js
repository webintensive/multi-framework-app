'use strict';

/**
 * Deferred Library for JQuery
 * Since a lot of libraries implement 'promises' differently we need to create a wrapper interface to have a common ground between different JS frameworks
* @param _$
 * @returns {{create: createDefer, when: createWhen}}
 */
function deferredLibrary(_$) {
  'use strict';

  /**
   * Create Defer object
   * @returns {{reject: (*|deferredLibrary.createDefer.reject|jQuery.Deferred.reject|Deferred.reject|Function|$Q.reject), resolve: (*|deferredLibrary.createDefer.resolve|jQuery.Deferred.resolve|Deferred.resolve|fnDeferCreate_JQuery.resolve|Deferred.fnGenerateDefer.resolve), promise: (*|deferredLibrary.createDefer.promise|jQuery.promise|promise.promise|Deferred._fnGenerateDefer.promise|fnDeferCreate_JQuery.promise), then: (*|deferredLibrary.createDefer.then|promise.then|Promise.then|then|fnDeferCreate_JQuery.then)}}
   */
  function createDefer() {
    var defer = _$.Deferred();

    return {
      reject: defer.reject,
      resolve: defer.resolve,
      promise: defer.promise,
      then: defer.then
    };
  }

  /**
   * Create a Defer when
   * @param object
   * @returns {*|Promise}
   */
  function createWhen (object) {
    if (object instanceof Array) {
      return _$.when.apply(null, object);
    }
    return _$.when (object);
  }

  /**
   * Public API
   */
  return {
    create: createDefer,
    when: createWhen
  };

}