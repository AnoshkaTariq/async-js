// console.log('before');
// const user = getUser(1);
// console.log(user);
// console.log('after');
// function getUser(id) {
//     setTimeout(() => {
//         console.log('reading a user from db', id);
//     }, 2000);
// }


// accessing the user object using callback functions
// console.log('Before');
// getUser(1, (user) => {
//     console.log('User', user);
//     getRepositories(user.gitHubUsername, repos => {
//         console.log('Repositories are: ', repos);
//     });
// });
// console.log('After');

// function getUser(id, callback) {
//     setTimeout(() => {
//         console.log('Reading from the database...');
//         callback({ id: id, gitHubUsername: 'AnoshkaTariq' });
//     }, 2000);
// }

// function getRepositories(username, callback) {
//     setTimeout(() => {
//         console.log('Calling GitHub APIs...');
//         console.log('Displaying the GitHub repos of username: ', username);
//         callback(['repos1', 'repos2', 'repos3']);
//     }, 2000);
// }


// solve callback hell with named functions

// console.log('Before');
// getUser(1, getRepo2);
// console.log('After');
// function getRepo2(user) {
//     getRepositories(user.gitHubUsername, displayRepo);
// }
// function displayRepo(repos) {
//     console.log('Display repos: ', repos);
// }


// async - await approach
async function displayCommits() {
    try {
        const user = await getUser(1);
        const repos = await getRepositories(user.gitHubUsername);
        console.log('Repositories are: ', repos);
        const commits = await getCommits(repos[0]);
        console.log(commits);
    }
    catch (e) {
        console.log('Error', e.message);
    }
}


function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading from db...');
            resolve({ id: 1, gitHubUsername: 'AnoshkaTariq' });
        }, 2000);
    });
}

function getRepositories(username) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling GitHub API to fetch repositories of the username: ', username);
            resolve(['repos1', 'repos2', 'repos3']);
        }, 2000);
    });
}

function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Getting commit of repo: ', repo);
            resolve(['commits1', 'commits2']);
        }, 2000);
    });
}

displayCommits();