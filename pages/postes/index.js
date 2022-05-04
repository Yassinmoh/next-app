import React from 'react'
import Link from 'next/link'
const postes = (props) => {
    return (
        <div>
            <h1>Postes</h1>
            {props.postes.map((post) => (
                <div key={Math.random()}>
                    <Link href={`http://localhost:3000/api/posts/${post.id}`}>
                        <h3>{post.title}</h3>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default postes

export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/posts')
    const data = await res.json()

    return {
        props: {
            postes: data
        }
    }
}