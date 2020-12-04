/** @jsxFrag React.Fragment */
/** @jsx jsx */
import React from 'react'
import {jsx, css} from '@emotion/core'
import Header from './components/Header'
import About from './pages/About'
import './App.css'
import Loading from './pages/Loading'
import Projects from './pages/Projects'
import HomePage from './pages/HomePage'
import Accounts from './pages/Page'
import useAxios from 'axios-hooks'
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
    // React.useEffect(() => {
    //     // Google api load
    //     const gapiScript = document.createElement('script')
    //     gapiScript.src = 'https://apis.google.com/js/platform.js'
    //     gapiScript.onload = () => {
    //         window.gapi.load('auth2', () => {
    //             window.gapi.auth2.init({
    //                 client_id: '723588652665-thkoe5eonaumrjabu495nj4ca2fs2q7u.apps.googleusercontent.com'
    //             })
    //             window.gapi.load('signin2', () => {
    //                 const params = {
    //                     theme: 'dark',
    //                     onsuccess: () => {console.log('Big Yay!')}
    //                 }
    //             })
    //         })
    //     }
    //     document.body.appendChild(gapiScript)
    // }, [])
    
    return (
      <Router>
        {loading && <Loading />}
        {data && (
        <>
          <Header />
          <div class="g-signin2" data-onsuccess="onSignIn"></div>
          <div css={separator}></div>
          <div css={pageContainer}>
            <Switch>
              <Route path="/about"><About /></Route>
              <Route path="/projects"><Projects projects={data}/></Route>
              <Route path="/:id"><Accounts/></Route>
              <Route path="/"><HomePage /></Route>
            </Switch>
          </div>
        </>
        )}
      </Router>
    );
}

