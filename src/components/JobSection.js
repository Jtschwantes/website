/** @jsxFrag React.Fragment */
/** @jsx jsx */
import React, { useState } from 'react'
import {jsx, css} from '@emotion/core'
import JobCard from './JobCard'
import Button from './Button'
import '../stylesheets/ctr.css'
import { axiosPostJob } from '../services/axios'

const cardContainer = css`
    display: flex;
    justify-content: top;
`
const floatRight = css`
    margin-left: auto;
    margin-top: 0px;
`
const addJob = css`
    display: float;
    height: 200px;
    background-color: #303050;
    border-radius: 15px;
    padding: 15px;
`
const promptCtr = css`
    width: 20%;
`

export default function JobSection({ jobs, isOwner, signedIn, id, data, setData }) {
    const [editing, setEditing] = useState(false)

    const [title, setTitle] = useState('')
    const [employer, setEmployer] = useState('')
    const [start, setStart] = useState('')
    const [end, setEnd] = useState('')
    const [description, setDesc] = useState('')

    const onClick = async(e) => {
        if(!editing) setEditing(true)
        else {
            let postInfo = {
                title,
                employer,
                startDate: start,
                endDate: end,
                description,
                account_id: id,
                token: signedIn
            }
            setEditing(false)
            await axiosPostJob(postInfo).catch(console.error)
            setData(JSON.parse(JSON.stringify({ ...data, jobs: data.jobs.concat(postInfo)})))
        }
    }
    return(
        <>
            <div css={cardContainer}>
                <h2>Employment History</h2>
                {isOwner &&  
                    <div css={floatRight} >
                        <Button text={editing?"Save":"Add"} onClick={onClick}/>
                        {console.log(editing)}
                    </div>
                }
            </div>
            {editing && (
                <>
                <strong>Please input the following information:</strong>
                <div css={addJob}>
                    <div css={promptCtr}>
                        <ul>
                            <li>Job Title</li>
                            <li>Employer</li>
                            <li>Start Date</li>
                            <li>End Date</li>
                            <li>Description</li>
                        </ul>
                    </div>
                    <input onChange={e => setTitle(e.target.value)}/>
                    <input onChange={e => setEmployer(e.target.value)}/>
                    <input onChange={e => setStart(e.target.value)}/>
                    <input onChange={e => setEnd(e.target.value)}/>
                    <input onChange={e => setDesc(e.target.value)}/>
                </div>
                </>
            )}
            {jobs.map(job => <JobCard job={job} isOwner={isOwner} signedIn={signedIn} data={data} setData={setData}/>)}
        </>
    )
}