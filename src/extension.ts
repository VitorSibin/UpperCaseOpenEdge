import * as vscode from 'vscode';

import { formatter } from '../src/formatter';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "OpenEdge-keyword-uppercase" is now active!');

	let disposable = vscode.commands.registerCommand('OpenEdge-keyword-uppercase.uppercase', (data) => {
		
		const { activeTextEditor } = vscode.window;

        console.log(activeTextEditor!.document.languageId);

		if (activeTextEditor && activeTextEditor.document.languageId === 'OpenEdge ABL') {
			try {
				const edit = new vscode.WorkspaceEdit();
				let f = new formatter(activeTextEditor.document, edit);
				f.upperCase();
				return vscode.workspace.applyEdit(edit);
			} catch (error) {
				console.log(error);
			}
		}
	});

	context.subscriptions.push(disposable);
}
