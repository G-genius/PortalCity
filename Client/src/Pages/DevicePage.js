import React, {useContext} from 'react';
import {Context} from "../index";

const DevicePage = () => {
    const {device} = useContext(Context)
    return (
        <div>
            device page
            {device.name}
            {device.price}
        </div>
    );
};

export default DevicePage;