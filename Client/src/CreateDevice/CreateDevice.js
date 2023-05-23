import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {createBrand, createDevice} from "../http/DeviceAPI";

const CreateDevice = () => {
    const {device} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [brand, setBrand] = useState(null)
    const [type, setType] = useState(null)
    const [info, setInfo] = useState([])

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId', device.selectedBrand.id)
        formData.append('typeId', device.selectedType.id)
        createDevice(formData)
    }

    return (
        <div>
            <div>
                <p>Name</p>
                <input type="text" value={name} placeholder="Имя девайса" onChange={e => setName(e.target.value)}/>
            </div>
            <div>
                <p>Price</p>
                <input type="text" value={price} placeholder="Цена" onChange={e => setPrice(Number(e.target.value))}/>
            </div>
            <div>
                <p>Add file</p>
                <input type="file"
                       onChange={selectFile}/>
            </div>
            <button onClick={addDevice}>Add device</button>
        </div>
    );
};

export default CreateDevice;