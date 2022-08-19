const fs = require('fs');
const path = require('path');


function cleanUp(startPath,filter){

    if (!fs.existsSync(startPath)){
        console.log("Config :: not a directory ",startPath);
        return;
    }

    var files=fs.readdirSync(startPath);
    for(var i=0;i<files.length;i++){
        var filename=path.join(startPath,files[i]);
        if (filename.indexOf(filter)>=0) {
            console.log('Config :: delete: ',filename);
            fs.unlinkSync(filename);
        };
    };
};

cleanUp(path.join('config'),'.json');


function copyConfig(startPath, filter, target){

    var files=fs.readdirSync(startPath);
    for(var i=0;i<files.length;i++){
        var filename=path.join(startPath,files[i]);
        if (filename.indexOf(filter)>=0) {
            console.log('Config :: copy: ',filename);
            let targetFile = path.join( target, path.basename( filename ) );
            fs.writeFileSync(targetFile, fs.readFileSync(filename));
        };
    };
};

const folder = process.argv[2] || "prod";

copyConfig(path.join('config',folder), '.json', 'config')