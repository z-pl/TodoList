import { createNavHeader, createProjectContent, updateProjectList, updateTaskList } from "./createDomElements";

const container = document.querySelector(".container");
const project = document.querySelector(".projects");

const displayPage = () => {
  container.insertAdjacentHTML("afterbegin", createNavHeader());
  project.insertAdjacentHTML("afterbegin", createProjectContent());
}


const getProjectInput = () => {
  const element = document.querySelector("#project-name")
  return element;
}

const getAddProjectInput = () => {
  const element = document.querySelector("#add-project");
  return element;
}

const getCancelProjectInput = () => {
  const element = document.querySelector("#cancel-project");
  return element;
}

const getProjectForm = () => {
  const element = document.querySelector(".form-container")
  return element;
}

const getAddProjectBtn = () => {
  const element = document.querySelector("#add-btn")
  return element;
}

const getProjectList = () => {
  const element = document.querySelector(".project-list")
  return element;
}

const getAllProjects = () => {
  const element = getProjectList().querySelectorAll(".project");
  return element;
}
const updateProjectListPage = (newProjectName) => {
  const projectList = getProjectList();
  const newProject = updateProjectList(newProjectName);

  projectList.insertAdjacentHTML("beforeend", newProject);
}

const getTaskList = () => {
  const element = document.querySelector(".task-list");
  return element;
}

const getAddTaskBtn = () => {
  const element = document.querySelector("#add-task");
  return element;
}

const getCancelTaskBtn = () => {
  const element = document.querySelector("#cancel-task");
  return element;
}

const getAddTaskFormBtn = () => {
  const element = document.querySelector("#addTask-btn");
  return element;
}

const getTaskForm = () => {
  const element = document.querySelector(".task-form");
  return element;
}

const getTaskName = () => {
  const element = document.querySelector("#task-name");
  return element;
}
const updateTaskPage = (newTaskName) => {
  const taskList = getTaskList();
  const newTask = updateTaskList(newTaskName)

  taskList.insertAdjacentHTML("beforeend", newTask);
}



export {
        displayPage,
        getProjectInput,
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
      };
