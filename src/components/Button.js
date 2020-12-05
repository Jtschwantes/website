/** @jsxFrag React.Fragment */
/** @jsx jsx */
import React from 'react'
import {jsx, css} from '@emotion/core'
import JobCard from './JobCard'

const btn = css`
    display: table-cell;
    margin: 0px 2px;
    background-color: #303050; 
    width: 100px;
    text-align: center;
    height: 30px;
    box-shadow: 5px 5px 5px black;
    border-radius: 20px;
    vertical-align: middle;
    transition: background-color 0.4s, color 0.4s;
    &:hover {
        background-color: #dd3333;
        color: #101020
    } 
`

export default function Button({ onClick, text }) {
    return(
          <>
            <div css={btn} onClick={onClick}>{text}</div>
          </>
    )
}