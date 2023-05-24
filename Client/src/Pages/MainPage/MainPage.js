import Header from "../../Components/Header/Header";
import React, {useContext, useEffect} from "react";
import {Context} from "../../index";
import BrandBar from "../../Components/BrandBar/BrandBar";
import DeviceList from "../../Components/DeviceList/DeviceList";
import {observer} from "mobx-react-lite";
import {fetchBrands, fetchDevices, fetchTypes} from "../../http/DeviceAPI";
import Pages from "../../Components/Pages";
import Slider from "../../Slider";

const MainPage = observer(() => {


    const {device} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchDevices().then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 2).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [device.selectedType, device.selectedBrand, device.page])
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
            <Slider/>
            <BrandBar/>
            <DeviceList/>
            <Pages/>
        </div>
    )
})
export default MainPage