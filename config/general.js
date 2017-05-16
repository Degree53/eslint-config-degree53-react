module.exports = {
	
	"rules": {
		"react/display-name": [ 2, {
			"ignoreTranspilerName": false
		}],
		"react/forbid-component-props": 0,
		"react/forbid-elements": 0,
		"react/forbid-prop-types": 0,
		"react/forbid-foreign-prop-types": 2,
		"react/no-array-index-key": 2,
		"react/no-children-prop": 2,
		"react/no-danger": 2,
		"react/no-danger-with-children": 2,
		"react/no-deprecated": 2,
		"react/no-did-mount-set-state": [ 2, "disallow-in-func"],
		"react/no-did-update-set-state": [ 2, "disallow-in-func"],
		"react/no-direct-mutation-state": 2,
		"react/no-find-dom-node": 2,
		"react/no-is-mounted": 2,
		"react/no-multi-comp": [ 2, {
			"ignoreStateless": false
		}],
		"react/no-render-return-value": 2,
		"react/no-set-state": 0,
		"react/no-string-refs": 2,
		"react/no-unescaped-entities": 2,
		"react/no-unknown-property": [ 2, {
			"ignore": []
		}],
		"react/no-unused-prop-types": [ 2, {
			"customValidators": [],
			"skipShapeProps": false
		}],
		"react/no-will-update-set-state": [ 2, "disallow-in-func"],
		"react/prefer-es6-class": [ 2, "always" ],
		"react/prefer-stateless-function": [ 2, {
			"ignorePureComponents": false
		}],
		"react/prop-types": [ 2, {
			"customValidators": [],
			"ignore": [],
			"skipUndeclared": false
		}],
		"react/react-in-jsx-scope": 2,
		"react/require-default-props": 2,
		"react/require-optimization": 0,
		"react/require-render-return": 2,
		"react/self-closing-comp": [ 2, {
			"component": true,
			"html": true
		}],
		"react/sort-comp": [ 2, {
			"groups": {
				"lifecycle": [
					"displayName",
					// "mixins",
					"statics",
					// "contextTypes",
					// "childContextTypes",
					// "getChildContext",
					"propTypes",
					"defaultProps",
					// "getDefaultProps",
					// "state",
					"constructor",
					// "getInitialState",
					"componentWillMount",
					"componentDidMount",
					"componentWillReceiveProps",
					"shouldComponentUpdate",
					"componentWillUpdate",
					"componentDidUpdate",
					"componentWillUnmount"
				],
				"eventHandlers": [
					"/^(on|handle).+$/"
				],
				"rendering": [
					"/^render.+$/",
					"render"
				]
			},
			"order": [
				"lifecycle",
				"everything-else",
				"eventHandlers",
				"rendering"
			]
		}],
		"react/sort-prop-types": 0,
		"react/style-prop-object": 2,
		"react/void-dom-elements-no-children": 2
	}
};