import '../../global.css'
import './Exhibit.css'
import Card from '../Card/Card.jsx'

export default function Exhibit(){
    return (
            <div className="container">
            <div className="container-body">
            <div className="heading">
        Dashboard
        </div>

            <div className="card-holder">
        <Card/>
        <Card/>
        <Card/>
        </div>
        </div>
        </div>
    )
}
