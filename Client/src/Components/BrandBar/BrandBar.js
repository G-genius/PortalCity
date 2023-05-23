import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import "./BrandBar.css"

const BrandBar = observer(()=> {
    const {device} = useContext(Context)
    return (
        <div>
            {device.brands.map(brand =>
                <button
                    className="brandBarBtn"
                    key={brand.id}
                    onClick={() => {device.setSelectedBrand(brand)}}
                >
                    {brand.name}
                </button>
            )}
        </div>
    )
})

export default BrandBar;