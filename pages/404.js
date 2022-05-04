import Head from 'next/head'
import React from 'react'
import styles from '../styles/Error.module.css'
import Image  from 'next/image'
const Error = () => {
    return (
        <>
        <Head>
            <title>Error</title>
            <meta name="description" content="not found page"/>
        </Head>
        <div className={styles.error}>
            <Image src="404.jpg" alt="page not found" />
        </div>
        </>
    )
}

export default Error