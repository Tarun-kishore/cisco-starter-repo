import { useState,useEffect } from "react"

export default function IPAddress(props){
    const [address,setAddress] = useState('IP Adress loading')

    useEffect(()=>{
        if(props.addressType == 'IPV4'){
            fetch('https://api.ipify.org?format=json')
            .then(res=> res.json())
            .then(data => setAddress(data['ip']));
        }
        else if(props.addressType == 'IPV6'){

            fetch('https://api64.ipify.org?format=json')
            .then(res=> res.json())
            .then(data => setAddress(data['ip']));
        }
    },[]);
    return (
        <div>{address}</div>
    )
}
