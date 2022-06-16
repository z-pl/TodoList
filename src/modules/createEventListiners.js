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
         getAddTaskFormBtn
         }
from "./createUI";

const createAddEventListiners = () => {
  createAddProjectEventListiner();
  createCancelProjectEventListiner();
  createAddProjectListEventListiner();
  createProjectEventListiner();
}

const createAddProjectEventListiner = () => {
  const addProjectElement = getAddProjectInput();
  const projectForm = getProjectForm();
  const addProjectListElement = getAddProjectBtn();
  const projectInputField = getProjectInput();

  addProjectElement.addEventListener("click", (e) => {
    e.preventDefault()
    projectForm.style = "display: none";
    addProjectListElement.style = "display: inline-block";
    updateProjectListPage(projectInputField.value);

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
    project.addEventListener("click", e => {
      console.log(e);
      // place update task function here
    })
  })
}




export { createAddEventListiners };
