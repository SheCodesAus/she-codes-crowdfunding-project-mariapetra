import React, { useState, useEffect } from "react";
// import { allProjects } from "../data";

// Components
import ProjectCard from "../components/ProjectCard/ProjectCard";

//styles
import "./HomePage.css";

function HomePage() {
  // State
  const [projectList, setProjectList] = useState([]);


  
  // Actions
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}projects`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setProjectList(data);
      });
  }, []);

  if (!projectList) return <p>Loading projects...</p>;

  return (
  <>   
    <div id="project-list">
      
    <div className="projects-box">
    {projectList.map((projectData, key) => {
      return <ProjectCard key={key} projectData={projectData} />;
    })}
    </div>
    
    </div>
  </>
    );
  } 
 
    
  
export default HomePage;