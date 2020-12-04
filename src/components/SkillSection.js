/** @jsxFrag React.Fragment */
/** @jsx jsx */
import React from 'react'
import {jsx, css} from '@emotion/core'
import SkillCard from './SkillCard'
import EditButton from './AddButton'

const cardContainer = css`
    display: flex;
    justify-content: top;
`
const floatRight = css`
    margin-left: auto;
    margin-top: 0px;
`

export default function SkillSection({ skills, isOwner }) {
    return(
        <>
            <div css={cardContainer}>
                <h2>Skills</h2>
                {isOwner && <div css={floatRight}><EditButton /></div>}
            </div>
            <div css={cardContainer}>
            {skills.map(skill => <SkillCard skill={skill}/>)} 
            </div>
        </>
    )
}