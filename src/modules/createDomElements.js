const createNavHeader = () => {
  const navHeader =
  `<nav class = "nav-header">
    <h2 class = "title">Todo List</h2>
    <div class = "date-header">DATE</div>
  </nav>`;

  return navHeader;
}

const createProjectContent = () => {
  const projectContent =
  `<div class = "project-content">
    ${createProjectHeader()}
    ${createProjectsList()}
    ${createProjectsForm()}
  </div>
  <i class="fa-solid fa-circle-plus" id = "add-btn"></i>`

  return projectContent;
}

const createProjectsList = () => {
  const projectList =
  `<ul class="project-list">
    <div class = "project-item">
      <p class = "project"> Default sadasda</p>
    </div>
    <div class = "project-item">
      <p class = "project"> Dadsadas adt</p>
    </div>
    <div class = "project-item">
      <p class = "project"> Deasdsada fault</p>
    </div>
  </ul>`;

  return projectList;
}

const createProjectHeader = () => {
  const projectHeader =
  `<h3 class = "project-header">Projects</h3>
  <div class = "divider"></div>`;

  return projectHeader;
}

const createProjectsForm = () => {
  const projectForm =
  `<div class = "form-container">
    <form action = "#" method = "get">
      <input type = "text" id = "project-name" placeholder = "project name">
      <input type= "image" id = "add-project" src="../dist/img/circle-check-regular.svg"/>
      <input type= "image" id = "cancel-project" src="../dist/img/circle-xmark-regular.svg"/>
    </form>
  </div>`

  return projectForm;
}

const updateProjectList = (projectName) => {
  const projectElement =

  `<div class = "project-item">
    <p class = "project">${projectName}</p>
  </div>`

  return projectElement;
}


export { createNavHeader,  createProjectContent, updateProjectList };
