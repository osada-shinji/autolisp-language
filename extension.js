const vscode = require('vscode');
const autolisp_const = require('./compItem/autolisp-const');
const autolisp_enum_ac = require('./compItem/autolisp-enum-ac');
const autolisp_enum_vlax_vb = require('./compItem/autolisp-enum-vlax-vb');
const autolisp_func_acet = require('./compItem/autolisp-func-acet');
const autolisp_func_std = require('./compItem/autolisp-func-std');
const autolisp_func_vl = require('./compItem/autolisp-func-vl');
const autolisp_func_vla = require('./compItem/autolisp-func-vla');
const autolisp_func_vla_get = require('./compItem/autolisp-func-vla-get');
const autolisp_func_vla_put = require('./compItem/autolisp-func-vla-put');
const autolisp_func_vlax = require('./compItem/autolisp-func-vlax');
const autolisp_func_vlisp = require('./compItem/autolisp-func-vlisp');
const autolisp_func_vlr = require('./compItem/autolisp-func-vlr');
const autolispMode =  ['autolisp' , 'autolispdcl'] ;

class AutolispCompletionItemProvider_const {
    provideCompletionItems(document, position, token) {
        let completionList = new vscode.CompletionList(autolisp_const.obj, false);
        return Promise.resolve(completionList);
    }
}
class AutolispCompletionItemProvider_enum_ac {
    provideCompletionItems(document, position, token) {
        let completionList = new vscode.CompletionList(autolisp_enum_ac.obj, false);
        return Promise.resolve(completionList);
    }
}
class AutolispCompletionItemProvider_enum_vlax_vb {
    provideCompletionItems(document, position, token) {
        let completionList = new vscode.CompletionList(autolisp_enum_vlax_vb.obj, false);
        return Promise.resolve(completionList);
    }
}
class AutolispCompletionItemProvider_func_acet {
    provideCompletionItems(document, position, token) {
        let completionList = new vscode.CompletionList(autolisp_func_acet.obj, false);
        return Promise.resolve(completionList);
    }
}
class AutolispCompletionItemProvider_func_std {
    provideCompletionItems(document, position, token) {
        let completionList = new vscode.CompletionList(autolisp_func_std.obj, false);
        return Promise.resolve(completionList);
    }
}
class AutolispCompletionItemProvider_func_vl {
    provideCompletionItems(document, position, token) {
        let completionList = new vscode.CompletionList(autolisp_func_vl.obj, false);
        return Promise.resolve(completionList);
    }
}
class AutolispCompletionItemProvider_func_vla {
    provideCompletionItems(document, position, token) {
        let completionList = new vscode.CompletionList(autolisp_func_vla.obj, false);
        return Promise.resolve(completionList);
    }
}
class AutolispCompletionItemProvider_func_vla_get {
    provideCompletionItems(document, position, token) {
        let completionList = new vscode.CompletionList(autolisp_func_vla_get.obj, false);
        return Promise.resolve(completionList);
    }
}
class AutolispCompletionItemProvider_func_vla_put {
    provideCompletionItems(document, position, token) {
        let completionList = new vscode.CompletionList(autolisp_func_vla_put.obj, false);
        return Promise.resolve(completionList);
    }
}
class AutolispCompletionItemProvider_func_vlax {
    provideCompletionItems(document, position, token) {
        let completionList = new vscode.CompletionList(autolisp_func_vlax.obj, false);
        return Promise.resolve(completionList);
    }
}
class AutolispCompletionItemProvider_func_vlisp {
    provideCompletionItems(document, position, token) {
        let completionList = new vscode.CompletionList(autolisp_func_vlisp.obj, false);
        return Promise.resolve(completionList);
    }
}
class AutolispCompletionItemProvider_func_vlr {
    provideCompletionItems(document, position, token) {
        let completionList = new vscode.CompletionList(autolisp_func_vlr.obj, false);
        return Promise.resolve(completionList);
    }
}
function eeee(s) {
    var str = s.substr(3);
    var uuu = parseInt(str, 16);
    return String.fromCharCode(uuu);
}
function activate(context) {
    vscode.commands.registerCommand('extension.utf8->codePoint', () => {
        var editor = vscode.window.activeTextEditor;
        var text = editor.document.getText(editor.selection);
        var arr = [];
        var str = "";
        for (var i = 0; i < text.length; i++) {
            var num = text.charCodeAt(i);
            if (num >= 128) {
                var tmp =num.toString(16).toUpperCase();
                while ( tmp.length < 4)
                {
                    tmp = "0" + tmp;
                }
                str = str + "\\\\u+" + tmp;
            }
            else {
                str = str + text.charAt(i);
            }
            arr.push(num);
        }
        editor.edit((builder) => {
            builder.replace(editor.selection, str);
        });
    });
    vscode.commands.registerCommand('extension.codePoint->utf8', () => {
        var editor = vscode.window.activeTextEditor;
        var text = editor.document.getText(editor.selection);
        var regexp = new RegExp(/\\\\u\+[0-9A-F]{4}/ig);
        var res = text.match(regexp);
        var res = text.replace(regexp, eeee);
        editor.edit((builder) => {
            builder.replace(editor.selection, res);
        });
    });
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider(autolispMode, new AutolispCompletionItemProvider_const(), ''));
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider(autolispMode, new AutolispCompletionItemProvider_enum_ac(), ''));
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider(autolispMode, new AutolispCompletionItemProvider_enum_vlax_vb(), ''));
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider(autolispMode, new AutolispCompletionItemProvider_func_acet(), ''));
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider(autolispMode, new AutolispCompletionItemProvider_func_std(), ''));
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider(autolispMode, new AutolispCompletionItemProvider_func_vl(), ''));
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider(autolispMode, new AutolispCompletionItemProvider_func_vla(), ''));
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider(autolispMode, new AutolispCompletionItemProvider_func_vla_get(), ''));
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider(autolispMode, new AutolispCompletionItemProvider_func_vla_put(), ''));
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider(autolispMode, new AutolispCompletionItemProvider_func_vlax(), ''));
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider(autolispMode, new AutolispCompletionItemProvider_func_vlisp(), ''));
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider(autolispMode, new AutolispCompletionItemProvider_func_vlr(), ''));
}
function deactivate() {
    return undefined;
}


module.exports = { activate, deactivate };
//exports.activate = activate;
