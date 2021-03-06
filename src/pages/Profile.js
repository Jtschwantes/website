/** @jsxFrag React.Fragment */
/** @jsx jsx */
import React, { useState, useEffect } from 'react'
import {jsx, css} from '@emotion/core'
import useAxios from 'axios-hooks'
import Loading from './Loading'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import { formatDate } from '../services/utility'
import { axiosPostAccount, axiosPutAccount } from '../services/axios'

const link = css`
    text-decoration: none;
    color: #9999ff;
    &:hover {
        color: #ff0000;
    }
`
const addInfo = css`
    display: float;
    height: 200px;
    background-color: #303050;
    border-radius: 15px;
    padding: 15px;
`
const promptCtr = css`
    width: 20%;
`

export default function Profile({ signedIn }) {
    const url = window.location.href
    const id = url.split('/')[url.split('/').length - 1]

    const onClick = async() => {
        if(!editing) setEditing(true)
        else {
            let putData = {
                first,
                last,
                phone,
                email,
                imgLink,
                token: signedIn,
                account_id: id
            } 
            setEditing(false)
            axiosPutAccount(id, putData).catch(console.error)
            setFirst(putData.first)
            setLast(putData.last)
            setPhone(putData.phone)
            setEmail(putData.email)
            setImgLink(putData.imglink)
        }
    }

    const [editing, setEditing] = useState(false)
    useEffect(() => {
        if(!data) return
        setFirst(data.first)
        setLast(data.last)
        setPhone(data.phone)
        setEmail(data.email)
        setImgLink(data.imglink)
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
                    <p>Your resume page is visible at: <Link css={link} to={`/accounts/${id}`}>https://jtschwantes.com/accounts/{id}</Link></p>
                    <h2>Name: {data.first?data.first:''} {data.last?data.last:''}</h2>
                    <p>Phone number: {data.phone?data.phone:''}</p>
                    <p>Email address: {data.email?data.email:''}</p>
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
            {editing && <Button text="Cancel" onClick={() => setEditing(false)}/>}
            <Button text={editing?"Save":"Edit"} onClick={onClick}/>
        </>
    )
}