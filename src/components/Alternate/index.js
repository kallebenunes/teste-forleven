import React from 'react'
import { Link } from 'react-router-dom'
import StyleAternate from './style'

const Alternate = () => {
    return (
        <StyleAternate>
            <Link to='/'>Minimo</Link>
            <Link to='/bonus'>Bonus</Link>
        </StyleAternate>
    )
}

export default Alternate
