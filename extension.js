const vscode = require('vscode');
const intellisence = require('./extensions/intellisence');
const symbolNormalization = require('./extensions/symbolNormalization');
const unicodeConv = require('./extensions/unicodeConv');
function activate(context) {
    symbolNormalization.RegistSymbolNormalization();
    unicodeConv.RegistUtf8ToCodePoint();
    unicodeConv.RegistCodePointToUtf8();
    intellisence.RegistIntellisence(context);
}
function deactivate() {
    return undefined;
}
module.exports = { activate, deactivate };
