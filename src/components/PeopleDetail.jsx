import React from 'react'

export default function PeopleDetail({person}) {

    const renderAttribute = ((attr, label) => {
        return(
            <p>{label}: {person[attr]}</p>
        )
    })
    return (
        <div>
            <h2>{person.name}</h2>
            {renderAttribute("birth_year", "Birt Year")}
            {renderAttribute("eye_color", "Eye Color")}
            {renderAttribute("gender", "Gender")}
            {renderAttribute("hair_color", "Hair Color")}
            {renderAttribute("height", "Height [cm]")}
            {renderAttribute("mass", "Mass [kg]")}
        </div>
    )
}
