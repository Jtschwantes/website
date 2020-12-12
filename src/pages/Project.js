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

export default function Project() {
    const url = window.location.href
    const id = url.split('/')[url.split('/').length - 1]

    const [{data, loading, error}] = useAxios(`https://still-journey-39405.herokuapp.com/projects/${id}`);

    return(
        <>
            {loading && <Loading/>}
            {data && (
                <div>
                    <img css={imgCss} src={imgCss} alt="Project Image"/>
                    <div css={css`display: flex;`}>
                    <h1>{data.name}</h1>
                    <div css={css`margin-left: auto; margin-top: 25px; font-weight: bold;`}>
                        {formatDate(data.date)}
                    </div>
                    </div>
                    <h4>{data.summary}</h4>
                    <p>Link to Project: <a external css={link} href={data.link}>{data.link}</a></p>
                    <p>{data.description}</p>
                </div>
            )}    
        </>
    )
}