import React from 'react'
import Nav from '../components/Nav/nav'

const Default = ({children}) => {
    return (
        <div>
            <Nav/>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Default
