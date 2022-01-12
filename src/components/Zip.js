import React from 'react'

function Zip( { zip }) {
    return (
        <>
            {zip.map(zipCode => {
                //return (
                    <div key={zipCode.id}>
                        <h3>{ zipCode.city }</h3>

                        <ul>
                            <li>State: { zipCode.state }</li>
                            <li>Location: ({ zipCode.lat }, { zipCode.long })</li>
                            <li>Population (estimated): { zipCode.population }</li>
                            <li>Total Wages: { zipCode.totalWages }</li>
                        </ul>
                    </div>
                //)
            })}
        </>
    )
}

export default Zip