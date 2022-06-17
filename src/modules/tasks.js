let tasks = {};

const initializeTaskList = (project_name) => {
  tasks[project_name] = [];
}

const addTaskToProject = (project_name,task_name) => {
  tasks[project_name].push(task_name);
}

const getTasks = (project_name) => {
  return tasks[project_name];
}

export {
          initializeTaskList,
          addTaskToProject,
          getTasks
}
