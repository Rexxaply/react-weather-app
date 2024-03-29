import React from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'

function Masukan() {
  return (

    <div className='flex flex-row justify-center my-6'>
      <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>

        <input placeholder='Search...'
          type="text"
          className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase rounded-tl-lg rounded-br-lg shadow-sky-800/50'
        />

        <UilSearch size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />

        <UilLocationPoint size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
      </div>

      <div className='flex flex-row w-1/4 items-center justify-center'>
        <button name='metric' className='text-xl text-white font-light'>℃</button>
        <p className='text-xl text-white mx-1'>|</p>
        <button name='imperial' className='text-xl text-white font-light'>℉</button>
      </div>

    </div>

  )
}

export default Masukan