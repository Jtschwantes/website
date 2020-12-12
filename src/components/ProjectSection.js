/** @jsxFrag React.Fragment */
/** @jsx jsx */
import React, { useState } from 'react'
import {jsx, css} from '@emotion/core'
import ProjectCard from './ProjectCard'
import Button from './Button'
import { axiosPostProject, axiosPutProject } from '../services/axios'

const cardContainer = css`
    display: flex;
    justify-content: top;
`
const floatRight = css`
    margin-left: auto;
    margin-top: 0px;
`
const addProject = css`
    display: float;
    height: 230px;
    background-color: #303050;
    border-radius: 15px;
    padding: 15px;
`
const promptCtr = css`
    width: 20%;
`
export default function ProjectSection({ projects, isOwner, signedIn, id, data, setData }) {
    const [editing, setEditing] = useState(false)

    const [name, setName] = useState('')
    const [summary, setSummary] = useState('')
    const [date, setDate] = useState('')
    const [link, setLink] = useState('')
    const [imgLink, setImgLink] = useState('')
    const [description, setDesc] = useState('')

    const [updating, setUpdating] = useState(false)
    const onEdit = (skl) => {
        setUpdating(skl)
        setEditing(true)
        setDesc(skl.description)
        setName(skl.name)
        setSummary(skl.summary)
        setDate(skl.date)
        setLink(skl.link)
        setImgLink(skl.imglink)
    }

    const onClick = async() => {
        if(!editing) setEditing(true)
        else if(updating) {
            setDesc('')
            let putInfo = {
                name,
                summary,
                date,
                link,
                imglink: imgLink,
                description,
                account_id: id,
                token: signedIn,
                id: updating.id
            }
            setEditing(false)
            setUpdating(false)
            await axiosPutProject(updating.id, putInfo).catch(console.error)
            setData(JSON.parse(JSON.stringify({ ...data, projects: data.projects.filter(p => p.id != updating.id).concat(putInfo)})))
        }
        else {
            let postInfo = {
                name,
                summary,
                date,
                link,
                imglink: imgLink,
                description,
                account_id: id,
                token: signedIn
            }
            setEditing(false)
            await axiosPostProject(postInfo).catch(console.error)
            setData(JSON.parse(JSON.stringify({ ...data, projects: data.projects.concat(postInfo)})))
        }
    }
    
    return(
        <>
            <div css={cardContainer}>
                <h2>Projects</h2>
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
                <div css={addProject}>
                    <div css={promptCtr}>
                        <ul>
                            <li>Project Name</li>
                            <li>Quick Summary</li>
                            <li>Date</li>
                            <li>Full Description</li>
                            <li>Link to Project</li>
                            <li>Image Link</li>
                        </ul>
                    </div>
                    <input value={name} onChange={e => setName(e.target.value)}/>
                    <input value={summary} onChange={e => setSummary(e.target.value)}/>
                    <input value={date} onChange={e => setDate(e.target.value)}/>
                    <input value={description} onChange={e => setDesc(e.target.value)}/>
                    <input value={link} onChange={e => setLink(e.target.value)}/>
                    <input value={imgLink} onChange={e => setImgLink(e.target.value)}/>
                </div>
                </>
            )}
            <div css={cardContainer}>
                {projects.map(proj => 
                    <ProjectCard 
                        project={proj} 
                        isOwner={isOwner} 
                        signedIn={signedIn} 
                        data={data} 
                        setData={setData}
                        onEdit={onEdit}
                    />)}
            </div>
        </>
    )
}