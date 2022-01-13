import React, { useEffect, useState } from "react"

const ZipCodeSearch = () => {
    const [zip, setZip] = useState([]);
    const [filteredData, setFilteredData] = useState("");

    const getZip = async () => {
        try {
            const response = await fetch(`http://ctp-zip-api.herokuapp.com/zip/${setFilteredData}`)
            console.log(response)

            const jsonData = await response.json()
            console.log(jsonData);

            setZip(jsonData)
        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getZip();
    }, [filteredData])
    
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
                    placeholder = "Try 10016"
                    value = {zip}
                    onChange = {event => setFilteredData(event.target.value)}>
                    </input>
            </form>

            <div>
                {zip.map((zipCode) => {
                    return (
                        <div key = {zipCode.RecordNumber}>
                            <h3>{ zipCode.city }</h3>

                            <ul>
                                <li>State: { zipCode.state }</li>
                                <li>Location: ({ zipCode.lat }, { zipCode.long })</li>
                                <li>Population (estimated): { zipCode.population }</li>
                                <li>Total Wages: { zipCode.totalWages }</li>
                            </ul>
                        </div>
                    )
                })}
            </div>
        </>       
    )
}

export default ZipCodeSearch