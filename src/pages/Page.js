/** @jsxFrag React.Fragment */
/** @jsx jsx */
import React from 'react'
import {jsx, css} from '@emotion/core'
import { useParams } from 'react-router-dom'
import useAxios from 'axios-hooks'
import ProjectCard from '../components/ProjectCard'
import EducationCard from '../components/EducationCard'
import SkillCard from '../components/SkillCard'
import JobCard from '../components/JobCard'
import Loading from './Loading'

const cardContainer = css`
    display: flex;
`
const floatRight = css`
    margin-left: auto;
    text-align: right;
`

export default function Page() {
  const path = `https://still-journey-39405.herokuapp.com`
  const url = window.location.href
  const id = url.split('/')[url.split('/').length - 1]
  const [{data, loading, error}] = useAxios(`${path}/accountData/${id}`)
  return(
    <>
      {loading && <Loading/>}
      {data?.account && (
        <>
            {console.log(data)}
            <div css={cardContainer}><h1 css={css`margin: 0px 0px 10px 0px;`}>{data.account.first} {data.account.last}</h1>
                <div css={floatRight}>
                    {data.account.phone}<br />
                    {data.account.email}
                </div>
            </div>
        </>
      )}
      {data?.jobs && (
          <>
            <h2>Employment History</h2>
            {data.jobs.map(job => <JobCard job={job}/>)}
          </>
      )}
      {data?.projects && (
          <>
            <h2>Projects</h2>
            <div css={cardContainer}>
                {data.projects.map(proj => <ProjectCard project={proj}/>)}
            </div>
          </>
        )
      }
      {data?.skills && (
          <>
        <h2>Skills</h2>
        <div css={cardContainer}>
           {data.skills.map(skill => <SkillCard skill={skill}/>)} 
        </div>
        </>
      )}
      {data?.educations && (
        <>
        <h2>Education</h2>
        {data.educations.map(educ => <EducationCard education={educ}/>)}
        </>
        )
      }
    </>
  )
}