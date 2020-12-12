
/** @jsxFrag React.Fragment */
/** @jsx jsx */
import React from 'react'
import {jsx, css} from '@emotion/core'
import { formatDate } from '../services/utility'
import Button from './Button'
import { axiosDeleteJob } from '../services/axios'

const card = css`
    position: relative;
    background-color: #383855;
    border-radius: 10px;
    margin: 5px;
    padding: 0px 10px;
    width: auto;
    height: 150px;
`
const editBtns = css`
    position: absolute;
    display: float;
    bottom: 5px;
    right: -5px;
`

export default function JobCard({ job, isOwner, signedIn, data, setData }) {
    const del = async() => {
        await axiosDeleteJob(job.id, {token: signedIn, account_id: job.account_id})
            .catch(console.error)
        setData(JSON.parse(JSON.stringify({ ...data, jobs: data.jobs.filter(j => j.id != job.id)})))
    }
    
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
            {isOwner && <div css={editBtns}><Button text="Edit"/><Button text="Delete" onClick={del}/></div>}
        </div>
    )
}