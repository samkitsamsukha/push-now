markdown

# GitHub Push Extension for VS Code


## Description


The **GitHub Push Extension** is a Visual Studio Code extension that allows developers to push their changes directly to GitHub without using the terminal. This extension simplifies the process of version control and enhances the workflow for developers who prefer a graphical interface.


## Features


- Push changes to GitHub directly from VS Code.

- Automatically stages all changes and commits with a default message.

- User-friendly command to execute the push operation.


## Installation


1. **Clone the repository or download the ZIP file.**

   

   ```bash

   git clone https://github.com/yourusername/my-github-push-extension.git

   cd my-github-push-extension

    Install dependencies.

    Make sure you have Node.js installed, then run:

    bash

npm install

Open the project in VS Code.

bash

    code .

    Run the extension.

    Press F5 to launch a new Extension Development Host instance of VS Code.

Usage

    Open a folder that is a Git repository.
    Make changes to your files.
    Open the Command Palette (⇧⌘P or Ctrl+Shift+P).
    Type and select Push to GitHub.
    The extension will stage all changes, commit them with a default message, and push them to the remote repository.

Configuration

You can customize the commit message in the src/extension.ts file by modifying the line:

typescript

exec('git add . && git commit -m "Automated commit" && git push', { cwd: repoPath }, (error, stdout, stderr) => {

Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any feature requests or bugs.
License

This project is licensed under the MIT License - see the LICENSE file for details.
Acknowledgements

    Visual Studio Code API
    Node.js
    Git
