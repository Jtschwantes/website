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
import ProjectSection from '../components/ProjectSection'
import EducationSection from '../components/EducationSection'
import SkillSection from '../components/SkillSection'
import JobSection from '../components/JobSection'
import Loading from './Loading'

const cardContainer = css`
    display: flex;
`
const floatRight = css`
    margin-left: auto;
    text-align: right;
`

export default function Page({ signedIn }) {
  const path = `https://still-journey-39405.herokuapp.com`
  const url = window.location.href
  const id = url.split('/')[url.split('/').length - 1]
  const [{data, loading, error}] = useAxios(`${path}/accountData/${id}`)
  const [{data: validate, loading: validateLoading, error: validateError}] = useAxios({
    url: `${path}/verify`,
    method: 'POST',
    data: {
        token: signedIn,
        account_id: id
    }
})
return(
    <>
      {loading && <Loading/>}
      {data?.account && (
          <>
            <div css={cardContainer}><h1 css={css`margin: 0px 0px 10px 0px;`}>{data.account.first} {data.account.last}</h1>
                <div css={floatRight}>
                    {data.account.phone}<br />
                    {data.account.email}
                </div>
            </div>
        </>
      )}
      {data?.jobs && <JobSection jobs={data.jobs}/>}
      {data?.projects && <ProjectSection projects={data.projects}/>}
      {data?.skills && <SkillSection skills={data.skills}/>}
      {data?.educations && <EducationCard educations={data.educations}/>}
    </>
  )
}