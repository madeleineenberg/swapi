import React from 'react'
import {Link} from 'react-router-dom'

export default function PeopleListItem({person, id}) {
    return (
        <div className="link-wrapper">
           <Link to={`/people/${id}`}> {person.name}</Link>
        </div>
    )
}
