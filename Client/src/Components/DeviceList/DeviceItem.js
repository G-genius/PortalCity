import React from 'react';
import {Link, useNavigate} from "react-router-dom";
const DeviceItem = ({device}) => {
    const navigate = useNavigate()
    return (
        <div >
            <div onClick={()=> navigate(`/device/${device.id}`)}>
                {device.id}
                {device.name}
            </div>


        </div>
    );
};

export default DeviceItem;