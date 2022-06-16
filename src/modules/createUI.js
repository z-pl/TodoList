import { createNavHeader, createProjectContent, updateProjectList } from "./createDomElements";

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

const updateProjectListPage = (newProjectName) => {
  const projectList = getProjectList();
  const newProject = updateProjectList(newProjectName);
  
  projectList.insertAdjacentHTML("beforeend", newProject);
}


export {
        displayPage,
        getProjectInput,
        getAddProjectInput,
        getCancelProjectInput,
        getProjectForm,
        getAddProjectBtn,
        getProjectList,
        updateProjectListPage
      };
