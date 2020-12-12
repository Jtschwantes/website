/** @jsxFrag React.Fragment */
/** @jsx jsx */
import React from 'react'
import {jsx, css} from '@emotion/core'
import JobCard from './JobCard'
import Button from './Button'

const cardContainer = css`
    display: flex;
    justify-content: top;
`
const floatRight = css`
    margin-left: auto;
    margin-top: 0px;
`

export default function JobSection({ jobs, isOwner }) {
    const [editing, setEditing] = useState(false)

    const [title, setTitle] = useState('')
    const [employer, setEmployer] = useState('')
    const [start, setStart] = useState('')
    const [end, setEnd] = useState('')
    const [description, setDesc] = useState('')

    const onClick = async(e) => {
        if(!editing) setEditing(true)
        else {
            let postInfo = {
                title,
                employer,
                startDate: start,
                endDate: end,
                description,
                account_id: id,
                token: signedIn
            }
            setEditing(false)
            await axiosPostEducation('POST', postInfo).catch(console.error)
            setData(JSON.parse(JSON.stringify({ ...data, educations: data.educations.concat(postInfo)})))
        }
    }
    return(
        <>
            <div css={cardContainer}>
                <h2>Employment History</h2>
                {isOwner &&  
                    <div css={floatRight} >
                        <Button text={editing?"Save":"Add"} onClick={onClick}/>
                        {console.log(editing)}
                    </div>
                }
            </div>
            {editing && (
                <>
                <strong>Please input the following information:</strong>
                <div css={addEducation}>
                    <div css={promptCtr}>
                        <ul>
                            <li>Job Title</li>
                            <li>Employer</li>
                            <li>Start Date</li>
                            <li>End Date</li>
                            <li>Description</li>
                        </ul>
                    </div>
                    <input onChange={e => setTitle(e.target.value)}/>
                    <input onChange={e => setEmployer(e.target.value)}/>
                    <input onChange={e => setStart(e.target.value)}/>
                    <input onChange={e => setEnd(e.target.value)}/>
                    <input onChange={e => setDesc(e.target.value)}/>
                </div>
                </>
            )}
            {jobs.map(job => <JobCard job={job} isOwner={isOwner} signedIn={signedIn} data={data} setData={setData}/>)}
        </>
    )
}