class Glob {
    register(component, parameters = []) {
        let files;
        let supportedComponents = [
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
            files.forEach(file => {
                parameters[0] = file;
                mix[component](...parameters);
            });
        }
        else {
            console.error('Unsupported component given: ' + component);
        }
    }
}

mix.extend('glob', new Glob());