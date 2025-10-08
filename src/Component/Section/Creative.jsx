import React from 'react'
import "../Section/Creative.css"
import VideoBox from '../Videocard/Videocard'
import DashboardCard from '../Dashboard/DashboardCard.jsx'
import Footer from "../Footer/Footer.jsx"
const Creative = () => {
  return (
    <>
      <div className="creative-wrapper">
        <section className="Creative">
          <h2 className='creative-h2'>Number never lie...</h2>
          <p className="creative-p">Our clients generate an average between 20- 40% of their revenue from email.</p>
          <div className="row-video-card">
            <VideoBox
              link="https://www.pexels.com/download/video/1085656/"
              title="RGBA-Lights"
            />
            <VideoBox
              link="https://www.pexels.com/download/video/1085656/"
              title="RGBA-Lights"
            />
          </div>
          <div className="dashboard-card-row">
            <DashboardCard />
            <DashboardCard />
          </div>
          {/* Abhi ke lie bas */}
          <div className="dashboard-card-row">
            <DashboardCard />
            <DashboardCard />
          </div>
          <div className="dashboard-card-row">
            <DashboardCard />
            <DashboardCard />
          </div>
          <div className="dashboard-card-row">
            <DashboardCard />
            <DashboardCard />
          </div>
          <div className="dashboard-card-row">
            <DashboardCard />
            <DashboardCard />
          </div>
          {/* ends here abhi ke lie bas */}
        </section>
        <Footer data="Like what you see dont you ☺️"/>
      </div>
    </>
  )
}

export default Creative