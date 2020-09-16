import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './advice-box.css'
import Header from './Header/Header'
import Advice from './Advice/Advice'
import { API_URL } from '../../config/api'

const AdviceBox = () => {

    const [advice, setAdvice] = useState([])

    useEffect(() => {
      getAdvices()
    }, [])

    const getAdvices = () => {
        axios.get(`${API_URL}`)
            .then((response) => {
                const { advice } = response.data.slip
                setAdvice([advice])
            })
            .catch((error) => console.error(error))
    }

    return (
        <div className="container">
            <div className="advice-box__container">
                <Header title='Advice Teller' />
                <Advice getRandomAdvice={getAdvices} advice={advice} />
            </div>
        </div>
    )
}

export default AdviceBox
