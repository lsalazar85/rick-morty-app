import React from 'react'
import { DivImage } from './styles'
import { number, func } from 'prop-types'

export const Image = ({ render, width, height }) => {
    return (
        <DivImage 
            width={width} 
            height={height}
        >
            { render() }
        </DivImage>
    )
}

Image.propTypes = {
    render: func.isRequired,
    width: number.isRequired,
    height: number,
}
