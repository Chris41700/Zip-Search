import React, { useEffect, useState } from "react"
import Zip from "./Zip"

const ZipCodeSearch = () => {
    const [zip, setZip] = useState([]);
    const [filteredData, setFilteredData] = useState(zip);

    const getZip = async () => {
        try {
            const response = await fetch("http://ctp-zip-api.herokuapp.com/zip/10016")
            console.log(response)

            const jsonData = await response.json()
            console.log(jsonData);

            setZip(jsonData)
            setFilteredData(jsonData);
        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getZip();
    }, [])

    return (
        <>
            <h1 className = "text-center mt-5">
                Zip Code Search
            </h1>
            
            <div>
                <h6>Zip Code: </h6>
            </div>
            <form>
                <input 
                    type = "text" 
                    className = "form-control"
                    maxLength = "5"
                    placeholder = "Try 10016"
                    value = {zip}
                    onChange = {event => setZip(event.target.value)}></input>
            </form>

            <Zip zip = { zip } />
        </>       
    )
}

export default ZipCodeSearch