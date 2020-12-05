const vscode = require('vscode');

const jsonAutolispSyntax = require("../syntaxes/autolisp-prime.tmLanguage.json");

const autolisp_atom = require('../snippets/snippets-lsp-symbol.json');
const autolisp_const = require('../compItems/autolisp-const');
const autolisp_enum_ac = require('../compItems/autolisp-enum-ac');
const autolisp_enum_vlax_vb = require('../compItems/autolisp-enum-vlax-vb');
const autolisp_func_acet = require('../compItems/autolisp-func-acet');
const autolisp_func_std = require('../compItems/autolisp-func-std');
const autolisp_func_vl = require('../compItems/autolisp-func-vl');
const autolisp_func_vla = require('../compItems/autolisp-func-vla');
const autolisp_func_vla_get = require('../compItems/autolisp-func-vla-get');
const autolisp_func_vla_put = require('../compItems/autolisp-func-vla-put');
const autolisp_func_vlax = require('../compItems/autolisp-func-vlax');
const autolisp_func_vlisp = require('../compItems/autolisp-func-vlisp');
const autolisp_func_vlr = require('../compItems/autolisp-func-vlr');
//const autolispdcl_attribute = require('../compItems/autolispdcl-attribute');
//const autolispdcl_keyword = require('../compItems/autolispdcl-keyword');
//const autolispdcl_tile = require('../compItems/autolispdcl-tile');


