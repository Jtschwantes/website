
/** @jsxFrag React.Fragment */
/** @jsx jsx */
import React from 'react'
import {jsx, css} from '@emotion/core'
import SmallButton from './SmallButton'
import { axiosDeleteSkill } from '../services/axios'

const card = css`
    position: relative;
    width: 250px;
    height: 25px;
    padding: 5px;
    text-align: center;
    background-color: #383855;
    border-radius: 10px;
    margin: 2px;
`
const editBtns = css`
    position: absolute;
    display: float;
    bottom: 5px;
    right: -5px;
`

export default function SkillCard({ skill, isOwner, signedIn, data, setData }) {
    const del = async() => {
        await axiosDeleteSkill(skill.id, {token: signedIn, account_id: skill.account_id})
            .catch(console.error)
        setData(JSON.parse(JSON.stringify({ ...data, skills: data.skills.filter(skl => skl.id != skill.id)})))
    }
    
    return(
        <div css={card}>
            <span css={css`font-size: 12px; font-weight: bold;`}>{skill.description}</span>
            {isOwner && <div css={editBtns}><SmallButton text="E"/><SmallButton text="D" onClick={del}/></div>}
        </div>
    )
}