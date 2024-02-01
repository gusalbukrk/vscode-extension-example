import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "extension" is now active!');

	let disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World!');
	});

	context.subscriptions.push(disposable);

	const sbi = vscode.window.createStatusBarItem(
		'my.statusBar.item', // optional id, if not provided it will be the extension identifier
		vscode.StatusBarAlignment.Left, // Left or Right
		-100, // priority (the higher value means the item should be shown more to the left)
	);
	sbi.text = '$(megaphone) Hello World!';
	sbi.name = 'Item name'; // will appear, for instance, in the context menu of the status bar
	sbi.command = 'extension.helloWorld';
	sbi.tooltip = 'Item tooltip';

	// only colors supported: 'statusBarItem.errorBackground' & 'statusBarItem.warningBackground'
	sbi.backgroundColor = new vscode.ThemeColor('statusBarItem.warningBackground');

	sbi.show();
}

export function deactivate() {}
