const vscode = require('vscode');
const autolisp_sysvar = require('../snippets/snippets-lsp-sysvar.json');
const autolispMode =  ['autolisp-prime'] ;
class autolispHoverProvider {
    provideHover(document, position, token) {
		let wordRange = document.getWordRangeAtPosition(position, /"[a-zA-Z0-9_\-]+"/);
		if (wordRange === undefined)
		{
			return Promise.reject("no word here");
		}
		let currentWord = document.lineAt(position.line).text.slice(wordRange.start.character, wordRange.end.character);
		let desc = getSysvarDesc(currentWord);
		if (currentWord != "")
		{
			return Promise.resolve(new vscode.Hover(desc));
		}
    }
}
function getSysvarDesc(s) {
	let orgStr = s.toString().toLowerCase();
	let descStr = "";
	let keys = Object.keys(autolisp_sysvar);
	for (let i=0 ; i<keys.length ; i++){
		let keyStr = keys[i];
		if (keyStr.toLowerCase() == orgStr.toLowerCase()) {
			
			descStr = autolisp_sysvar[keyStr]["description"];
			break;
		}
	}
	if (descStr != "")
	{
		descStr = "````plaintext  \n" + descStr;
		
	}
	return descStr;
}
exports.RegistHoverProvider_sysvar = function (context) {
	context.subscriptions.push(vscode.languages.registerHoverProvider(autolispMode, new autolispHoverProvider()));
}