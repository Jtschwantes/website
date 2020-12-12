/** @jsxFrag React.Fragment */
/** @jsx jsx */
import React, { useState } from 'react'
import {jsx, css} from '@emotion/core'
import Header from './components/Header'
import About from './pages/About'
import './App.css'
import Loading from './pages/Loading'
import Projects from './pages/Projects'
import Project from './pages/Project'
import Profile from './pages/Profile'
import Home from './pages/Home'
import Page from './pages/Page'
import useAxios from 'axios-hooks'
import axios from 'axios'
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
    const [id, setId] = useState(false)

    axios({
        url: 'https://still-journey-39405.herokuapp.com/who',
        method: 'POST',
        data: {
            token: signedIn
        }
    }).then(data => setId(data.data.account_id)).catch(console.error)

    return (
      <Router>
        {loading && <Loading />}
        {data && (
        <>
          <Header signedIn={signedIn} setSignedIn={setSignedIn} id={id}/>
          <div css={separator}></div>
          <div css={pageContainer}>
            <Switch>
              <Route path="/about"><About /></Route>
              <Route path="/profiles/:id"><Profile/></Route>
              <Route path="/projects/:id"><Project/></Route>
              <Route path="/accounts/:id"><Page signedIn={signedIn}/></Route>
              <Route path="/"><Home /></Route>
            </Switch>
          </div>
        </>
        )}
      </Router>
    );
}

