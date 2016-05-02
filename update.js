var srcDir = '../purestrap';

var fs = require('fs');
var path = require('path');

var demoDir = path.join(srcDir, 'demo');

// Copy all the .html files
fs.readdir(demoDir, function(err, files) {
        if(err) {
            console.error("Could not list the directory " + srcDir, err);
            process.exit(1);
        }

        files.forEach( function(file, index) {
                var srcFile = path.join(demoDir, file);
                if ('.html' == path.extname(srcFile)) {
                	fs.stat( srcFile, function( error, stat ) {
	                    if( error ) {
	                        console.error( "Error stating file.", error );
	                        return;
	                    }

	                    if( stat.isFile() ) {
	                    	var dstFile = path.join('./demo', file);
	                    	fs.createReadStream(srcFile).pipe(fs.createWriteStream(dstFile));
	                        console.log( "Copied '%s' to '%s'.", srcFile, dstFile);
	                    } else if( stat.isDirectory() ) {
	                        console.log( "'%s' is a directory.", srcFile );
	                    }

                	});
                }
        });
});

fs.createReadStream(path.join(demoDir, 'purestrap.css')).pipe(fs.createWriteStream('./demo/purestrap.css'));

var MarkdownIt = require('markdown-it'),
    md = new MarkdownIt();
var result = md.render('# markdown-it rulezz!');
console.log(result);
