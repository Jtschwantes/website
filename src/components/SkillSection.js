/** @jsxFrag React.Fragment */
/** @jsx jsx */
import React from 'react'
import {jsx, css} from '@emotion/core'

export default function SkillSection({ skills, isOwner }) {
    return(
        <>
            <h2>Skills</h2>
            <div css={cardContainer}>
            {skills.map(skill => <SkillCard skill={skill}/>)} 
            </div>
        </>
    )
}