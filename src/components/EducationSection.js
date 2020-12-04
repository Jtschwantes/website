/** @jsxFrag React.Fragment */
/** @jsx jsx */
import React from 'react'
import {jsx, css} from '@emotion/core'
import EducationCard from './EducationCard'
import EditButton from './EditButton'

const cardContainer = css`
    display: flex;
    justify-content: top;
`
const floatRight = css`
    margin-left: auto;
    margin-top: 0px;
`

export default function EducationSection({ educations, isOwner }) {
    return(
        <>
            <div css={cardContainer}>
                <h2>Education</h2>
                {isOwner && <div css={floatRight}><EditButton /></div>}
            </div>
            {educations.map(educ => <EducationCard education={educ}/>)}
        </>
    )
}