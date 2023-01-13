import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'

const Gallery = ({ images = [''] }) => {
    const [mainImage, setMainImage] = useState(images[0]);
    useEffect( () => {
        setMainImage(images[0])
    }, [images]);
    return (
        <Row>
            <Col md={3} className='single-product-galley-image'>
                {
                    images.map((item, i) => {
                        return (
                            <figure key={i} >
                                <img 
                                src={item} 
                                alt="images" 
                                onClick={ () => { setMainImage(item) }}
                                />
                            </figure>
                        )
                    })
                }
            </Col>
            <Col md={9} className='single-product-main-image'>
                <img src={mainImage} alt="image" />
            </Col>
        </Row>
    )
}

export default Gallery