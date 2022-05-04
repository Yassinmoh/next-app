import {posts} from '../../../postes'
export default function handler(req, res) {
    res.status(200).send(posts)
}