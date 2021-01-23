// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(1);
//     }, 2000);
// });

// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject(new Error('error message'));
//     }, 2000);
// });
// p.then(result => console.log('Result:', result))
//     .catch(err => console.log('Error: ', err.message));





// getUser function using promises
function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading from db...');
            resolve({ id: id, gitHubUsername: 'AnoshkaTariq' });
        }, 2000);
    });
}
function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling GitHub API to fetch repositories of the username: ', username);
            resolve(['repos1', 'repos2', 'repos3']);
            // reject(new Error('error message'));
        }, 2000);
    });
}

function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Getting commit of specific repo');
            resolve(['commit1', 'commit2']);
        }, 2000);
    });
}



getUser(1)
    .then(user => getRepositories(user.gitHubUsername))
    .then(repos => {
        console.log('Repos are: ', repos);
        return getCommits(repos[0]);
    })
    .then(commits => console.log('Commits', commits))
    .catch(err => console.log('Error', err.message));

