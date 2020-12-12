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

export default function Button({ onClick, text, edit, del, add }) {
    if(edit) return (<div css={btn} onClick={onClick}><img src='../images/editws.png' alt='edit' width='25' height='25'/></div>)
    if(del) return (<div css={btn} onClick={onClick}><img src='../images/trashws.png' alt='delete' width='25' height='25'/></div>)
    if(add) return (<div css={btn} onClick={onClick}><img src='../images/plusws.png' alt='add' width='25' height='25'/></div>)
    return(<div css={btn} onClick={onClick}>{text}</div>)
}