/** @jsxFrag React.Fragment */
/** @jsx jsx */
import React, { useEffect, useState } from 'react'
import {jsx, css} from '@emotion/core'
import Header from './components/Header'
import About from './pages/About'
import './App.css'
import Loading from './pages/Loading'
import Projects from './pages/Projects'
import InfiniteScroll from './components/InfiniteScroll'
import Project from './pages/Project'
import Profile from './pages/Profile'
import Home from './pages/Home'
import Page from './pages/Page'
import Food from './pages/Food'
import useAxios from 'axios-hooks'
import axios from 'axios'
import { axiosPostAccount } from './services/axios'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


const pageContainer = css`
  max-width: 750px;
  min-width: 750px;
  margin: auto;
  padding: 0px 60px;
`
const separator = css`
  height: 30px;
`

export default function App() {
    const [{data, loading, error}] = useAxios('https://still-journey-39405.herokuapp.com/projects');
    const [signedIn, setSignedIn] = useState(false);
    const [info, setInfo] = useState(false)
    const [id, setId] = useState(false)

    useEffect(() => {
    axios({
        url: 'https://still-journey-39405.herokuapp.com/who',
        method: 'POST',
        data: {
            token: signedIn
        }
    }).then(data => {
        if(data.data.account_id) {
            setId(data.data.account_id)
            console.log(data.data.account_id)
        }
        else axiosPostAccount({
            token: signedIn,
            first: info.profileObj.givenName,
            last: info.profileObj.familyName,
            gid: info.profileObj.googleId
        })
    }).catch(console.error)
    }, [signedIn])
    

    return (
      <Router>
        {loading && <Loading />}
        {data && (
        <>
          <Header signedIn={signedIn} setSignedIn={setSignedIn} setInfo={setInfo} id={id}/>
          <div css={separator}></div>
          <div css={pageContainer}>
            <Switch>
              <Route path="/about"><About /></Route>
              <Route path="/profiles/:id"><Profile signedIn={signedIn}/></Route>
              <Route path="/projects/:id"><Project/></Route>
              <Route path="/accounts/:id"><Page signedIn={signedIn}/></Route>
              <Route path="/food"><Food/></Route>
              <Route path="/test"><InfiniteScroll/></Route>
              <Route path="/"><Home /></Route>
            </Switch>
          </div>
        </>
        )}
      </Router>
    );
}

