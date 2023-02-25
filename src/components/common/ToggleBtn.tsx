import React from 'react'

const ToggleBtn = () => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" value="" className="sr-only peer" />
      <div className="w-[72px] h-10 bg-[#66CEE8] peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-black
                    dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 
                    peer peer-checked:after:translate-x-full peer-checked:after:border-white
                    peer-checked:after:bg-white after:content-[''] after:absolute after:top-[4px] after:left-[3px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-8 after:w-8 after:transition-all dark:border-gray-600 peer-checked:bg-[#FF4F4F]"></div>
    </label>

  )
}

export default ToggleBtn