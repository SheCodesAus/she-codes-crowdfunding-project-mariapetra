import React from "react";
import { Link } from "react-router-dom";

//styles
import "./ProjectCard.css";

function ProjectCard({ projectData }) {
    // const { projectData } = props;
    return (
        <div className="project-card">
            <Link to={`/project/${projectData.id}`}>
                <section className="project-image">
                    <img src={projectData.image} alt="the project"/>
                </section>
                <sub className="project-text">
                    <h2>{projectData.title}</h2>
                    <h3>{projectData.description}</h3>
                    <h3>{projectData.owner}</h3>
                </sub>
                
            </Link>
        </div>
    );
}

export default ProjectCard;