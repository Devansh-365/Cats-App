import React from 'react'
import { useEffect, useState } from 'react'
import Card from '../../components/card/card'
import Nav from '../../components/Nav/nav'
import Default from '../../layouts/default'

const CatsPage = () => {

    const [cats, setCats] = useState([])

    const fetchCats = async () => {
        const response = await fetch('api/cats')
        const data = await response.json()
        console.log(data)
        setCats(data)
    }

    useEffect(() => {
        fetchCats()
    }, [])

    return (
        <>
        <Default>
        <div className='container mt-5'>
            <div style = {{display:"flex",flexWrap:"wrap"}}>
            {cats.map(cat => (
                <Card name={cat.name} phone={cat.phone} id={cat.id} email={cat.email} image={cat.image}/>
            ))}
            </div>
        </div>
        </Default>
        </>
    )
}

export default CatsPage
