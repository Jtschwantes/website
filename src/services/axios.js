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
export const axiosPostEducation = async(data) => {
    axios({
        method: 'POST',
        url: `${path}/jobs`,
        data: data
    })
}
export const axiosPutEducation = async(id, data) => {
    axios({
        method: 'PUT',
        url: `${path}/jobs/${id}`,
        data: data
    })
}
export const axiosDeleteEducation = async(id, data) => {
    axios({
        method: 'DELETE',
        url: `${path}/jobs/${id}`,
        data: data
    })
}