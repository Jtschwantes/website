
/** @jsxFrag React.Fragment */
/** @jsx jsx */
import React from 'react'
import {jsx, css} from '@emotion/core'

const card = css`
    background-color: #383855;
    border-radius: 10px;
    margin: 5px;
    width: 200px;
    height: 250px;
`
const container = css`
    margin: 10px;
`

export default function ProjectCard({ project }) {
    return(
        <div css={card}>
            <div css={container}>
                {project.name}
            </div>
        </div>
    )
}