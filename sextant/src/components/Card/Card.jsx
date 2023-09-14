import '../../global.css'
import './Card.css'

export default function Card({title,body}){
    return (
            <div className="card-body">
        <div className="card-title">
        {title}
        </div>
        <div className="card-content">{body}</div>
        </div>
    )
}
