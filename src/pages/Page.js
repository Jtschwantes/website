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

const cardContainer = css`
    display: flex;
`

export default function Page() {
  const path = `https://still-journey-39405.herokuapp.com`
  var {id} = useParams(id)
  const [{data: projectData, loading: projectLoading, error: projectError}] = useAxios(`${path}/projects`)
  const [{data: educationData, loading: educationLoading, error: educationError}] = useAxios(`${path}/educations`)
  const [{data: skillData, loading: skillLoading, error: skillError}] = useAxios(`${path}/skills`)
  const [{data: jobData, loading: jobLoading, error: jobError}] = useAxios(`${path}/jobs`)
  return(
    <>
      <h1 css={css`margin: 0px;`}>Jakeypoo Jakeypooson</h1>
      <p css={css`margin: 0px;`}>655-655-6555</p>
      {jobData && (
          <>
            <h2>Employment History</h2>
            {jobData.map(job => <JobCard job={job}/>)}
          </>
      )}
      {projectData && (
          <>
            <h2>Projects</h2>
            <div css={cardContainer}>
                {projectData.map(proj => <ProjectCard project={proj}/>)}
            </div>
          </>
        )
      }
      {skillData && (
          <>
        <h2>Skills</h2>
        <div css={cardContainer}>
           {skillData.map(skill => <SkillCard skill={skill}/>)} 
        </div>
        </>
      )}
      {educationData && (
        <>
        <h2>Education</h2>
        {educationData.map(educ => <EducationCard education={educ}/>)}
        </>
        )
      }
    </>
  )
}