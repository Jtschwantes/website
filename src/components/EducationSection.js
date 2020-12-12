/** @jsxFrag React.Fragment */
/** @jsx jsx */
import React, { useState } from 'react'
import {jsx, css} from '@emotion/core'
import EducationCard from './EducationCard'
import Button from './Button'
import '../stylesheets/ctr.css'
import { axiosPostEducation, axiosPutEducation } from '../services/axios'

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

    const [updating, setUpdating] = useState(false)
    const onEdit = (edu) => {
        setUpdating(edu)
        setEditing(true)

        setType(edu.type)
        setField(edu.field)
        setDesc(edu.description)
        setSchool(edu.school)
        setStart(edu.startDate)
        setEnd(edu.endDate)
    }

    const onClick = async() => {
        if(!editing) setEditing(true)
        else if(updating) {
            setDesc('')
            let putInfo = {
                school,
                field,
                type,
                startDate: start,
                endDate: end,
                description,
                account_id: id,
                token: signedIn,
                id: updating.id
            }
            setEditing(false)
            setUpdating(false)
            await axiosPutEducation(updating.id, putInfo).catch(console.error)
            setData(JSON.parse(JSON.stringify({ ...data, projects: data.projects.filter(edu => edu.id != updating.id).concat(putInfo)})))
        }
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
            await axiosPostEducation(postInfo).catch(console.error)
            setData(JSON.parse(JSON.stringify({ ...data, educations: data.educations.concat(postInfo)})))
        }
    }
    return(
        <>
            <div css={cardContainer}>
                <h2>Education</h2>
                {isOwner &&  
                    <div css={floatRight} >
                        {editing && <Button text='Cancel' onClick={()=>setEditing(false)}/>}
                        <Button add text={editing?"Save":"Add"} onClick={onClick}/>
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
                    <input value={school} onChange={e => setSchool(e.target.value)}/>
                    <input value={field} onChange={e => setField(e.target.value)}/>
                    <input value={type} onChange={e => setType(e.target.value)}/>
                    <input value={start} onChange={e => setStart(e.target.value)}/>
                    <input value={end} onChange={e => setEnd(e.target.value)}/>
                    <input value={description} onChange={e => setDesc(e.target.value)}/>
                </div>
                </>
            )}
            {educations.map(educ => 
                <EducationCard 
                    education={educ} 
                    isOwner={isOwner} 
                    signedIn={signedIn} 
                    data={data} 
                    setData={setData}
                    onEdit={onEdit}
                />)}
        </>
    )
}