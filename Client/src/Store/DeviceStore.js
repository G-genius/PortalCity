import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id:1, name: "mobile"},
            {id:2, name: "tv"},
            {id:3, name: "pc"},
            {id:4, name: "holodilniki"}
        ]
        this._brands = [
            {id:1, name:"apple"},
            {id:2, name:"samsung"},
        ]
        this._devices = [
            {id:1, name:"pro 12", price: "1200000"},
            {id:2, name:"pro 13", price: "1200000"},
            {id:3, name:"pro 14", price: "1200000"},
            {id:14, name:"pro 15", price: "1200000"},
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this.setPage(1)
        this._selectedBrand = brand
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}