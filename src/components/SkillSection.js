/** @jsxFrag React.Fragment */
/** @jsx jsx */
import React, { useState } from 'react'
import {jsx, css} from '@emotion/core'
import SkillCard from './SkillCard'
import Button from './Button'
import '../stylesheets/ctr.css'
import { axiosPostSkill } from '../services/axios'

const cardContainer = css`
    display: flex;
    justify-content: top;
`
const floatRight = css`
    margin-left: auto;
    margin-top: 0px;
`
const addSkill = css`
    display: float;
    height: 50px;
    background-color: #303050;
    border-radius: 15px;
    padding: 15px;
`
const promptCtr = css`
    width: 20%;
`

export default function SkillSection({ skills, isOwner, signedIn, id, data, setData }) {
    const [editing, setEditing] = useState(false)

    const [description, setDesc] = useState('')

    const onClick = async(e) => {
        if(!editing) setEditing(true)
        else {
            let postInfo = {
                description,
                account_id: id,
                token: signedIn
            }
            setEditing(false)
            await axiosPostSkill(postInfo).catch(console.error)
            setData(JSON.parse(JSON.stringify({ ...data, skills: data.skills.concat(postInfo)})))
        }
    }
    
    return(
        <>
            <div css={cardContainer}>
                <h2>Skills</h2>
                {isOwner &&  
                    <div css={floatRight} >
                        {editing && <Button text='Cancel' onClick={()=>setEditing(false)}/>}
                        <Button add text={editing?"Save":"Add"} onClick={onClick}/>
                        {console.log(editing)}
                    </div>
                }
            </div>
            {editing && (
                <>
                <strong>Please input the following information:</strong>
                <div css={addSkill}>
                    <div css={promptCtr}>
                        <ul>
                            <li>Description</li>
                        </ul>
                    </div>
                    <input onChange={e => setDesc(e.target.value)}/>
                </div>
                </>
            )}
            <div css={cardContainer}>
            {skills.map(skill => <SkillCard skill={skill}isOwner={isOwner} signedIn={signedIn} data={data} setData={setData}/>)} 
            </div>
        </>
    )
}