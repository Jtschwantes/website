
/** @jsxFrag React.Fragment */
/** @jsx jsx */
import React, { useState } from 'react'
import {jsx, css} from '@emotion/core'
import { formatDate } from '../services/utility'
import Button from './Button'
import { axiosDeleteEducation } from '../services/axios'

const card = css`
    position: relative;
    background-color: #383855;
    border-radius: 10px;
    margin: 5px;
    padding: 0px 10px;
    width: auto;
    height: 100px;
`

const editBtns = css`
    position: absolute;
    display: float;
    bottom: 5px;
    right: -5px;
`

export default function EducationCard({ education, isOwner, signedIn, data, setData }) {
    const [editing, setEditing] = useState(false)
    const edit = () => {
        
    }

    const del = () => {
        await axiosDeleteEducation(education.id, {token: signedIn, account_id: education.account_id})
            .catch(console.error)
        setData(JSON.parse(JSON.stringify({ ...data, educations: data.educations.filter(educ => educ.id != education.id)})))
    }

    return(
        <div css={card}>
                <div css={css`display: flex;`}>
                    <strong>{education?.school}</strong>
                    <em css={css`margin-left: auto;`}>
                        {`${formatDate(education?.startdate)} - ${formatDate(education?.enddate)}`}
                    </em>
                    <br />
                </div>
                <em>{education?.type} - {education?.field}</em><br />
                <p>{education?.description}</p>
                {isOwner && <div css={editBtns}><Button text="Edit"/><Button text="Delete" onClick={del}/></div>}
        </div>
    )
}