exports.RegistSymbolNormalization = function () {
	vscode.commands.registerCommand('extension.SymbolNormalization', () => {
		var editor = vscode.window.activeTextEditor;
		//var text = editor.document.getText(editor.selection);
		var text = editor.document.getText();

		var textOrg = text;
		var tmpStr = "";
		var str;
		var num = 0;
		console.log(editor.document.languageId);
		 
		while (true)
		{
			var escDoubleQuote = "<escdoublequote" + num.toString() + ">";
			var index = text.indexOf(escDoubleQuote);
			if (index >= 0){
				num = num + 1;
			}
			else
			{
				break;
			}
		}
		var regexp = new RegExp("\\\\\"","g");
		text = text.replace(regexp , escDoubleQuote);
		while (true)
		{
			var posDoubleQuote = text.indexOf("\"");
			var posSemiColon = text.indexOf(";");
			//ダブルクォートが先頭の場合
			if (posDoubleQuote == 0) {
				str = text.match("\"(.|\\r\\n)*?(\"|$)");
				var len = str[0].toString().length;
				tmpStr = tmpStr + str[0].toString();
				text = text.substring(len);
				if (text.length == 0) {
					break;
				}
			}
			//セミコロンが先頭の場合
			if (posSemiColon == 0) {
				//単一行注釈
				if (text.substring(1 , 2) != "|") 
				{
					str = text.match("^;.*(\\r\\n|$)");
					var len = str[0].toString().length;
					tmpStr = tmpStr + str[0].toString();
					text = text.substring(len);
					if (text.length == 0) {
						break;
					}	
					
				}
				//複数行注釈
				else
				{
					str = text.match("^;\\|(.|\\r\\n)*?(\\|;|$)");
					var len = str[0].toString().length;
					tmpStr = tmpStr + str[0].toString();
					text = text.substring(len);
					if (text.length == 0) {
						break;
					}	
				}
			}
			//どちらもない為すべて変換
			if(posDoubleQuote == -1 && posSemiColon == -1)
			{
				str = chCase(text);
				tmpStr = tmpStr + str;
				break;
			}
			//セミコロンまでの文字列を変換
			if (posDoubleQuote == -1 && posSemiColon > 0) {
				str = text.substring(0 , posSemiColon);
				str = chCase(str);
				tmpStr = tmpStr + str;
				text = text.substring(posSemiColon);
			}
			//ダブルクォート直前までの文字列を変換
			if (posDoubleQuote > 0 && posSemiColon == -1){
				str = text.substring(0 , posDoubleQuote);
				str = chCase(str);
				tmpStr = tmpStr + str;
				text = text.substring(posDoubleQuote);
			}
			//どちらも存在している。
			if (posDoubleQuote > 0 && posSemiColon > 0){
				//ダブルクオート直前までの文字列を変換
				if (posDoubleQuote < posSemiColon) {
					str = text.substring(0 , posDoubleQuote);
					str = chCase(str);
					tmpStr = tmpStr + str;
					text = text.substring(posDoubleQuote);
				}
				//セミコロン直前までの文字列を変換
				else
				{
					str = text.substring(0 , posSemiColon);
					str = chCase(str);
					tmpStr = tmpStr + str;
					text = text.substring(posSemiColon);
				}
			}
		}

		var regexp = new RegExp(escDoubleQuote,"g"); 
		tmpStr = tmpStr.replace(regexp , "\\\"");

		let startPos = new vscode.Position(0,0);
		let endPos = new vscode.Position(0,0);

		editor.selection = new vscode.Selection(startPos,endPos);
		if (textOrg.toLowerCase() == tmpStr.toLowerCase())
		{
			res = tmpStr;
			editor.edit((builder) => {
				builder.replace(new vscode.Range(0, 0, editor.document.lineCount  + 1, 0) , res);
			});
			vscode.window.showInformationMessage("Symbol normalization was successful.");
			console.log("Symbol normalization was successful.");
		}
		else
		{
			vscode.window.showErrorMessage("Symbol nomalizasion failed.");
			console.log("Symbol nomalizasion failed.");
		}
	});
}
function chCase (text) {
		var pattern;
		var regexp;
		pattern = jsonAutolispSyntax.repository.keywords.patterns[0].match.toString().replace('(?i)', '');
		regexp = new RegExp(pattern,"ig");
		text = text.replace(regexp,optAtom0);
		pattern = jsonAutolispSyntax.repository.keywords.patterns[1].match.toString().replace('(?i)', '');
		regexp = new RegExp(pattern,"ig");
		text = text.replace(regexp, optAtom1);
		pattern = jsonAutolispSyntax.repository.keywords.patterns[2].match.toString().replace('(?i)', '');
		regexp = new RegExp(pattern,"ig");
		text = text.replace(regexp, optAtom2);
		pattern = jsonAutolispSyntax.repository.keywords.patterns[3].match.toString().replace('(?i)', '');
		regexp = new RegExp(pattern,"ig");
		text = text.replace(regexp, optAtom3);
		pattern = jsonAutolispSyntax.repository.keywords.patterns[4].match.toString().replace('(?i)', '');
		regexp = new RegExp(pattern,"ig");
		text = text.replace(regexp, optAtom4);
		pattern = jsonAutolispSyntax.repository.keywords.patterns[5].match.toString().replace('(?i)', '');
		regexp = new RegExp(pattern,"ig");
		text = text.replace(regexp, optAtom5);
		pattern = jsonAutolispSyntax.repository.keywords.patterns[6].match.toString().replace('(?i)', '');
		regexp = new RegExp(pattern,"ig");
		text = text.replace(regexp, optAtom6);
		pattern = jsonAutolispSyntax.repository.keywords.patterns[7].match.toString().replace('(?i)', '');
		regexp = new RegExp(pattern,"ig");
		text = text.replace(regexp, optAtom7);
		pattern = jsonAutolispSyntax.repository.keywords.patterns[8].match.toString().replace('(?i)', '');
		regexp = new RegExp(pattern,"ig");
		text = text.replace(regexp, optAtom8);
		pattern = jsonAutolispSyntax.repository.keywords.patterns[9].match.toString().replace('(?i)', '');
		regexp = new RegExp(pattern,"ig");
		text = text.replace(regexp, optAtom9);
		pattern = jsonAutolispSyntax.repository.keywords.patterns[10].match.toString().replace('(?i)', '');
		regexp = new RegExp(pattern,"ig");
		text = text.replace(regexp, optAtom10);
		pattern = jsonAutolispSyntax.repository.keywords.patterns[11].match.toString().replace('(?i)', '');
		regexp = new RegExp(pattern,"ig");
		text = text.replace(regexp, optAtom11);
		pattern = jsonAutolispSyntax.repository.keywords.patterns[12].match.toString().replace('(?i)', '');
		regexp = new RegExp(pattern,"ig");
		text = text.replace(regexp, optAtom12);
		var res = text;
		return res;

}
function optAtom0(s) {
	return getBody(autolisp_atom , s);
}
function optAtom1(s) {
	return getLabel(autolisp_const.obj , s);
}
function optAtom2(s) {
	return getLabel(autolisp_enum_ac.obj , s);
}
function optAtom3(s) {
	return getLabel(autolisp_enum_vlax_vb.obj , s);
}
function optAtom4(s) {
	return getLabel(autolisp_func_acet.obj , s);
}
function optAtom5(s) {
	return getLabel(autolisp_func_std.obj , s);
}
function optAtom6(s) {
	return getLabel(autolisp_func_vl.obj , s);
}
function optAtom7(s) {
	return getLabel(autolisp_func_vla.obj , s);
}
function optAtom8(s) {
	return getLabel(autolisp_func_vla_get.obj , s);
}
function optAtom9(s) {
	return getLabel(autolisp_func_vla_put.obj , s);
}
function optAtom10(s) {
	return getLabel(autolisp_func_vlax.obj , s);
}
function optAtom11(s) {
	return getLabel(autolisp_func_vlisp.obj , s);
}
function optAtom12(s) {
	return getLabel(autolisp_func_vlr.obj , s);
}
function getLabel(obj , s) {
	var orgStr = s.toString().toLowerCase();
	var newStr = "";
	for (var i=0 ; i<obj.length ; i++){
		var labelStr = obj[i]["label"].toString().toLowerCase();
		if (orgStr == labelStr) {
			newStr = obj[i]["label"].toString();
			break;
		}
	}
	if (newStr == "")
	{
		var ret = s.toString();
	} else {
		var ret = newStr;
	}
	//var ret = ret.toUpperCase();
	return ret;
}
function getBody(obj , s) {
	var orgStr = s.toString().toLowerCase();
	var newStr = "";
	var keys = Object.keys(autolisp_atom);
	for (var i=0 ; i<keys.length ; i++){
		var keyStr = keys[i];
		if (keyStr.toLowerCase() == orgStr) {
			newStr = obj[keyStr]["body"][0];
			break;
		}
	}
	if (newStr == "")
	{
		var ret = s.toString();
	} else {
		var ret = newStr;
	}
	//var ret = ret.toUpperCase();
	return ret;
}