let globParent = require('glob-parent');
let path = require('path');

class Glob {
    register(component, parameters = []) {
        let files,
            fileRoot,
            outputFile,
            params,
            supportedComponents = [
          'sass',
          'less',
          'stylus',
          'postCss',
          'js',
          'react',
          'ts'
        ];
        if (supportedComponents.includes(component)) {
            files = glob.sync(parameters[0]);
            fileRoot = globParent(parameters[0]);
            files.forEach(file => {
                params = [...parameters];

                // set entry file
                params[0] = file;

                // build relative output path
                outputFile = path.normalize(parameters[1]) + path.sep + path.relative(fileRoot, file);
                params[1] = path.dirname(outputFile);

                // run component
                mix[component](...params);
            });
        }
        else {
            console.error('Unsupported component given: ' + component);
        }
    }
}

mix.extend('glob', new Glob());