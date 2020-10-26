# Autolisp-language support README
## Enjoy autolisp language scripting
* With extension "lsp" "mnl".
* Syntax highlight.
* Function input by IntelliSense.
* Sysvar input by snippet.
* Autolisp color theme.
* "dcl" support
* Convert code point and utf-8 by context menu in selection area.


### Autolisp' default configrations.
	"[autolisp-prime]": {
		"editor.acceptSuggestionOnEnter": "off",
		"editor.autoClosingBrackets": "never",
		"editor.insertSpaces": false,
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
