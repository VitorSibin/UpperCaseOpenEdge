import * as vscode from 'vscode';
import keywords from './keywords';

let enabled = true;

export function activate(context: vscode.ExtensionContext){

    const disposable = vscode.commands.registerCommand('openedgeuppercase.helloWorld', () => {
        vscode.window.showInformationMessage('Hello World from OpenEdgeUpperCase!');
    });

    const toggleCommand = vscode.commands.registerCommand('openedgeuppercase.turnoffuppercase', () => {
        enabled = !enabled;
        vscode.window.showInformationMessage(`Editor Watcher ${enabled ? 'Enable' : 'Disable'}`);
    });

    const changing = vscode.workspace.onDidChangeTextDocument((event) => {
        if (!enabled) return;

        const editor = vscode.window.activeTextEditor;
        if (!editor) return;

        const doc = event.document;
        const fname = doc.fileName || '';
        const lang = doc.languageId || '';

        if (!fname.endsWith('.p') && lang !== 'abl') {
            return; // ignora outros arquivos
        }

        if (event.contentChanges.some(change => change.text === '')) {
            return;
        }

        if (event.contentChanges.some(change => change.text !== ' ' && 
                                                change.text !== '(' &&
                                                change.text !== '()' &&
                                                change.text !== ',' &&
                                                change.text !== '.' &&
                                                change.text !== ':')) {
            return;
        }

        const position = editor.selection.active;
        const lineText = editor.document.lineAt(position.line).text;
        const textBeforeCursor = lineText.substring(0, position.character);

        // --- Ignorar comentários ---
        // Comentários em ABL podem começar com "//" ou "/*"
        const isComment = /(^|\s)(\/\/|\/\*|\*|\/\*.*\*\/)/.test(textBeforeCursor);
        if (isComment) return;

        // --- Ignorar quando estiver entre aspas ---
        const quoteCount = (textBeforeCursor.match(/["']/g) || []).length;
        if (quoteCount % 2 !== 0) return; // dentro de string (número ímpar de aspas abertas)

        const match = textBeforeCursor.match(/([\w-]+)$/);
        const lastWord = match ? match[1] : '';

        const lowerWord = lastWord.toLowerCase();

        if (lastWord === lastWord.toUpperCase()) return;

        const found = keywords.find(
            (k) => k.keyword.toLowerCase() === lowerWord || k.abrev.toLowerCase() === lowerWord
        );

        if (found) {
            const replacement = lowerWord === found.abrev.toLowerCase() ? found.abrev.toUpperCase() : found.keyword.toUpperCase();

            editor.edit((editBuilder) => {
                const start = position.translate(0, -lastWord.length);
                const range = new vscode.Range(start, position);
                editBuilder.replace(range, replacement);
            });
        }
    })

    context.subscriptions.push(disposable);
    context.subscriptions.push(changing);
    context.subscriptions.push(toggleCommand);
}

export function deactivate() {}
