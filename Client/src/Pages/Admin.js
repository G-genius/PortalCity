import React, {useState} from 'react';
import {createBrand, createType} from "../http/DeviceAPI";
import CreateDevice from "../CreateDevice/CreateDevice";

const Admin = () => {
    const [valueType, setValueType] = useState('')
    const [valueBrand, setValueBrand] = useState('')
    const addType = () => {
        createType({name: valueType}).then(data => setValueType(''))
        alert(valueType + " добавлены")
    }

    const addBrand = () => {
        createBrand({name: valueBrand}).then(data => setValueBrand(''))
        alert(valueBrand + " добавлены")
    }

    return (
        <div>
            admin panel

            <div className="type">
                <h1>Type</h1>
                <input type="text"
                       value={valueType}
                       onChange={e => setValueType(e.target.value)}
                       placeholder="Название типа"
                />
                <button onClick={addType}>Add type</button>
            </div>
            <div className="brand">
                <h1>Brand</h1>
                <input type="brand"
                       value={valueBrand}
                       onChange={e => setValueBrand(e.target.value)}
                       placeholder="Название бренда"
                />
                <button onClick={addBrand}>Add type</button>
            </div>
            <div>
                <h1>Device</h1>
                <CreateDevice/>
            </div>
        </div>
    );
};

export default Admin;