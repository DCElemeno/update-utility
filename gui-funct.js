// Functions to run the shell script(s)
function appendToDroidOutput(msg) { getDroidOutput().value += msg; };
function setStatus(msg)           { getStatus().innerHTML = msg; };

// Function to run shell script
function runScript(filepath) {
    const process = require('child_process');
    var ls = process.spawn(filepath);

    ls.stdout.on('data', function (data) {
        // console.log('stdout: <' + data+'> ');
        appendToDroidOutput(data+'\n');
    });

    ls.stderr.on('data', function (data) {
        console.log('stderr: ' + data);
    });

    ls.on('close', function (code) {
        // console.log('child process exited with code ' + code);
        if (code == 0) {
            setStatus('Finished checking for updates.');
        } else {
            setStatus('Error : code ' + code);
            getDroidOutput().style.background = "DarkGray";
        }
    });
}

// Functions to call various scripts
function checkForUpdates() { runScript('./scripts/test-status.sh'); } // check git status
function updateApp() { runScript('./scripts/update-app.sh'); } // git pull and update nodemon
function backToApp() { runScript('./scripts/toApp.sh'); } // switch awesomewm workspace to nodemon