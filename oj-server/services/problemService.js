let problems = [
  {
    'id': 1,
    "name": 'gfr',
    'desc': 'df',
    'difficulty': 'easy'
  }
];

const getProblems = function() {
  return new Promise((resolve, reject) => {
    resolve(problems);
  });
}

const getProblem = function(id) {
  return new Promise((resolve, reject) => {
    resolve(problems.find(problem => problem.id === id));
  });
}

const addProblem = function(newProblem) {
  return new Promise((resolve, reject) => {
    if (problems.find(problem => problem.name === newProblem.name)) {
      reject('Problem name already exists');
    } else {
      newProblem.id = problems.length + 1;
      problems.push(newProblem);
      resolve(newProblem);
    }
  })
}

module.exports = {
  getProblems,
  getProblem,
  addProblem
}
