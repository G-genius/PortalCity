import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import {useParams} from "react-router-dom";
import {fetchOneDevice} from "../http/DeviceAPI";

const DevicePage = () => {
    const [device, setDevice] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])
    return (
        <div>
            <h1>{device.name}</h1>
            <h2>{device.price}</h2>
            <img src={"http://localhost:5000/"+device.img}/>
        </div>
    );
};

export default DevicePage;