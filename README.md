# Ember-svg-sprite-sheet

The goal of this addon is to compile svgs into a "srpite sheet" that is then inlined at the top of the document body. 
For now you must precompile your svg file, but in the future this addon will automate this process.

## Installation

* `ember install ember-svg-sprite-sheet`

Add the following to your `Brocfile.js`, where `'path'` is a reative URL from your apps root to a precompiled svg 
sprite sheet (for now).

```JS
var app = new EmberApp({
  'ember-svg-sprite-sheet': {
    'path': 'public/svg/svgss.svg'
  }
});
```

## Usage

`{{svg-sprite sprite="#svg-twitter" class="icon"}}`
`sprite` is the name of the SVG you want to use from your sheet.
`class` is a string of classes you want to add to the svg.

Rendered output:

```HTML
<svg id="ember464" class="ember-view svg-sprite icon">
  <use href="#svg-twitter"></use>
</svg>
```

Note that you'll want to hide the spritesheet `<svg>` that gets inserted into the top of the body of your Ember 
application.

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
