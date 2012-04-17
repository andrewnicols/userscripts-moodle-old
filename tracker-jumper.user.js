// ==UserScript==
// @match         http://tracker.moodle.org/browse/*
// @name          Tracker Jumper
// @description   Makes jumping to different sections of the Moodle Tracker easier
// @author        Andrew Nicols
// @homepage      http://github.com/andrewnicols/userscripts-moodle
// @namespace     http://userscripts.andrewrn.co.uk
// @downloadURL   https://github.com/andrewnicols/userscripts-moodle/raw/master/tracker-jumper.user.js
// @version       0.2
// ==/UserScript==

var description = document.getElementById('descriptionmodule');

if (!description) {
    return;
}

var interestingrows = {
  'top' : {
    'id'    : 'details-module',
    'title' : 'Details'
  },
  'description' : {
    'id'    : 'descriptionmodule',
    'title' : 'Description'
  },
  'links' : {
    'id'    : 'linkingmodule',
    'title' : 'Links'
  },
  'activity' : {
    'id'    : 'activitymodule',
    'title' : 'Activity'
  },
};

var s = '';
for (var key in interestingrows) {
  var obj = interestingrows[key];
  s += '<li><a href="#" onClick="if(thiselement = document.getElementById(\'' + obj.id + '\')) {window.scrollTo(0, (thiselement.offsetTop + 90)); return false;}">' + obj.title + '</a></li>';
}

// Prepare List
var menuul = document.createElement('ul');
menuul.innerHTML = s;
menuul.setAttribute('style', 'list-style: none; padding-left: 0px; margin: 5px');

// prepare div
var menudiv = document.createElement('div');
menudiv.appendChild(menuul);
menudiv.setAttribute('style', 'border: 1px solid #eee; right: 0px; position: absolute; display: block; width: 200px; padding: 3px; background-color: #ddd; z-index: 100');

var parent = document.getElementById('stalker');
var divs = parent.getElementsByTagName('div');
parent.insertBefore(menudiv, divs[0]);
