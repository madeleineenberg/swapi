import React, {useEffect, useState} from 'react'
import PeopleDetail from '../components/PeopleDetail'


export default function PeopleDetailPage(props) {
    const id = props.match.params.id
    const [person, setPerson] = useState(null)

    const getPerson = () =>{
        const url = `https://swapi.dev/api/people/${id}/`
        fetch(url)
        .then(res => res.json())
        .then(data => setPerson(data))
    }

    useEffect(() => {
        getPerson()
    }, [])

    return (
        <div>
            <h2> Detail Page</h2>
            {person && (
                <PeopleDetail person={person}/>
            )}
        </div>
    )
}
