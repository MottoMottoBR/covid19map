import React, { memo, useCallback, useEffect, useState } from "react"
import Api from '../../api'
import {ContainerStyled} from './style'

function Main() {

    const [data, setdata] = useState({})
    const [country, setCountry] = useState('brazil')

    const getCovidData = useCallback((country) => {
        Api.getCountry(country)
            .then(data => setdata(data))
    }, [])

    useEffect(() => {
        getCovidData(country)
    }, [getCovidData, country])

    return (
        <ContainerStyled>
            <div className="mb-2">


            </div>
        </ContainerStyled>

    )
}

export default memo(Main)