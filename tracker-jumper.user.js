// ==UserScript==
// @match         http://tracker.moodle.org/browse/*
// @name          Tracker Jumper
// @description   Makes jumping to different sections of the Moodle Tracker easier
// @author        Andrew Nicols
// @homepage      http://github.com/andrewnicols/userscripts-moodle
// @namespace     http://userscripts.andrewrn.co.uk
// @downloadURL   https://github.com/andrewnicols/userscripts-moodle/raw/master/tracker-jumper.user.js
// @version       0.1
// ==/UserScript==

var description = document.getElementById('descriptionmodule');

if (!description) {
    return;
}

var interestingrows = {
  testing = {
    'id'    : 'rowForcustomfield_10117',
    'title' : 'Testing Instructions'
  },
  difficulty = {
    'id'    : 'rowForcustomfield_10051',
    'title' : 'Difficulty'
  }
};

var s = '<ul>';
for (var key in interestingrows) {
  var obj = interestingrows[key];
  s += '<li><a href="#' + obj.id + '">' + obj.title + '</a></li>';
}

// prepare div
var menudiv = document.createElement('div');
menudiv.innerHTML = s;
menudiv.setAttribute('style', 'border-top: 1px solid #DDD;');
parent.insertBefore(menudiv, document.getElementById('tabCellPane1'));
