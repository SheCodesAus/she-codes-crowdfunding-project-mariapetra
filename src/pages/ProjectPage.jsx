import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//components
import UserDetail from "../components/ProjectOwner/ProjectOwner";
import PledgeForm from "../components/PledgeForm/PledgeForm";

//styles
import "./ProjectSection.css";


function ProjectPage() {
    const [projectData, setProjectData] = useState({pledges: [] });
    const { id } = useParams();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setProjectData(data);
            console.log(data)
        });
    }, [id]);


    //loading state
    if (!projectData) {
        return <h3>Loading project ...</h3>;
    }

    //normal state
    return (
        // instead of <div> or you can use <> instead of React.Fragment 
        <>
        <div className="project-container">
            <section className="project-title">
                <h2>{projectData.title}</h2>
                {/* <h3>Created by: <UserDetail userId={projectData.owner} /> </h3> */}
                {/* on {projectData.date_created}</h3> */}
            </section>

            <container className="project-content">
            {/* <h2>{projectData.title}</h2> */}
            <h1><UserDetail userId={projectData.owner} /></h1> <h2>Is asking for {projectData.time} hours of your time</h2>
            <h2>{projectData.comment}</h2>  
                {/* <h2>//do an array with pledge time - project time</h2> */}
                {/* <h3>Created at: {projectData.date_created}</h3> */}
                {/* <h3>{`Status: ${projectData.is_open}`}</h3> */}
                <h3>Pledges:</h3>
                <container className="pledges">
                <ul>
                {projectData.pledges.map((pledgeData, key) => {
                    return (
                        
                            <li className="pledge-list">
                                {pledgeData.amount} hours donated from {pledgeData.supporter} 
                                
                                <p>{pledgeData.comment}</p>
                             </li>
                    
                    );
                 })}
                </ul>
                </container>
               
                <PledgeForm projectId={id}/>
            </container>    
        </div>
          
        </>
    );
}

export default ProjectPage;