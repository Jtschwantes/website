/** @jsxFrag React.Fragment */
/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/core'
import breakfastImg from '../images/breakfast.jpg'
import dessertImg from '../images/dessert.jpg'
import snacksImg from '../images/snacks.jpg'
import dinnerImg from '../images/dinner.jpg'
import berriesImg from '../images/strawberries.jpg'
import { Link } from 'react-router-dom'

const link = css`
  text-decoration: none;
  color: #9999ff;
  &:hover {
      color: #ff0000;
  }
`
const gridCtr = css`
  display: grid;
  grid-template-columns: 350px 350px;
  grid-template-rows: 115px 115px 115px 115px 115px;
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  padding: 10px;
`

const gridItem = css`
  grid-row-start: span 2;
  border: 1px solid #000000;
  filter: grayscale(85%);
  opacity: 0.9;
  color: #ffffff;
  border-radius: 25px;
  padding: 20px;
  padding-top: 15px;
  font-size: 24px;
  text-align: center;
  transition: filter 0.4s, color 0.4s, padding-top 0.4s, font-size 0.4s, font-weight 0.4s;
  &:hover {
      filter: grayscale(0%);
      color: #ffffff;
      padding-top: 80px;
      font-size: 40px;
      font-weight: bold;
  } 
`

const gridItem2 = css`
  grid-column-start: span 2;
  border: 1px solid #000000;
  filter: grayscale(85%);
  opacity: 0.9;
  color: #ffffff;
  border-radius: 25px;
  padding: 15px;
  padding-top: 15px;
  font-size: 24px;
  text-align: center;
  transition: filter 0.4s, color 0.4s, padding-top 0.4s, font-size 0.4s, font-weight 0.4s;
  &:hover {
      filter: grayscale(0%);
      color: #ffffff;
      padding-top: 25px;
      font-size: 40px;
      font-weight: bold;
  } 
`

export default function Home() {
  return (
    <>
      <h1>My Favorite Recipes</h1>
      <div css={gridCtr}>
        <div css={gridItem2} style={{ backgroundImage: `url(${berriesImg})`, backgroundSize: `100% 100%` }}>
          Search
        </div>
        <div css={gridItem} style={{ backgroundImage: `url(${breakfastImg})`, backgroundSize: `100% 100%` }}>
          Breakfast
        </div>
        <div css={gridItem} style={{ backgroundImage: `url(${snacksImg})`, backgroundSize: `100% 100%` }}>
          Snacks
        </div>
        <div css={gridItem} style={{ backgroundImage: `url(${dinnerImg})`, backgroundSize: `100% 100%` }}>
          Dinner
        </div>
        <div css={gridItem} style={{ backgroundImage: `url(${dessertImg})`, backgroundSize: `100% 100%` }}>
          Dessert
        </div>
      </div>
    </>
  )
}