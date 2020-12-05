/** @jsxFrag React.Fragment */
/** @jsx jsx */
import React, { useReducer, useState, useEffect } from 'react'
import {jsx, css} from '@emotion/core'
import useAxios from 'axios-hooks'
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
  // Bad practice, don't judge:
  const [data, setData] = useState()
  const [{data: getData, loading, error}] = useAxios(`${path}/accountData/${id}`)
  const [{data: validate, loading: validateLoading, error: validateError}] = useAxios({
      url: `${path}/verify`,
      method: 'POST',
      data: {
          token: signedIn,
          account_id: id
        }
    })
  const isOwner = validate?.isOwner

  useEffect(() => {
    setData(getData)
  }, [getData])
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
      {data?.jobs && <JobSection 
        id={id} 
        signedIn={signedIn} 
        jobs={data.jobs}
        isOwner={isOwner}
      />}
      {data?.projects && <ProjectSection 
        id={id} 
        signedIn={signedIn} 
        projects={data.projects}
        isOwner={isOwner}
      />}
      {data?.skills && <SkillSection 
        id={id} 
        signedIn={signedIn} 
        skills={data.skills}
        isOwner={isOwner}
      />}
      {data && console.log(data)}
      {data?.educations && <EducationSection 
        id={id} 
        signedIn={signedIn} 
        educations={data.educations}
        isOwner={isOwner}
      />}
    </>
  )
}