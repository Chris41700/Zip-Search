import React from 'react'

function Zip({ zip }) {
    return (
        <>
            {zip.map((zipCode) => {
                return (
                    <div key = { zipCode.RecordNumber }>
                        <h3>{ zipCode.City }</h3>

                         <ul>
                            <li>State: { zipCode.State }</li>
                            <li>Location: ({ zipCode.Lat }, { zipCode.Long })</li>
                            <li>Population (estimated): { zipCode.EstimatedPopulation }</li>
                            <li>Total Wages: { zipCode.TotalWages }</li>
                        </ul>
                    </div>
                  )
            })}
        
    </>
    )
}

export default Zip