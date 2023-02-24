import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	let startCodingGame = vscode.commands.registerCommand('xatixatixs-coding-game.startCodingGame', () => {
		let panel = vscode.window.createWebviewPanel('XATIXATIXsCodingGame', 'XATIXATIXs Coding Game', vscode.ViewColumn.One, {
			enableScripts: true,
    		retainContextWhenHidden: true
		});

		const fs = require('fs');
		console.log(fs);
		//const htmlContent = fs.readFileSync('./webview/mainPage/mainpage.html', 'utf-8');

		panel.webview.html = `
		<!DOCTYPE html>
<html>
  	<head>
  	<meta charset="utf-8" />
  	<meta http-equiv="X-UA-Compatible" content="IE=edge">
   	<title>Main page</title>
   	<meta name="viewport" content="width=device-width, initial-scale=1">
   	<style>
   	body {
   		font-family: sans-serif;
    	padding: 16px;
   	}
  	</style>
 	</head>
    <body>
  	    <h1>My Extension</h1>
  	    <p>Welcome to my VS Code extension!</p>
 	</body>
</html>
		`;
	});

	context.subscriptions.push(startCodingGame);
}

export function deactivate() {}
