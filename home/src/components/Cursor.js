import React from 'react'
import useMousePosition from '../hooks/useMousePosition';

function Cursor() {
    const { clientX, clientY } = useMousePosition();
    return (
        <div style={{
            position: 'absolute',
            width: 32,
            height: 32,
            top: clientY - 32,
            left: clientX - 32,
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            borderRadius: '50%',
            zIndex: 10000,
            transform: `translate(calc(50%), calc(50%))`,
            pointerEvents: 'none',
            transition: '0.2s cubic-bezier(.2,.49,.32,.99)'
        }} />
    )
}

export default Cursor