import Image from 'next/image'
import React from 'react'
import { productType } from '../../../type'

interface props {
    product: productType
}

const ImageCart = ({product} : props) => {
    const images = product?.images;
    // console.log(images)
  return (
    <div className='bg-pink-50'>
        <Image src={images[0] } alt={product?.title} width={500} height={500} className='w-full '/>
    </div>
  )
}

export default ImageCart