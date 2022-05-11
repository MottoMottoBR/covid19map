import React, { memo } from "react"
import RefreshIcon from 'assets/images/refresh.vg'
import {Card, Typography, Button, Select, MenuItem} from '../../../components'
import COUNTRIES from 'commons/constants/countries'
import { CardPanelContentStyled, ItemStyled } from "./style"

const navigatorHassShare =  navigator.share

function Panel({updateAt, onChange, data, country, getCoviddata}){
    //const {cases, recovered, deaths, todayCases, todayDeths}
}