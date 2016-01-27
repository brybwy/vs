show-version-status
===================

A module showing
    1) Version info from pakcage.json
    2) A customizable status or 'Ok' by default

## Installation
    npm install show-version-status --save

## usage
    var show = require('show-version-status');
    show.version(function(info)
    {
        console.log(info);
    });
    console.log(show.status());

## test
    npm test

## Contributing
    brybwy@gmail.com

## Relese History
    * 1.0.0 Initial release
