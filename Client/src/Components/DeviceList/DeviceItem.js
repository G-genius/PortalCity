import React from 'react';
import {useHistory} from "react-router-dom"
const DeviceItem = ({device}) => {
    const history = useHistory()
    return (
        <div onClick={() => {}}>
            {device.name}
        </div>
    );
};

export default DeviceItem;