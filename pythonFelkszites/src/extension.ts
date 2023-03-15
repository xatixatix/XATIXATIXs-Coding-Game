import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('pythonFelkszites.StartToLearnPython', () => {
		const webviewPanel = vscode.window.createWebviewPanel(
				'pythonFelkeszites',
				'Python érettségi felkészítés',
				vscode.ViewColumn.One,
				{
					enableScripts: true
				}
			);

			webviewPanel.webview.onDidReceiveMessage(message => {
				switch (message.command){
					case 'openVariablesLesson':
						openVariablesLesson('variableLesson');
						return;
					case 'openCyclesLesson':
						openVariablesLesson('cyclesLesson');
						return;
					case 'openioLesson':
						openVariablesLesson('ioLesson');
						return;
				}
			  }
			);

			const htmlPath = vscode.Uri.file(path.join(context.extensionPath, '/src/webview/index.html'));
			const htmlContent = fs.readFileSync(htmlPath.fsPath, 'utf8');
			webviewPanel.webview.html = htmlContent;
			webviewPanel.reveal();

			async function openVariablesLesson(lessonName: string) {
				let variableLessonPath, notebookFile;
				
				switch (lessonName){
					case 'variableLesson': 
						variableLessonPath = vscode.Uri.file(path.join(context.extensionPath, '/src/content/learn/valtozok.ipynb'));
						notebookFile = await vscode.workspace.openNotebookDocument(variableLessonPath);
						vscode.window.showNotebookDocument(notebookFile);
						return;
					case 'cyclesLesson':
						variableLessonPath = vscode.Uri.file(path.join(context.extensionPath, '/src/content/learn/ciklusok.ipynb'));
						notebookFile = await vscode.workspace.openNotebookDocument(variableLessonPath);
						vscode.window.showNotebookDocument(notebookFile);
						return;
					case 'ioLesson':
						variableLessonPath = vscode.Uri.file(path.join(context.extensionPath, '/src/content/learn/inputoutput.ipynb'));
						notebookFile = await vscode.workspace.openNotebookDocument(variableLessonPath);
						vscode.window.showNotebookDocument(notebookFile);
						return;
				}
				
			}
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
