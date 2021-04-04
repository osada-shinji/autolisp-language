# Autolisp' language support README
## Enjoy autolisp' language scripting
This extension is a general-purpose coding environment for AutoCAD's AutoLISP language. It can also be used as a LISP development environment for compatible CAD.

* With extension "lsp" "mnl".
* Syntax highlight.
* Function input by IntelliSense.
* Sysvar input by snippets.
* Autolisp' color theme.
* Extension "dcl" support.
* Convert code point and utf-8 by context menu in selection area.
* Symbol normalization extension.
* Descripton in snippets for system variables.
* Hover provider for system variables.




### Autolisp' default configrations.
	"[autolisp-prime]": {
		"editor.acceptSuggestionOnEnter": "off",
		"editor.autoClosingBrackets": "never",
		"editor.insertSpaces": false,
		"editor.hover.delay": 100,
		"editor.hover.enabled": true,
		"editor.hover.sticky": false,
		"editor.quickSuggestions": true,
		"editor.tabSize": 4,
		"editor.wordBasedSuggestions": false,
		"editor.wordWrap": "on",
		"files.encoding": "utf8"
	},
	
### AutolispDCL' default configrations.
	"[autolispdcl-prime]": {
		"editor.acceptSuggestionOnEnter": "off",
		"editor.autoClosingBrackets": "languageDefined",
		"editor.insertSpaces": false,
		"editor.quickSuggestions": true,
		"editor.tabSize": 4,
		"editor.wordBasedSuggestions": false,
		"editor.wordWrap": "on",
		"files.encoding": "utf8"
	},

## If you want to change encoding by yourself.

### VSCode settings.json

### .lsp .mnl

	"[autolisp-prime]": {
		"files.encoding": "shiftjis"
    },

### .dcl

	"[autolispdcl-prime]": {
		"files.encoding": "shiftjis"
    },
