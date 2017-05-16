# Degree 53 React ESLint Config

This config is dependent on `eslint@3.19.0` and `eslint-plugin-react@7.0.1` being installed to your `./node_modules` at the same level.

Your `.eslintrc` file should be at the same level or deeper than your `./node_modules` and should contain the following:

``` javascript
{
	"extends": [
		"degree53-react"
	]
}
```

***NOTE:*** If you are using `babel`, you will also need to install `babel-eslint@7.2.2` and add the following to your `.eslintrc` file:

``` javascript
{
	"parser": "babel-eslint"
}
```

For an explanation of the rules please see the [ESLint documentation](http://eslint.org/docs/rules/).
