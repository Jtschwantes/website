/** @jsxFrag React.Fragment */
/** @jsx jsx */
import React from 'react'
import {jsx, css} from '@emotion/core'

export default function ProjectSection({ projects, isOwner }) {
    return(
        <>
            <h2>Projects</h2>
            <div css={cardContainer}>
                {projects.map(proj => <ProjectCard project={proj}/>)}
            </div>
        </>
    )
}