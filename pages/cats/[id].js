import { useRouter} from 'next/router'
import React from 'react'
import { useState, useEffect } from 'react'
import Nav from '../../components/Nav/nav'
import Default from '../../layouts/default'

const Cat = () => {
    const router = useRouter()
    const {id} = router.query
    const [cat, setCat] = useState(null);

    const fetchCat = async () => {
        const response = await fetch(`/api/cats/${id}`)
        const data = await response.json()
        setCat(data)
    }

    useEffect(() => {
        fetchCat()
    }, [])
    return (
        <div>
            <Default>
            {cat && (
                <div clasName ="constainer mt-5 d-flex" style={{display: "flex"}}>
                    <img src={cat.image.url} alt={cat.image.alt} />
                    <div className='mx-5'>
                        <h1>{cat.name}</h1>
                        <p>{cat.description}</p>
                    </div>
                </div>
            )}
            </Default>
        </div>
    )
}

export default Cat
