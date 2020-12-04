/** @jsxFrag React.Fragment */
/** @jsx jsx */
import React from 'react'
import {jsx, css} from '@emotion/core'
import JobCard from './JobCard'

export default function JobSection({ jobs, isOwner }) {
    return(
          <>
            <h2>Employment History</h2>
            {jobs.map(job => <JobCard job={job}/>)}
          </>
    )
}