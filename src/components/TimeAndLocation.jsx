import React from 'react'

function TimeAndLocation() {
    return (
        <div>
            <div className='flex items-center justify-center my-6'>
                <p className='text-white text-xl font-extralight'>
                    Friday, 2 February 2024 | Local time : 12.01 PM
                </p>
            </div>

            <div className='flex items-center justify-center my-3'>
                <p className='text-white text-3xl font-medium'>
                    Jakarta, ID
                </p>
            </div>
        </div>
    )
}

export default TimeAndLocation