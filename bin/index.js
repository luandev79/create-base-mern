#! /usr/bin/env node
const fs = require('fs');
const path = require('path');
const simpleGit = require('simple-git');

const projectName = process.argv[2];

if (!projectName) {
    console.error('Please provide a project name.');
    process.exit(1);
}

const templateRepo = 'https://github.com/luandev79/structure-mern.git';

const projectPath = path.join(process.cwd(), projectName);

if (fs.existsSync(projectPath)) {
    console.error(`Directory ${projectName} already exists. Please choose a different name.`);
    process.exit(1);
}

const cloneRepo = async () => {
    const git = simpleGit();
    try {
        await git.clone(templateRepo, projectPath);

        const gitDir = path.join(projectPath, '.git');
        if (fs.existsSync(gitDir)) {
            fs.rmSync(gitDir, { recursive: true, force: true });
            // recursive: true -> will delete all files and folders inside the .git directory
            // force: true -> will ignore errors if the directory does not exist, allowing the deletion to proceed without interruption
        }
        console.log(`Created project ${projectName} successfully!`);
        console.log(`Navigate to the project directory: \n cd ${projectName} \n npm install \n npm run dev`);
    } catch (error) {
        console.error('Error cloning repository:', error.message);
        process.exit(1);
    }
};

cloneRepo();
