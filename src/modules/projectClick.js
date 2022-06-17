let lastClickedProject = '';

const setProjectClick = (projectName) => {
  lastClickedProject = projectName;
}

const getLastClickedProject = () => {
  return lastClickedProject;
}

export {
          setProjectClick,
          getLastClickedProject
}
