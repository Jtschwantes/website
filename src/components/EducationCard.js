
/** @jsxFrag React.Fragment */
/** @jsx jsx */
import React from 'react'
import {jsx, css} from '@emotion/core'
import { formatDate } from '../services/utility'
import Button from './Button'

const card = css`
    background-color: #383855;
    border-radius: 10px;
    margin: 5px;
    padding: 0px 10px;
    width: auto;
    height: 100px;
`

const editBtns = css`
    position: absolute
    top: 40px;
    left: 500px;
`

export default function EducationCard({ education, isOwner }) {
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
                <div css={editBtns}><Button text="Edit"/></div>
        </div>
    )
}