import { posts } from '../../../postes'
export default function handler(req, res) {
    let id = req.query.id
    const post = posts.filter(p => p.id == id)
    if (post) {
        res.status(200).json(post)
    }else{
        res.status(400).json("Bad Request")
    }
}