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
						openLesson('variableLesson');
						return;
					case 'openCyclesLesson':
						openLesson('cyclesLesson');
						return;
					case 'openioLesson':
						openLesson('ioLesson');
						return;
					case 'openFileLesson':
						openLesson('fileLesson');
						return;
					case 'openElagazasokLesson':
						openLesson('elagazasokLesson');
						return;
				}
			  }
			);

			const htmlPath = vscode.Uri.file(path.join(context.extensionPath, '/media/webview/index.html'));
			const htmlContent = fs.readFileSync(htmlPath.fsPath, 'utf8');
			webviewPanel.webview.html = htmlContent;
			webviewPanel.reveal();

			async function openLesson(lessonName: string) {
				let variableLessonPath, notebookFile;
				
				switch (lessonName){
					case 'variableLesson': 
						variableLessonPath = vscode.Uri.file(path.join(context.extensionPath, '/media/content/learn/valtozok.ipynb'));
						notebookFile = await vscode.workspace.openNotebookDocument(variableLessonPath);
						vscode.window.showNotebookDocument(notebookFile);
						return;
					case 'cyclesLesson':
						variableLessonPath = vscode.Uri.file(path.join(context.extensionPath, '/media/content/learn/ciklusok.ipynb'));
						notebookFile = await vscode.workspace.openNotebookDocument(variableLessonPath);
						vscode.window.showNotebookDocument(notebookFile);
						return;
					case 'ioLesson':
						variableLessonPath = vscode.Uri.file(path.join(context.extensionPath, '/media/content/learn/inputoutput.ipynb'));
						notebookFile = await vscode.workspace.openNotebookDocument(variableLessonPath);
						vscode.window.showNotebookDocument(notebookFile);
						return;
					case 'fileLesson':
						variableLessonPath = vscode.Uri.file(path.join(context.extensionPath, '/media/content/learn/fajlkezeles.ipynb'));
						notebookFile = await vscode.workspace.openNotebookDocument(variableLessonPath);
						vscode.window.showNotebookDocument(notebookFile);
						return;
					case 'elagazasokLesson':
						variableLessonPath = vscode.Uri.file(path.join(context.extensionPath, '/media/content/learn/elagazasok.ipynb'));
						notebookFile = await vscode.workspace.openNotebookDocument(variableLessonPath);
						vscode.window.showNotebookDocument(notebookFile);
						return;
				}
				
			}
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
