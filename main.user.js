// ==UserScript==
// @name         amae-koromoLightModeOnly
// @namespace    http://tampermonkey.net/
// @version      2023-12-05
// @description  Use light mode only in amae-koromo(https://ikeda.sapk.ch/) to ensure Chrome AutoDarkMode(chrome://flags/#enable-force-dark) won't change font color (which might cause text unreadable).
// @author       WayneFerdon
// @match        https://ikeda.sapk.ch/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.body.style.cssText += "color-scheme: only light";
})();
