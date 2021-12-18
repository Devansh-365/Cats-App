import React from 'react'
import styles from "./card.module.css"
import {useRouter} from "next/router"

const Card = ({name, phone, email, image, id}) => {
    const router = useRouter()
    const {url,alt} = image
    return (
        <div className={styles.card} onClick={() => router.push(`/cats/${id}`)}>
            <div className={styles["card-header"]}>
            <img src={url} alt={alt} className={styles["card-img"]} />
            </div>
            <div className={styles["cardContent"]}>
                <h3>{name}</h3>
                <p>{phone}</p>
                <p>{email}</p>
            </div>  
        </div>
    )
}

export default Card
