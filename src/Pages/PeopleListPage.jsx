import React, {useEffect, useState} from 'react'
import PeopleListItem from '../components/PeopleListItem'

export default function PeopleListPage() {

    const [peopleList, setPeopleList] = useState(null)

    const getPeopleList = () => {
        const url = "https://swapi.dev/api/people/"
        fetch(url)
        .then(res => res.json())
        .then(data => setPeopleList(data.results
))
    }

    useEffect(()=> {
        getPeopleList()
    },[])

    return (
        <div className="container">
            <h2>S-W apies List Page</h2>
            {peopleList && peopleList.map(person => {
                const id = person.url.replace("http://swapi.dev/api/people/", "").replace("/","")
                return (
                    <PeopleListItem person={person} id={id} />
                )
            })}
        </div>
    )
}
