import React from 'react'
import {Link} from 'react-router-dom'

export default function StartPage() {
    return (
        <div>
            <h1>SWAPI</h1>
            <Link to="/people">Genereate S-WapiES</Link>
        </div>
    )
}
