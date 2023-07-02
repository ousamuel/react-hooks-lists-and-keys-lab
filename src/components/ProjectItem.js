import React from "react";

function ProjectItem({ name, about, technologies }) {
  const techArray = technologies.map(tech =>{
    return <span key={tech.toString()}>{tech}</span>;
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {techArray}
      </div>
    </div>
  );
  // function techArrty() {
  //   return technologies.map((tech) => {
  //      return <span key={tech.toString()}>{tech}</span>;
  //   });
  // }
}

export default ProjectItem;
