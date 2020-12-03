/** @jsx jsx */
import React from 'react'
import {jsx, css} from '@emotion/core'
import {Link} from 'react-router-dom'

const fullDiv = css`
    height: 65px;
    background-color: #303050;
    display: flex;
    box-shadow:  3px 3px 5px 6px #112;
`
const ul = css`
    display: flex;
    list-style-type: none;
    padding-inline-start: 0px;
`
const link = css`
    padding: 16px;
    text-decoration: none;
    text-align: center;
    font-size: 24px;
    color: #e0e0ff;
    text-transform: uppercase;
    transition: background-color 0.4s, color 0.4s;
    &:hover {
        background-color: #dd3333;
        color: #101020
    } 
`

export default function Header() {
    return (
        <div css={fullDiv}>
            <ul css={ul}>
                <li><Link css={link} to='/'>Home</Link></li>
                <li><Link css={link} to='/projects'>Projects</Link></li>
                <li><Link css={link} to='/about'>About</Link></li>
            </ul>
        </div>
    )
}