import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "pythonFelkszites" is now active!');

	let disposable = vscode.commands.registerCommand('pythonFelkszites.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from Python érettségi felkészítő feladatok és tananyagok!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
