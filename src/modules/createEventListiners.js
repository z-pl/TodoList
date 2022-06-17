import { getProjectInput,
         getAddProjectInput,
         getCancelProjectInput,
         getProjectForm,
         getAddProjectBtn,
         getProjectList,
         updateProjectListPage,
         getAllProjects,
         updateTaskPage,
         getAddTaskBtn,
         getCancelTaskBtn,
         getAddTaskFormBtn,
         getTaskForm,
         getTaskName,
         getTaskList
         }
from "./createUI";

import { initializeTaskList,
         addTaskToProject,
         getTasks
}
from "./tasks.js";

import { getLastClickedProject, setProjectClick } from "./projectClick.js";

const createAddEventListiners = () => {
  createAddProjectEventListiner();
  createCancelProjectEventListiner();
  createAddProjectListEventListiner();
  createProjectEventListiner();
  createTaskFormEventListiner();
  createAddTaskNameEventListiner();
  createCancelTaskNameEventListiner();
}

const createAddProjectEventListiner = () => {
  const addProjectElement = getAddProjectInput();
  const projectForm = getProjectForm();
  const addProjectListElement = getAddProjectBtn();
  const projectInputField = getProjectInput();
  const taskList = getTaskList();

  addProjectElement.addEventListener("click", (e) => {
    e.preventDefault()
    projectForm.style = "display: none";
    addProjectListElement.style = "display: inline-block";
    updateProjectListPage(projectInputField.value);
    initializeTaskList(projectInputField.value);
    const newProject = getProjectList().lastChild;
    setProjectClick(projectInputField.value);
    setClickProjectEL(newProject, "click");
    taskList.innerHTML = '';
  })
}

const createCancelProjectEventListiner = () => {
  const cancelProjectElement = getCancelProjectInput();
  const projectForm = getProjectForm();
  const addProjectListElement = getAddProjectBtn();

  cancelProjectElement.addEventListener("click", (e) => {
    e.preventDefault();
    projectForm.style = "display: none";
    addProjectListElement.style = "display: inline-block";
  })
}

const createAddProjectListEventListiner = () =>{
  const addProjectListElement = getAddProjectBtn();
  const projectForm = getProjectForm();

  addProjectListElement.addEventListener("click", (e) => {
    e.preventDefault();
    projectForm.style = "display: block";
    addProjectListElement.style = "display: none";
  })
}

const createProjectEventListiner = () => {
  const allProjectElements = getAllProjects();
  allProjectElements.forEach(project => {
    setClickProjectEL(project, "click");
  })
}

const setClickProjectEL = (projectElement, type) => {
  const taskList = getTaskList();

  projectElement.addEventListener(type, e => {
    setProjectClick(projectElement.innerText);
    const tasks = getTasks(getLastClickedProject());
    taskList.innerHTML = '';
    tasks.forEach(task => {
      updateTaskPage(task);
    })
  })
}

const createTaskFormEventListiner = () => {
  const addTaskBtn = getAddTaskFormBtn();
  const taskForm = getTaskForm();

  addTaskBtn.addEventListener("click", e => {
    e.preventDefault();
    taskForm.style = "display: block";
    addTaskBtn.style = "display: none";
  })
}

const createAddTaskNameEventListiner = () => {
  const addTaskNameBtn = getAddTaskBtn();
  const addTaskBtn = getAddTaskFormBtn();
  const taskForm = getTaskForm();
  const taskFormInput = getTaskName();

  const taskList = getTaskList();

  addTaskNameBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const tasks = getTasks(getLastClickedProject());
    taskList.innerHTML = '';
    taskForm.style = "display: none";
    addTaskBtn.style = "display: block";

    addTaskToProject(getLastClickedProject(), taskFormInput.value);
    // loop through tasks
    tasks.forEach(task => {
      updateTaskPage(task);
    })

  });
};

const createCancelTaskNameEventListiner = () => {
  const cancelTaskNameBtn = getCancelTaskBtn();
  const addTaskBtn = getAddTaskFormBtn();
  const taskForm = getTaskForm();

  cancelTaskNameBtn.addEventListener("click", e => {
    e.preventDefault();
    taskForm.style = "display: none";
    addTaskBtn.style = "display: block";
  });
};



export { createAddEventListiners };
