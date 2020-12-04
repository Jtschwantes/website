/** @jsx jsx */
import React from 'react'
import {jsx, css} from '@emotion/core'
import {Link} from 'react-router-dom'
import GoogleLogin from 'react-google-login'
import { GoogleLogout } from 'react-google-login';

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
const google = css`
    margin: 10px 10px;
    display: flex;
    margin-left: auto;
`

export default function Header({signedIn, setSignedIn}) {
    const signIn = (res) => {
        setSignedIn(res.id_token)
        console.log(res)
    }
    const signOut = () => {
        setSignedIn(false)
    }

    console.log(signedIn)

    return (
        <div css={fullDiv}>
            <ul css={ul}>
                <li><Link css={link} to='/'>Home</Link></li>
                <li><Link css={link} to='/projects'>Projects</Link></li>
                <li><Link css={link} to='/about'>About</Link></li>
            </ul>
            <div css={google}>
                {signedIn && <GoogleLogin 
                    clientId="723588652665-thkoe5eonaumrjabu495nj4ca2fs2q7u.apps.googleusercontent.com"
                    // buttonText="Login"
                    onSuccess={signIn}
                    cookiePolicy={'single_host_origin'} 
                    isSignedIn={true}
                />}
                {!signedIn && <GoogleLogout
                    clientId="723588652665-thkoe5eonaumrjabu495nj4ca2fs2q7u.apps.googleusercontent.com"
                    buttonText="Logout"
                    onLogoutSuccess={signOut}
                />}
            </div>
        </div>
    )
}