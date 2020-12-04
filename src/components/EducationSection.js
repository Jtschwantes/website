/** @jsxFrag React.Fragment */
/** @jsx jsx */
import React from 'react'
import {jsx, css} from '@emotion/core'
import EducationCards from './EducationCard'

export default function EducationSection({ educations, isOwner }) {
    return(
        <>
        <h2>Education</h2>
        {educations.map(educ => <EducationCards education={educ}/>)}
        </>
    )
}