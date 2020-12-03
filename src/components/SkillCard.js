
/** @jsxFrag React.Fragment */
/** @jsx jsx */
import React from 'react'
import {jsx, css} from '@emotion/core'

const card = css`
    width: 250px;
    height: 25px;
    padding: 5px;
    text-align: center;
    background-color: #383855;
    border-radius: 10px;
    margin: 2px;
`

export default function SkillCard({ skill }) {
    return(
        <div css={card}>
            <span css={css`font-size: 12px; font-weight: bold;`}>{skill.description}</span>
        </div>
    )
}