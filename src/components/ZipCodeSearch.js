import React, {Fragment, useEffect, useState } from "react"

const ZipCodeSearch = () => {
    const [zip, setZip] = useState([]);

    const getZip = async () => {
        try {
            const response = await fetch("http://ctp-zip-api.herokuapp.com/zip/10016")
            console.log(response)

            const jsonData = response.json()

            setZip(jsonData)
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
        </>       
    )
}

export default ZipCodeSearch