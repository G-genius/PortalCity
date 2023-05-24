import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {createBrand, createDevice} from "../http/DeviceAPI";

const CreateDevice = () => {
    const {device} = useContext(Context)
    const {user} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId', 1)
        formData.append('typeId', 1)
        createDevice(formData)
        alert("успешно")
        console.log(device)
    }
    console.log(device)
    return (
        <div>
            <div>
                <p>Name</p>
                <input type="text" value={name} placeholder="Имя девайса" onChange={e => setName(e.target.value)}/>
            </div>
            <div>
                <p>Price</p>
                <input type="text" value={price} placeholder="Цена" onChange={e => setPrice(e.target.value)}/>
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