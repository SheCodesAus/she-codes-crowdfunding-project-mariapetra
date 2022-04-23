import React from "react";

import { oneProject } from "../data";

function ProjectPage() {
    return (
        // instead of <div> or you can use <> instead of React.Fragment
        <React.Fragment>
        <h2>{oneProject.title}</h2>
        <h3>Created at: {oneProject.date_created}</h3>
        <h3>{`Status: ${oneProject.is_open}`}</h3>
        <h3>Pledges:</h3>
        <ul>
        {oneProject.pledges.map((pledgeData, key) => {
            return (
            <li>
                {pledgeData.amount} from {pledgeData.supporter}
            </li>
            );
        })}
        </ul>
        </React.Fragment>
    );
}

export default ProjectPage;