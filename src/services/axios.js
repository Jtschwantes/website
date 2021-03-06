import React from 'react'
import axios from 'axios'

const path = `https://still-journey-39405.herokuapp.com`

export const axiosPostEducation = async(data) => {
    axios({
        method: 'POST',
        url: `${path}/educations`,
        data: data
    })
}
export const axiosPutEducation = async(id, data) => {
    axios({
        method: 'PUT',
        url: `${path}/educations/${id}`,
        data: data
    })
}
export const axiosDeleteEducation = async(id, data) => {
    axios({
        method: 'DELETE',
        url: `${path}/educations/${id}`,
        data: data
    })
}
export const axiosPostJob = async(data) => {
    axios({
        method: 'POST',
        url: `${path}/jobs`,
        data: data
    })
}
export const axiosPutJob = async(id, data) => {
    axios({
        method: 'PUT',
        url: `${path}/jobs/${id}`,
        data: data
    })
}
export const axiosDeleteJob = async(id, data) => {
    axios({
        method: 'DELETE',
        url: `${path}/jobs/${id}`,
        data: data
    })
}
export const axiosPostSkill = async(data) => {
    axios({
        method: 'POST',
        url: `${path}/skills`,
        data: data
    })
}
export const axiosPutSkill = async(id, data) => {
    axios({
        method: 'PUT',
        url: `${path}/skills/${id}`,
        data: data
    })
}
export const axiosDeleteSkill = async(id, data) => {
    axios({
        method: 'DELETE',
        url: `${path}/skills/${id}`,
        data: data
    })
}
export const axiosPostProject = async(data) => {
    axios({
        method: 'POST',
        url: `${path}/projects`,
        data: data
    })
}
export const axiosPutProject = async(id, data) => {
    axios({
        method: 'PUT',
        url: `${path}/projects/${id}`,
        data: data
    })
}
export const axiosDeleteProject = async(id, data) => {
    axios({
        method: 'DELETE',
        url: `${path}/projects/${id}`,
        data: data
    })
}
export const axiosPostAccount = async(data) => {
    axios({
        method: 'POST',
        url: `${path}/accounts`,
        data: data
    })
}
export const axiosPutAccount = async(id, data) => {
    axios({
        method: 'PUT',
        url: `${path}/accounts/${id}`,
        data: data
    })
}