/** @jsxFrag React.Fragment */
/** @jsx jsx */
import React from 'react'
import {jsx, css} from '@emotion/core'

const pageContainer = css`
    padding: 60px;
`
const spinner = css`
    border: 6px solid #9999bb;
    border-top: 6px solid #dd2222;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: spin 1s ease-in-out infinite;
`
const float = css`
    display: float;
`
const header = css`
    margin: 0px;
    padding-left: 20px;
`

export default function Loading() {
    return (
        <div css={pageContainer}>
          <div css={float}>
            <div css={spinner}></div>
            <h1 css={header}>Please wait while the content loads...</h1>
          </div>
          <p>I'm running my api on a free heroku app, it may take 10 seconds or so...</p>
        </div>
    )
}