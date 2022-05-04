import React from 'react'

const post = (props) => {

    return (
        <div>post with dynamic param
            <h2>{props.post.title}</h2>
            <p>{props.post.body}</p>
        </div>
        
    )
}

export default post


export async function getStaticPaths (){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    const data =await res.json()

    const paths=data.map(d =>{
        return{
            params:{id:`${d.id}`}
        }
    })

    return{
        paths:paths,
        fallback:false,
    }
}

export async function getStaticProps(context){
    const res =await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const data = await res.json()
    return {
        props:{
            post:data
        }
    }
}