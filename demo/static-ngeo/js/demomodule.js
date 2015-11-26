/**
 * @fileoverview This file provides the "app" namespace, which is the
 * application's main namespace. And it defines the application's Angular
 * module.
 */
goog.provide('demo');

goog.require('gmf');


/**
 * @type {!angular.Module}
 */
demo.module = angular.module('demo', [gmfModule.name]);