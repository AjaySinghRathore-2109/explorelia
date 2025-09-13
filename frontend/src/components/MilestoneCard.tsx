import React, { useEffect, useState } from 'react'
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import axios from 'axios'
import './MilestoneCard.css';

type MilestoneType = {
  title: string
  description: string
  progressPercent: number
}

const MilestoneCard: React.FC = () => {
  const [milestone, setMilestone] = useState<MilestoneType | null>(null)

  useEffect(() => {
    axios.get('/api/user/1/milestones').then(res => {
      console.log(res.data)
      setMilestone(res.data.current)
    })
  }, [])

  return (
    <section className="container milestone-section">
      <div className="card">
        <div className="badge">Sustainability</div>
        <h4 className="milestone-title">{milestone?.title ?? 'Loading…'}</h4>
        <p className="milestone-description">
          {milestone?.description ?? 'Fetching your progress…'}
        </p>
<div className="progress-bar-wrapper">
<div className="progress-bar-fill" style={{ width: `${milestone?.progressPercent ?? 0}%` }} />
        </div>
        <div className="milestone-button-container">
          <button className="btn">View Achievements</button>
        </div>
      </div>
    </section>
  )
}

export default MilestoneCard
