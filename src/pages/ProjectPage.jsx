import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//components
import UserDetail from "../components/ProjectOwner/ProjectOwner";
import PledgeForm from "../components/PledgeForm/PledgeForm";

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
        <div>
            <h2>{projectData.title}</h2>
            <h3>Created by: <UserDetail userId={projectData.owner} /> on {projectData.date_created}</h3>
        </div>

        <div>
        <h2>{projectData.title}</h2>
            <h2>Time left: {projectData.time} hours</h2>
            {/* <h2>//do an array with pledge time - project time</h2> */}
            <h3>Created at: {projectData.date_created}</h3>
            <h3>{`Status: ${projectData.is_open}`}</h3>
            <h3>Pledges:</h3>
            <ul>
            {projectData.pledges.map((pledgeData, key) => {
                return (
                <li>
                    {pledgeData.amount} from {pledgeData.supporter}
                </li>
                );
            })}
            </ul>
            <PledgeForm projectId={id}/>
        </div>          
        </>
    );
}

export default ProjectPage;