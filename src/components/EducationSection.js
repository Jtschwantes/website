/** @jsxFrag React.Fragment */
/** @jsx jsx */
import React, { useState } from 'react'
import {jsx, css} from '@emotion/core'
import EducationCard from './EducationCard'
import Button from './Button'
import '../stylesheets/ctr.css'
import { axiosPostEducation } from '../services/axios'

const cardContainer = css`
    display: flex;
    justify-content: top;
`
const floatRight = css`
    margin-left: auto;
    margin-top: 4px;
`
const addEducation = css`
    display: float;
    height: 230px;
    background-color: #303050;
    border-radius: 15px;
    padding: 15px;
`
const promptCtr = css`
    width: 20%;
`

export default function EducationSection({ educations, isOwner, signedIn, id, data, setData }) {
    const [editing, setEditing] = useState(false)

    const [school, setSchool] = useState('')
    const [field, setField] = useState('')
    const [type, setType] = useState('')
    const [start, setStart] = useState('')
    const [end, setEnd] = useState('')
    const [description, setDesc] = useState('')

    const onClick = async(e) => {
        if(!editing) setEditing(true)
        else {
            let postInfo = {
                school,
                field,
                type,
                startDate: start,
                endDate: end,
                description,
                account_id: id,
                token: signedIn
            }
            setEditing(false)
            await axiosPostEducation('POST', postInfo).catch(console.error)
            setData(JSON.parse(JSON.stringify({ ...data, educations: data.educations.concat(postInfo)})))
        }
    }
    return(
        <>
            <div css={cardContainer}>
                <h2>Education</h2>
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
                <div css={addEducation}>
                    <div css={promptCtr}>
                        <ul>
                            <li>School Name</li>
                            <li>Field of Study</li>
                            <li>Type of Degree</li>
                            <li>Start Date</li>
                            <li>End Date</li>
                            <li>Description</li>
                        </ul>
                    </div>
                    <input onChange={e => setSchool(e.target.value)}/>
                    <input onChange={e => setField(e.target.value)}/>
                    <input onChange={e => setType(e.target.value)}/>
                    <input onChange={e => setStart(e.target.value)}/>
                    <input onChange={e => setEnd(e.target.value)}/>
                    <input onChange={e => setDesc(e.target.value)}/>
                </div>
                </>
            )}
            {educations.map(educ => <EducationCard education={educ} isOwner={isOwner} signedIn={signedIn} data={data} setData={setData}/>)}
        </>
    )
}