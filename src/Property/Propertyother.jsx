import React from 'react'
import { useLocation } from 'react-router-dom'

function Propertyother() {
  const location = useLocation()
  const { listingData } = location.state || {}

  return (
    <div className="p-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-x-6 gap-y-2 text-gray-700 font-semibold font-mono bg-gray-100 p-4 rounded-md shadow-sm">
        <div className="flex items-center gap-2">
          <span>🏠</span>
          <span>Flat Size: {listingData.size}</span>
        </div>
        <div className="flex items-center gap-2">
          <span>💰</span>
          <span>Flat Price: ₹ {listingData.price}</span>
        </div>
      </div>
    </div>
  )
}

export default Propertyother
