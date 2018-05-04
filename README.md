# Google Charts Offload
Offload the import of Google Charts library dynamically into your node project.

## Quick start

Install onto your node project using `yarn` or `npm`:

```
yarn add google-charts-offload
```

```
npm install google-charts-offload
```

To use:

Import Google Charts loader from ```https://www.gstatic.com/charts/loader.js```
```
'use strict'

const googleChartsLoad = require('google-charts-offload')

googleChartsLoad(function (err, ref) {
  if (err) {
    console.log(err)
  } else {
      console.log('Google Charts as been imported', ref)
  }
})

```

In case you want to load the library into your build you can use the js file stored here ```/lib/google-charts-loader.min.js```
then in your webpack config or equivalent add the following
```
new CopyWebpackPlugin([{
    {
      from: '../node_modules/google-charts-offload/lib/google-charts-loader.min.js',
      to: 'google-charts-loader.min.js'
    }])
```
and include in your index page ```<script src=google-charts-loader.min.js"></script>```

## License

This project is [MIT licensed](./LICENSE). By contributing you agree that your contributions will be licensed under its
MIT license.