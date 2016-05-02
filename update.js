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
console.log( "Copied 'purestrap.css'");

var docsDir = path.join(srcDir, 'docs');

fs.readdir(docsDir, function(err, files) {
        if(err) {
            console.error("Could not list the directory " + docsDir, err);
            process.exit(1);
        }

        files.forEach( function(file, index) {
                var srcFile = path.join(docsDir, file);
                if ('.md' == path.extname(srcFile)) {
                	fs.stat( srcFile, function( error, stat ) {
	                    if( error ) {
	                        console.error( "Error stating file.", error );
	                        return;
	                    }

	                    if( stat.isFile() ) {
	                    	var dstFile = path.join('./pages', file);
	                    	fs.createReadStream(srcFile).pipe(fs.createWriteStream(dstFile));
	                        console.log( "Copied '%s' to '%s'.", srcFile, dstFile);
	                    } else if( stat.isDirectory() ) {
	                        console.log( "'%s' is a directory.", srcFile );
	                    }

                	});
                }
        });
});

// var MarkdownIt = require('markdown-it'),
// 	md = new MarkdownIt();

// fs.readdir(docsDir, function(err, files) {
//         if(err) {
//             console.error("Could not list the directory " + docsDir, err);
//             process.exit(1);
//         }

//         files.forEach( function(file, index) {
//             var srcFile = path.join(docsDir, file);
//             if ('.md' == path.extname(srcFile)) {
//             	fs.readFile(srcFile, 'utf8', function (err, data) {
// 					if (err) {
// 						return console.log(err);
// 					}

// 					var content = md.render(data);
// 					var dstFile = path.join('./docs', file.slice(0, -3));
// 					var dstFile = dstFile + '.html';
// 					fs.writeFile(dstFile, md.render(data), function(err) {
// 					    if(err) {
// 					        return console.log(err);
// 					    }

// 					    console.log("%s file was saved.", dstFile);
// 					});
// 				});
//             }
//         });
// });
