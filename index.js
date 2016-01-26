var v={};

v.v = function(cb) {
	var fs = require('fs');
	var p;
	fs.readFile('./package.json', 'utf8', function(er, d) {
		if(er) {
			cb('Error in opening package.json ' + er)
		}
		else {
			try {
				p = JSON.parse(d);
			} catch(err) {
				cb('Error in parsing package.json '+ err);
			}
			if(p.version) {
				cb(p.version)
			}
			else {
				cb('Cannot find version info from package.json')
			}
		}
	})
};

v.s = function(str){
	if(str){
		return str;
	}
	else {
		return 'Ok'
	}
};

module.exports = v;
