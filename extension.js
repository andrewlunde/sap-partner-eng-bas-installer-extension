// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

const cp = require('child_process');

/*
function getTask() {
    const taskDef = {
        type: 'shell'
    };
    const execution = new vscode.ShellExecution('chdir', {
        cwd: 'C:\\Windows\\System32'
    }); 
    return new vscode.Task(taskDef, 'print_cwd', 'myext', execution);
}
*/

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	let out = vscode.window.createOutputChannel("Python Installer");

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	//console.log('Congratulations, your extension "bas-installer-extension" is now active!');
	out.appendLine('Congratulations, your extension "bas-installer-extension" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json

	// Python
	let disposable = vscode.commands.registerCommand('bas-installer-extension.pythonInstaller', function () {
		// The code you place here will be executed every time your command is executed

		let out = vscode.window.createOutputChannel("Python Installer");

		// Display a message box to the user
		out.clear();
		out.appendLine('Python Installer Begins!');

		vscode.window.showInformationMessage('Python 3.9.0 Install Begins.');

		var destdir = context.storageUri;

		if (typeof destdir == "undefined") {
			destdir = "/tmp";
		}

		//let destdir = "/home/user";
		//let destdir = "/tmp";
		//let destdir = ".";
		out.appendLine('destdir: ' + destdir);

		let destfile = destdir + "/bas_install_python.sh";
		out.appendLine('destfile: ' + destfile);

		let remove_sh_file = false;

		vscode.workspace.fs.createDirectory(destdir);

		// let currentTheme = await vscode.workspace.getConfiguration().get("workbench.colorTheme");
		vscode.workspace.getConfiguration("workbench", (currentTheme) => {
			out.appendLine('currentTheme: ' + currentTheme);
		});

		//await vscode.workspace.getConfiguration().update("workbench.colorTheme", "Red");

		//let newTheme = await vscode.workspace.getConfiguration().get("workbench.colorTheme");

		// let settings = vscode.workspace.getConfiguration("python");
		// settings.update("condaPath", "whatever") => {
		// 	ConfigurationLoader.LoadConfiguration() => {

		// 	}
		// }
		// await ;

		var shellcmd = "curl -s -L -o " + destfile + " https://raw.githubusercontent.com/SAP-samples/hana-python-securestore/master/tools/bas_install_python.sh";
		out.appendLine('shellcmd: ' + shellcmd);
		console.log()

		cp.exec(shellcmd, (err, stdout, stderr) => {
			out.appendLine('curl stdout: ' + stdout);
			out.appendLine('curl stderr: ' + stderr);
			if (err) {
				out.appendLine('curl error: ' + err);
			}

			shellcmd = "/bin/bash " + destfile;
			out.appendLine('shellcmd: ' + shellcmd);

			cp.exec(shellcmd, (err, stdout, stderr) => {
				out.appendLine('bash stdout: ' + stdout);
				out.appendLine('bash stderr: ' + stderr);
				if (err) {
					out.appendLine('bash error: ' + err);
				}

				if (remove_sh_file) {
					shellcmd = "rm -f " + destfile;
					out.appendLine('shellcmd: ' + shellcmd);

					cp.exec(shellcmd, (err, stdout, stderr) => {
						out.appendLine('rm -f stdout: ' + stdout);
						out.appendLine('rm -f stderr: ' + stderr);
						if (err) {
							out.appendLine('rm -f error: ' + err);
						}
						out.appendLine('Python Installer Finished!');
						vscode.window.showInformationMessage('Python 3.9.0 Installed OK.');

						
						vscode.window.showInformationMessage('Verify with "python -V" in a new terminal window.');
					});
				}
				else {
					out.appendLine('Python Installer Finished!');
				}
			});
		});
		

		// Display a message box to the user
		//vscode.window.showInformationMessage('Python Installer Finished!');
	});

	context.subscriptions.push(disposable);

	// NOTROOT
	let disposable2 = vscode.commands.registerCommand('bas-installer-extension.notrootInstaller', function () {
		// The code you place here will be executed every time your command is executed

		let out = vscode.window.createOutputChannel("NOTROOT Installer");

		// Display a message box to the user
		out.clear();
		out.appendLine('NOTROOT Installer Begins!');

		vscode.window.showInformationMessage('NOTROOT Installer Begins.');

		var destdir = context.storageUri;

		if (typeof destdir == "undefined") {
			destdir = "/tmp";
		}

		//let destdir = "/home/user";
		//let destdir = "/tmp";
		//let destdir = ".";
		out.appendLine('destdir: ' + destdir);

		let destfile = destdir + "/bas_install_python.sh";
		out.appendLine('destfile: ' + destfile);

		let remove_sh_file = false;

		vscode.workspace.fs.createDirectory(destdir);

		// let currentTheme = await vscode.workspace.getConfiguration().get("workbench.colorTheme");
		vscode.workspace.getConfiguration("workbench", (currentTheme) => {
			out.appendLine('currentTheme: ' + currentTheme);
		});

		//await vscode.workspace.getConfiguration().update("workbench.colorTheme", "Red");

		//let newTheme = await vscode.workspace.getConfiguration().get("workbench.colorTheme");

		// let settings = vscode.workspace.getConfiguration("python");
		// settings.update("condaPath", "whatever") => {
		// 	ConfigurationLoader.LoadConfiguration() => {

		// 	}
		// }
		// await ;

		var shellcmd = "curl -s -L -o " + destfile + " https://raw.githubusercontent.com/SAP-samples/hana-python-securestore/master/tools/bas_install_notroot.sh";
		out.appendLine('shellcmd: ' + shellcmd);
		console.log()

		cp.exec(shellcmd, (err, stdout, stderr) => {
			out.appendLine('curl stdout: ' + stdout);
			out.appendLine('curl stderr: ' + stderr);
			if (err) {
				out.appendLine('curl error: ' + err);
			}

			shellcmd = "/bin/bash " + destfile;
			out.appendLine('shellcmd: ' + shellcmd);

			cp.exec(shellcmd, (err, stdout, stderr) => {
				out.appendLine('bash stdout: ' + stdout);
				out.appendLine('bash stderr: ' + stderr);
				if (err) {
					out.appendLine('bash error: ' + err);
				}

				if (remove_sh_file) {
					shellcmd = "rm -f " + destfile;
					out.appendLine('shellcmd: ' + shellcmd);

					cp.exec(shellcmd, (err, stdout, stderr) => {
						out.appendLine('rm -f stdout: ' + stdout);
						out.appendLine('rm -f stderr: ' + stderr);
						if (err) {
							out.appendLine('rm -f error: ' + err);
						}
						out.appendLine('NOTROOT Installer Finished!');
						vscode.window.showInformationMessage('NOTROOT Installed OK.');

						
						vscode.window.showInformationMessage('Verify with "jq -V" in a new terminal window.');
					});
				}
				else {
					out.appendLine('NOTROOT Installer Finished!');
				}
			});
		});
		
	});

	context.subscriptions.push(disposable2);

	// CF DefaultEnv
	let disposable3 = vscode.commands.registerCommand('bas-installer-extension.cfdefenvInstaller', function () {
		// The code you place here will be executed every time your command is executed

		let out = vscode.window.createOutputChannel("CF DefaultEnv Plugin Installer");

		// Display a message box to the user
		out.clear();
		out.appendLine('CF DefaultEnv Plugin Installer Begins!');

		vscode.window.showInformationMessage('CF DefaultEnv Plugin Installer Begins.');

		var destdir = context.storageUri;

		if (typeof destdir == "undefined") {
			destdir = "/tmp";
		}

		//let destdir = "/home/user";
		//let destdir = "/tmp";
		//let destdir = ".";
		out.appendLine('destdir: ' + destdir);

		let destfile = destdir + "/bas_install_python.sh";
		out.appendLine('destfile: ' + destfile);

		let remove_sh_file = false;

		vscode.workspace.fs.createDirectory(destdir);

		// let currentTheme = await vscode.workspace.getConfiguration().get("workbench.colorTheme");
		vscode.workspace.getConfiguration("workbench", (currentTheme) => {
			out.appendLine('currentTheme: ' + currentTheme);
		});

		//await vscode.workspace.getConfiguration().update("workbench.colorTheme", "Red");

		//let newTheme = await vscode.workspace.getConfiguration().get("workbench.colorTheme");

		// let settings = vscode.workspace.getConfiguration("python");
		// settings.update("condaPath", "whatever") => {
		// 	ConfigurationLoader.LoadConfiguration() => {

		// 	}
		// }
		// await ;

		//var shellcmd = "curl -s -L -o " + destfile + " https://raw.githubusercontent.com/SAP-samples/hana-python-securestore/master/tools/bas_install_notroot.sh";
		var shellcmd = "curl -s -L -o " + destfile + " https://raw.githubusercontent.com/SAP-samples/hana-python-securestore/master/tools/bas_install_cfdefenv.sh";
		out.appendLine('shellcmd: ' + shellcmd);
		console.log()

		cp.exec(shellcmd, (err, stdout, stderr) => {
			out.appendLine('curl stdout: ' + stdout);
			out.appendLine('curl stderr: ' + stderr);
			if (err) {
				out.appendLine('curl error: ' + err);
			}

			shellcmd = "/bin/bash " + destfile;
			out.appendLine('shellcmd: ' + shellcmd);

			cp.exec(shellcmd, (err, stdout, stderr) => {
				out.appendLine('bash stdout: ' + stdout);
				out.appendLine('bash stderr: ' + stderr);
				if (err) {
					out.appendLine('bash error: ' + err);
				}

				if (remove_sh_file) {
					shellcmd = "rm -f " + destfile;
					out.appendLine('shellcmd: ' + shellcmd);

					cp.exec(shellcmd, (err, stdout, stderr) => {
						out.appendLine('rm -f stdout: ' + stdout);
						out.appendLine('rm -f stderr: ' + stderr);
						if (err) {
							out.appendLine('rm -f error: ' + err);
						}
						out.appendLine('NOTROOT Installer Finished!');
						vscode.window.showInformationMessage('CF DefaultEnv Plugin Installed OK.');

						
						vscode.window.showInformationMessage('Verify with "jq -V" in a new terminal window.');
					});
				}
				else {
					out.appendLine('CF DefaultEnv Plugin Installer Finished!');
				}
			});
		});
		
	});

	context.subscriptions.push(disposable3);
	// CF SMSI
	let disposable4 = vscode.commands.registerCommand('bas-installer-extension.cfsmsiInstaller', function () {
		// The code you place here will be executed every time your command is executed

		let out = vscode.window.createOutputChannel("CF SMSI Plugin Installer");

		// Display a message box to the user
		out.clear();
		out.appendLine('CF SMSI Plugin Installer Begins!');

		vscode.window.showInformationMessage('CF SMSI Plugin Installer Begins.');

		var destdir = context.storageUri;

		if (typeof destdir == "undefined") {
			destdir = "/tmp";
		}

		//let destdir = "/home/user";
		//let destdir = "/tmp";
		//let destdir = ".";
		out.appendLine('destdir: ' + destdir);

		let destfile = destdir + "/bas_install_python.sh";
		out.appendLine('destfile: ' + destfile);

		let remove_sh_file = false;

		vscode.workspace.fs.createDirectory(destdir);

		// let currentTheme = await vscode.workspace.getConfiguration().get("workbench.colorTheme");
		vscode.workspace.getConfiguration("workbench", (currentTheme) => {
			out.appendLine('currentTheme: ' + currentTheme);
		});

		//await vscode.workspace.getConfiguration().update("workbench.colorTheme", "Red");

		//let newTheme = await vscode.workspace.getConfiguration().get("workbench.colorTheme");

		// let settings = vscode.workspace.getConfiguration("python");
		// settings.update("condaPath", "whatever") => {
		// 	ConfigurationLoader.LoadConfiguration() => {

		// 	}
		// }
		// await ;

		var shellcmd = "curl -s -L -o " + destfile + " https://raw.githubusercontent.com/SAP-samples/hana-python-securestore/master/tools/bas_install_cfsmsi.sh";
		out.appendLine('shellcmd: ' + shellcmd);
		console.log()

		cp.exec(shellcmd, (err, stdout, stderr) => {
			out.appendLine('curl stdout: ' + stdout);
			out.appendLine('curl stderr: ' + stderr);
			if (err) {
				out.appendLine('curl error: ' + err);
			}

			shellcmd = "/bin/bash " + destfile;
			out.appendLine('shellcmd: ' + shellcmd);

			cp.exec(shellcmd, (err, stdout, stderr) => {
				out.appendLine('bash stdout: ' + stdout);
				out.appendLine('bash stderr: ' + stderr);
				if (err) {
					out.appendLine('bash error: ' + err);
				}

				if (remove_sh_file) {
					shellcmd = "rm -f " + destfile;
					out.appendLine('shellcmd: ' + shellcmd);

					cp.exec(shellcmd, (err, stdout, stderr) => {
						out.appendLine('rm -f stdout: ' + stdout);
						out.appendLine('rm -f stderr: ' + stderr);
						if (err) {
							out.appendLine('rm -f error: ' + err);
						}
						out.appendLine('NOTROOT Installer Finished!');
						vscode.window.showInformationMessage('CF SMSI Plugin Installed OK.');

						
						vscode.window.showInformationMessage('Verify with "jq -V" in a new terminal window.');
					});
				}
				else {
					out.appendLine('CF SMSI Plugin Installer Finished!');
				}
			});
		});
		
	});

	context.subscriptions.push(disposable4);
	// HA Yo Gens
	let disposable5 = vscode.commands.registerCommand('bas-installer-extension.yohagenInstaller', function () {
		// The code you place here will be executed every time your command is executed

		let out = vscode.window.createOutputChannel("SAP HANA Academy yeoman generators Installer");

		// Display a message box to the user
		out.clear();
		out.appendLine('SAP HANA Academy yeoman generators Installer Begins!');

		var shellcmd = "npm install --global generator-saphanaacademy-mta";
		out.appendLine('shellcmd: ' + shellcmd);
		console.log()

		cp.exec(shellcmd, (err, stdout, stderr) => {
			out.appendLine('curl stdout: ' + stdout);
			out.appendLine('curl stderr: ' + stderr);
			if (err) {
				out.appendLine('curl error: ' + err);
			}

			shellcmd = "npm install --global generator-saphanaacademy-haa";
			out.appendLine('shellcmd: ' + shellcmd);

			cp.exec(shellcmd, (err, stdout, stderr) => {
				out.appendLine('bash stdout: ' + stdout);
				out.appendLine('bash stderr: ' + stderr);
				if (err) {
					out.appendLine('bash error: ' + err);
				}

				shellcmd = "npm install --global generator-saphanaacademy-odata";
				out.appendLine('shellcmd: ' + shellcmd);

				cp.exec(shellcmd, (err, stdout, stderr) => {
					out.appendLine('rm -f stdout: ' + stdout);
					out.appendLine('rm -f stderr: ' + stderr);
					if (err) {
						out.appendLine('rm -f error: ' + err);
					}


					shellcmd = "npm install --global generator-saphanaacademy-saas";
					out.appendLine('shellcmd: ' + shellcmd);

					cp.exec(shellcmd, (err, stdout, stderr) => {
						out.appendLine('rm -f stdout: ' + stdout);
						out.appendLine('rm -f stderr: ' + stderr);
						if (err) {
							out.appendLine('rm -f error: ' + err);
						}

						shellcmd = "npm install -g generator-saphanaacademy-cap";
						out.appendLine('shellcmd: ' + shellcmd);
	
						cp.exec(shellcmd, (err, stdout, stderr) => {
							out.appendLine('rm -f stdout: ' + stdout);
							out.appendLine('rm -f stderr: ' + stderr);
							if (err) {
								out.appendLine('rm -f error: ' + err);
							}
							out.appendLine('SAP HANA Academy yeoman generators Installer Finished!');
							vscode.window.showInformationMessage('SAP HANA Academy yeoman generators Installed OK.');
							
							vscode.window.showInformationMessage('Verify with "yo" in a new terminal window.');
						});
					});
				});
			});
		});
	});

	context.subscriptions.push(disposable5);

	// PE Yo Gens
	let disposable6 = vscode.commands.registerCommand('bas-installer-extension.yopegenInstaller', function () {
		// The code you place here will be executed every time your command is executed

		let out = vscode.window.createOutputChannel("SAP Partner Engineering yeoman generator Installer");

		// Display a message box to the user
		out.clear();
		out.appendLine('SAP Partner Engineering yeoman generators Installer Begins!');
		vscode.window.showInformationMessage('SAP Partner Engineering yeoman generator Installer Begins!');

		var shellcmd = "npm install --global generator-sap-partner-eng";
		out.appendLine('shellcmd: ' + shellcmd);
		console.log()

		cp.exec(shellcmd, (err, stdout, stderr) => {
			out.appendLine('curl stdout: ' + stdout);
			out.appendLine('curl stderr: ' + stderr);
			if (err) {
				out.appendLine('curl error: ' + err);
			}

			out.appendLine('SAP Partner Engineering yeoman generator Installer Finished!');
			vscode.window.showInformationMessage('SAP Partner Engineering yeoman generator Installed OK.');
			
			vscode.window.showInformationMessage('Verify with "yo" in a new terminal window.');
		});
	});

	context.subscriptions.push(disposable6);

	// HANA-CLI
	let disposable7 = vscode.commands.registerCommand('bas-installer-extension.hanacliInstaller', function () {
		// The code you place here will be executed every time your command is executed

		let out = vscode.window.createOutputChannel("HANA-CLI Installer");

		// Display a message box to the user
		out.clear();
		out.appendLine('HANA-CLI Installer Begins!');
		vscode.window.showInformationMessage('HANA-CLI Installer Begins!');

		var shellcmd = "npm install --global hana-cli";
		out.appendLine('shellcmd: ' + shellcmd);
		console.log()

		cp.exec(shellcmd, (err, stdout, stderr) => {
			out.appendLine('curl stdout: ' + stdout);
			out.appendLine('curl stderr: ' + stderr);
			if (err) {
				out.appendLine('curl error: ' + err);
			}

			out.appendLine('HANA-CLI Installer Finished!');
			vscode.window.showInformationMessage('HANA-CLI Installed OK.');
			
			vscode.window.showInformationMessage('Verify with "hana-cli version" in a new terminal window.');
		});
	});

	context.subscriptions.push(disposable7);

}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
