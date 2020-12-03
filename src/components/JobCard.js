
/** @jsxFrag React.Fragment */
/** @jsx jsx */
import React from 'react'
import {jsx, css} from '@emotion/core'
import { formatDate } from '../services/utility'

const card = css`
    background-color: #383855;
    border-radius: 10px;
    margin: 5px;
    padding: 0px 10px;
    width: auto;
    height: 150px;
`

export default function JobCard({ job }) {
    return(
        <div css={card}>
            <p css={css`margin: 2px;`}>
                <div css={css`display: flex;`}>
                    <strong>{job.title}</strong>
                    <em css={css`margin-left: auto;`}>
                        {`${formatDate(job.startdate)} - ${formatDate(job.enddate)}`}
                    </em>
                    <br />
                </div>
                <em>{job.employer}</em><br />
                {job.description}
            </p>
        </div>
    )
}