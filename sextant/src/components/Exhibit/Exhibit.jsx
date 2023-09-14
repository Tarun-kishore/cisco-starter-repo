import '../../global.css'
import './Exhibit.css'
import Card from '../Card/Card.jsx'
import IPAddress from '../IPAddress/IPAddress'
import Latency from '../Latency/Latency'

export default function Exhibit(){
    return (
            <div className="container">
            <div className="container-body">
            <div className="heading">
        Dashboard
        </div>

            <div className="card-holder">
        <Card title="IPV4 Address" body={<IPAddress addressType="IPV4"/>}/>
        <Card title="IPV6 Address" body={<IPAddress addressType="IPV6"/>}/>
        <Card title="Latency" body={<Latency/>}/>
        
        </div>
        </div>
        </div>
    )
}
