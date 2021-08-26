import React from 'react'

//  Components
import SectionTitle from '../../Component/SectionTitle'
import Story from '../../Component/Story'

//  React Router
import { useLocation } from 'react-router-dom'

function About() {
  const location = useLocation()
  return (
    <div>
      <SectionTitle path={location.pathname} />
      <Story />
    </div>
  )
}

export default About
