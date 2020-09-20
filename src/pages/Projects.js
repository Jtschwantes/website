/** @jsxFrag React.Fragment */
/** @jsx jsx */
import React from 'react'
import {jsx, css} from '@emotion/core'
import ProjectCard from '../components/ProjectCard'

const projectsContainer = css`
    display: float;
    max-width: 800px;
`

export default function Projects({ projects }) {
    return (
        <>
            <h1>Projects</h1>
            <div css={projectsContainer}>
            {projects.map(proj => <ProjectCard project={proj}/>)}
            </div>
        </>
    )
}