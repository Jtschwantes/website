/** @jsxFrag React.Fragment */
/** @jsx jsx */
import React, { useState, useEffect } from 'react'
import {jsx, css} from '@emotion/core'
import useAxios from 'axios-hooks'
import Loading from './Loading'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import { formatDate } from '../services/utility'

const link = css`
    text-decoration: none;
    color: #9999ff;
    &:hover {
        color: #ff0000;
    }
`
const addInfo = css`
    display: float;
    height: 230px;
    background-color: #303050;
    border-radius: 15px;
    padding: 15px;
`
const promptCtr = css`
    width: 20%;
`

export default function Profile() {
    const url = window.location.href
    const id = url.split('/')[url.split('/').length - 1]

    const [editing, setEditing] = useState(false)
    useEffect(() => {
        setFirst(data?.first)
        setLast(data?.last)
        setPhone(data?.phone)
        setEmail(data?.email)
        setImgLink(data?.imglink)
    }, [data])

    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [imgLink, setImgLink] = useState('')

    const [{data, loading, error}] = useAxios(`https://still-journey-39405.herokuapp.com/accounts/${id}`);

    return(
        <>
            {loading && <Loading/>}
            {data && !editing && (
                <>
                    <h1>Profile</h1>
                    <h2>Name: {data.first?data.first:''} {data.last?data.last:''}</h2>
                    <p>Phone number: {data.phone?data.phone:''}</p>
                    <p>Email address: {data.email?data.email:''}</p>
                    <Button text={editing?"Save":"Edit"} onClick={() => {setEditing(true)}}/>
                </>
            )}
            {data && editing && (
            <>
            <strong>Please input the following information:</strong>
                <div css={addInfo}>
                    <div css={promptCtr}>
                        <ul>
                            <li>First Name</li>
                            <li>Last Name</li>
                            <li>Phone Number</li>
                            <li>Email Address</li>
                            <li>Image Link</li>
                        </ul>
                    </div>
                    <input value={first} onChange={e => setFirst(e.target.value)}/>
                    <input value={last} onChange={e => setLast(e.target.value)}/>
                    <input value={phone} onChange={e => setPhone(e.target.value)}/>
                    <input value={email} onChange={e => setEmail(e.target.value)}/>
                    <input value={imgLink} onChange={e => setImgLink(e.target.value)}/>
                </div>
                </> 
            )} 
        </>
    )
}