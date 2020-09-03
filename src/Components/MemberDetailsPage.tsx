import React from 'react';
import { useParams } from 'react-router-dom';

export const MemberDetailsPage = () => {

    return (
        <div>
            <h1>Member Details</h1>
            <Member />
        </div>
    )
}

export function Member() {
    // let { id } = useParams();

    return (
        <div >
            {/* <p>You are looking at the details for member: {id}.</p> */}
        </div>
    )
}