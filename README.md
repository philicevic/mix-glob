# Mix Glob

A laravel mix extension to support glob values.
It gives developers the opportunity to use glob values instead of adding every file ony by one.

## Usage

Usage of `glob` always follows the same pattern.
The first parameter is the component you want to use.
The second contains an array of parameters that should be passed to the used component.

The following components are supported:
- `sass`
- `less`
- `stylus`
- `postCss`
- `js`
- `react`
- `ts`

Example using the `sass` component:
```
// Use every sass file as a seperate entry point
mix.glob('sass', ['src/scss/**/*.scss', 'dist/css']);

// Exclude files that start with an underscore
mix.glob('sass', ['src/scss/**/[^_]*.scss', 'dist/css']);
```