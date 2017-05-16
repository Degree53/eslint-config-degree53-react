module.exports = {
	
	"rules": {
		"react/jsx-boolean-value": [ 2, "always" ],
		"react/jsx-closing-bracket-location": [ 2, "after-props" ],
		"react/jsx-curly-spacing": [ 2, "never" ],
		"react/jsx-equals-spacing": [ 2, "never" ],
		"react/jsx-filename-extension": [ 2, {
			"extensions": [ "jsx" ]
		}],
		"react/jsx-first-prop-new-line": [ 2, "multiline" ],
		"react/jsx-handler-names": [ 2, {
			"eventHandlerPrefix": "",
			"eventHandlerPropPrefix": "on"
		}],
		"react/jsx-indent": [ 2, "tab" ],
		"react/jsx-indent-props": [ 2, "tab" ],
		"react/jsx-key": 2,
		"react/jsx-max-props-per-line": [ 2, {
			"maximum": 1,
			"when": "multiline"
		}],
		"react/jsx-no-bind": [ 2, {
			"allowArrowFunctions": false,
			"allowBind": false,
			"ignoreRefs": false
		}],
		"react/jsx-no-comment-textnodes": 2,
		"react/jsx-no-duplicate-props": [ 2, {
			"ignoreCase": true
		}],
		"react/jsx-no-literals": 2,
		"react/jsx-no-target-blank": 2,
		"react/jsx-no-undef": [ 2, {
			"allowGlobals": true
		}],
		"react/jsx-pascal-case": [ 2, {
			"allowAllCaps": false,
			"ignore": []
		}],
		"react/jsx-sort-props": 0,
		"react/jsx-tag-spacing": [ 2, {
			"afterOpening": "never",
			"beforeSelfClosing": "always",
			"closingSlash": "never"
		}],
		"react/jsx-uses-react": 2,
		"react/jsx-uses-vars": 2,
		"react/jsx-wrap-multilines": [ 2, {
			"arrow": true,
			"assignment": true,
			"declaration": true,
			"return": true
		}]
	}
};