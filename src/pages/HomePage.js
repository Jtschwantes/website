/** @jsxFrag React.Fragment */
/** @jsx jsx */
import React from 'react'
import {jsx, css} from '@emotion/core'
import { Link } from 'react-router-dom'

const link = css`
    text-decoration: none;
    color: #9999ff;
    &:hover {
        color: #ff0000;
    }
`

export default function HomePage() {
  return(
    <>
      <h1>Welcome to My Website!</h1>
      <p>
          This website contains a description about my accomplishments as well as things that I'm passionate about. You can browse through a list of projects of things that I've done, both personally and professionally, or look at some of the other things that I've thrown on here. I hope that something catches your eye! If you wish to contact me, you can find my personal information in the <Link css={link} to="/about">about me</Link> section.
      </p>
    </>
  )
}