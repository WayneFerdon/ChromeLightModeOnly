// ==UserScript==
// @name         ChromeLightModeOnly
// @namespace    http://tampermonkey.net/
// @version      2024-01-17
// @description  Use light mode only to ensure Chrome AutoDarkMode(chrome://flags/#enable-force-dark) won't change font color (which might cause text unreadable).
// @author       WayneFerdon
// @match        https://ikeda.sapk.ch/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.body.style.cssText += "color-scheme: only light";
})();
