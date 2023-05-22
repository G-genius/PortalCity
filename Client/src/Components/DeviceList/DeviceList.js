import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import DeviceItem from "./DeviceItem";

const DeviceList = observer(() => {
    const {device} = useContext(Context)
    return (
        <div>
            <span>
                {device.devices.map(device =>
                    <DeviceItem key={device.id} device={device}/>
                )}
            </span>
        </div>
    )
})

export default DeviceList;