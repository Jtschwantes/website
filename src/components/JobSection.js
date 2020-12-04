/** @jsxFrag React.Fragment */
/** @jsx jsx */
import React from 'react'
import {jsx, css} from '@emotion/core'
import JobCard from './JobCard'
import EditButton from './AddButton'

const cardContainer = css`
    display: flex;
    justify-content: top;
`
const floatRight = css`
    margin-left: auto;
    margin-top: 0px;
`

export default function JobSection({ jobs, isOwner }) {
    return(
          <>
            <div css={cardContainer}>
                <h2>Employment History</h2>
                {isOwner && <div css={floatRight}><EditButton /></div>}
            </div>
            {jobs.map(job => <JobCard job={job}/>)}
          </>
    )
}