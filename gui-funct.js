// Functions to run the shell script(s)
function appendToDroidOutput(msg) { getDroidOutput().value += msg; };
function setStatus(msg)           { getStatus().innerHTML = msg; };

// Function to check git status
function checkForUpdates() {
    const process = require('child_process');   // The power of Node.JS

    // var ls = process.spawn('ls', ['-l']);
    var ls = process.spawn('./test-status.sh');
    // var ls = process.spawn('./shell-scripts/check-for-updates.sh');

    ls.stdout.on('data', function (data) {
      // console.log('stdout: <' + data+'> ');
          // appendToDroidOutput(data);
      appendToDroidOutput(data+'\n');
    });

    ls.stderr.on('data', function (data) {
      console.log('stderr: ' + data);
    });

    ls.on('close', function (code) {
      // console.log('child process exited with code ' + code);
          if (code == 0)
         setStatus('Finished checking for updates.');
          else
         setStatus('Error : code ' + code);
          getDroidOutput().style.background = "DarkGray";
    });
};

// Function to update repo
function updateApp() {
    const process = require('child_process');   // The power of Node.JS

    // var ls = process.spawn('ls', ['-l']);
    var ls = process.spawn('./update-app.sh');
    // var ls = process.spawn('./shell-scripts/check-for-updates.sh');

    ls.stdout.on('data', function (data) {
      // console.log('stdout: <' + data+'> ');
          // appendToDroidOutput(data);
      appendToDroidOutput(data+'\n');
    });

    ls.stderr.on('data', function (data) {
      console.log('stderr: ' + data);
    });

    ls.on('close', function (code) {
      // console.log('child process exited with code ' + code);
          if (code == 0)
         setStatus('Finished checking for updates.');
          else
         setStatus('Error : code ' + code);
          getDroidOutput().style.background = "DarkGray";
    });
};