import React from 'react'
import Image from 'next/image'

function NavBar() {
  return (
    <div>
        <div>
            <Image src={'/logo.jpg'} alt={'logo'} width={120} height={60} />
            <div>
                <h2>Home</h2>
                <h2>History</h2>
                <h2>Help</h2>
            </div>
        </div>
    </div>
  )
}

export default NavBar