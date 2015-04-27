Cordova IRC Web Scokets server
===============================

Web sockets server, which receive the messages which is required for the running Cordova IRC application
which is created during these courses.

# Prerequisites
In order to develop this application you should have following software installed on your PC.

- Node.JS >= 0.10 (http://nodejs.org)
- Bower (http://bower.io/)
- Gulp (http://gulpjs.com)
- GitHub for Windows (https://windows.github.com/) (Only Windows users)

Please make sure that you have account on GitHub.

## Clone source code

Clone source code repository following directions from https://help.github.com/articles/adding-repositories-with-github-for-windows/
Or from Git Shell run 

    git clone https://github.com/DeutchKazakhUnivercity/cordova-irc
    
That will create sub-folder `cordova-irc` with all source code. That folder would be later called the project root.

## Webdev setup

After the installing the Node JS, you could use following commands to install prerequiresites.
You have to run these commands from the your terminal (CMD or Powershell from Windows, from Terminal on Mac, or from Bash on Linux)

    npm -g install bower
    npm -g install cordova
    npm -g install gulp
    
Configure NPM to use MSVS 2013

    npm config set msvs_version 2013
    
## Install dependencies
Install Node dependencies.

    npm install

## Run server
Run following command from the project root.

    node app.js

This will start Web Sockets server on port 8080
If you want change port, please use command:

    node app.js --port 8888
