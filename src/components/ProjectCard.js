
/** @jsxFrag React.Fragment */
/** @jsx jsx */
import React from 'react'
import {jsx, css} from '@emotion/core'
import { formatDate } from '../services/utility'
import Button from './Button'
import { axiosDeleteProject } from '../services/axios'

const card = css`
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: #383855;
    border-radius: 10px;
    margin: 2px;
    width: 246px;
    height: 250px;
    transition: background-color 0.4s, color 0.4s, opacity 0.4s, padding-top 0.4s, height 0.4s;
    &:hover {
        background-color: #dd3333;
        color: #101020;
        padding-top: 40px;
        height: 210px;
    }
    &:hover img {
        opacity: 0;
    }
`
const txtCtr = css`
    margin: 10px 10px;
`
const picCtr = css`
    margin-top: auto;
    max-height: 150px;
    border-radius: 0px 0px 10px 10px;
`
const editBtns = css`
    position: absolute;
    display: float;
    bottom: 5px;
    right: -5px;
`

export default function ProjectCard({ project, isOwner, signedIn, data, setData }) {
    const del = async() => {
        await axiosDeleteProject(project.id, {token: signedIn, account_id: project.account_id})
            .catch(console.error)
        setData(JSON.parse(JSON.stringify({ ...data, projects: data.projects.filter(proj => proj.id != project.id)})))
    }
    
    return(
        <div css={card}>
            <div css={txtCtr}>
                <strong>{project.name}</strong><br/>
                {formatDate(project.date)}<br/>
                <span css={css`font-size: 12px;`}>{project.summary}</span>
            </div>
            <img css={picCtr} src={project.imgLink} alt="Project Image" width='200'/>
            {isOwner && <div css={editBtns}><Button edit text="Edit"/><Button del text="Delete" onClick={del}/></div>}
        </div>
    )
}