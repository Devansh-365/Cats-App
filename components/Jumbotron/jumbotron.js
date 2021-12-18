import React from 'react'
import {useRouter} from "next/router"

const Jumbotron = () => {
    const router = useRouter()
    return (
        <div class="jumbotron jumbotron-fluid mt-5">
            <div class="container">
                <h1 class="display-4">Cats World</h1>
                <p class="lead">Find your new best friend today. Adopt a cat right now</p>
                <button type="button" class="btn btn-primary" onClick={() => router.push("/cats")}>Start loooking..</button>

            </div>
        </div>
    )
}

export default Jumbotron
