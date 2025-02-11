//InputUsername script commonly used on Fandoom wikis. Import this script to Common.js or a gadget. For further usage visit https://dev.fandom.com/wiki/InputUsername
/* 
 * Script Name: InputUsername
 * Author: Ihojose
 *
 * Adds the username of the user viewing the page.
 * Only works for logged in users.
 *
 * Added by Spottra 5-Apr-2015:
 * Individual users can define "window.disableUsernameReplace = true;" in their
 * global.js or local common.js file to disable the replacement for themselves if
 * they so desire.
 */

;(function ($, mw) {
    'use strict';
    var username = mw.config.get('wgUserName');
    if (
        window.disableUsernameReplace ||
        !username
    ) {
        return;
    }
    window.disableUsernameReplace = true;
    var $rail = $('#WikiaRail'),
        customSelector = window.UsernameReplaceSelector
            ? ', ' + window.UsernameReplaceSelector
            : '';
    function inputUsername($content) {
        $content.find('.InputUsername, .insertusername' + customSelector).text(username);
    }
    mw.hook('wikipage.content').add(inputUsername);
    if ($rail.hasClass('loaded')) {
        inputUsername($rail);
    } else if ($rail.length) {
        $rail.on('afterLoad.rail',
            inputUsername.bind(null, $rail)
        );
    }
})(window.jQuery, window.mediaWiki);
