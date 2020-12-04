/** @jsxFrag React.Fragment */
/** @jsx jsx */
import React from 'react'
import {jsx, css} from '@emotion/core'
import ProjectCard from './ProjectCard'
import EditButton from './AddButton'

const cardContainer = css`
    display: flex;
    justify-content: top;
`
const floatRight = css`
    margin-left: auto;
    margin-top: 0px;
`
export default function ProjectSection({ projects, isOwner }) {
    return(
        <>
            <div css={cardContainer}>
                <h2>Projects</h2>
                {isOwner && <div css={floatRight}><EditButton /></div>}
            </div>
            <div css={cardContainer}>
                {projects.map(proj => <ProjectCard project={proj}/>)}
            </div>
        </>
    )
}