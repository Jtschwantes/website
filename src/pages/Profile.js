/** @jsxFrag React.Fragment */
/** @jsx jsx */
import React from 'react'
import {jsx, css} from '@emotion/core'
import useAxios from 'axios-hooks'
import Loading from './Loading'
import { Link } from 'react-router-dom'
import { formatDate } from '../services/utility'

const link = css`
    text-decoration: none;
    color: #9999ff;
    &:hover {
        color: #ff0000;
    }
`
const imgCss = css`
    width: auto;
`

export default function Profile() {
    const url = window.location.href
    const id = url.split('/')[url.split('/').length - 1]

    const [{data, loading, error}] = useAxios(`https://still-journey-39405.herokuapp.com/accounts/${id}`);

    return(
        <>
            <h1>Profile {id} Page</h1>   
        </>
    )
}