/** @jsxFrag React.Fragment */
/** @jsx jsx */
import React from 'react'
import {jsx, css} from '@emotion/core'

export default function EducationSection({ educations, isOwner }) {
    return(
        <>
        <h2>Education</h2>
        {data.educations.map(educ => <EducationCard education={educ}/>)}
        </>
    )
}