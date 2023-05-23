import Header from "../../Components/Header/Header";
import React, {useContext} from "react";
import {Context} from "../../index";
import BrandBar from "../../Components/BrandBar/BrandBar";
import DeviceList from "../../Components/DeviceList/DeviceList";
import {observer} from "mobx-react-lite";

const MainPage = observer(() => {


    const {device} = useContext(Context)
    return (
        <div className="mainpage">
                {device.types.map(type =>
                    <button
                        onClick={() => {device.setSelectedType(type)}}
                        key={type.id}
                    >
                        {type.name}
                    </button>
                )}
            <BrandBar/>
            <DeviceList/>

        </div>
    )
})
export default MainPage