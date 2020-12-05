import React from 'react'
import axios from 'axios'

const path = `https://still-journey-39405.herokuapp.com`

export const axiosEducation = async(method, data) => {
    axios({
        method: method,
        url: `${path}/educations`,
        data: data
    })
}
// const axiosPostEducation = async(data) => {
//     axios({
//         method: 'POST',
//         url: `${path}/educations`,
//         data: data
//     })
// }
// const axiosPutEducation = async(data) => {
//     axios({
//         method: 'PUT',
//         url: `${path}/educations`,
//         data: data
//     })
// }
// const axiosDeleteEducation = async(data) => {
//     axios({
//         method: 'DELETE',
//         url: `${path}/educations`,
//         data: data
//     })
// }