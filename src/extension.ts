import * as vscode from 'vscode';
import { exec } from 'child_process';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.pushToGitHub', () => {
        const repoPath = vscode.workspace.rootPath;

        exec('git add . && git commit -m "Automated commit" && git push', { cwd: repoPath }, (error, stdout, stderr) => {
            if (error) {
                vscode.window.showErrorMessage(`Error: ${stderr}`);
                return;
            }
            vscode.window.showInformationMessage(`Pushed to GitHub: ${stdout}`);
        });
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}