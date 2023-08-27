import React from 'react'
import Image from 'next/image'

function NavBar() {
  return (
    <div>
        <div>
            <Image src={'/logo.jpg'} alt={'logo'} width={120} height={60} />
        </div>
    </div>
  )
}

export default NavBar