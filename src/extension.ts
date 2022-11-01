import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	let startCodingGame = vscode.commands.registerCommand('xatixatixs-coding-game.startCodingGame', () => {
		let panel = vscode.window.createWebviewPanel('XATIXATIXsCodingGame', 'XATIXATIXs Coding Game', vscode.ViewColumn.One, {});
	});

	context.subscriptions.push(startCodingGame);
}

export function deactivate() {}
