import React from 'react';
import snap from "../../assets/snap.svg";
import microsoft from "../../assets/microsoft.png"
import ut from "../../assets/ut.svg"
import michaels from "../../assets/michaels.png"
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { StyledWorkHistory } from './WorkHistory.styled';

const WorkHistory = ({ open, width }) => {
    const jobs = [
        {
          company: 'Michaels',
          logo: michaels,
          jobInfo: [
          {jobTitle: 'Part Time Framer',
          startDate: 'August 2023',
          endDate: 'Present',
          responsibilities: [
            'Created custom framing solutions',
            'Designed custom framing solutions for customer\'s artwork, managed orders in custom framing software, and made sales on POS system',
            'Maintained organization of shop including intaking customer order components, completing regular unloading, labelling, and storing of freight, and disposing of large boxes/cardboard and glass',
            'Used a variety of shop tools for production of framing projects using archival methods including cutting glass/mats in-house, affixing artwork to mats with variety of techniques, including float mounts and stitching artwork to mat, fitting of art/mats into frames, and finishing backings with paper and variety of hanging hardware'
          ]}]
        },
        {
          company: 'Snap Inc.',
          logo: snap,
          jobInfo: [
            {
              jobTitle: 'Software Engineer',
              startDate: 'February 2021',
              endDate: 'August 2022',
              responsibilities: [
                'Developed web apps and metrics dashboards for Snap Labs',
                'Worked cross-functionally on a web app that allows users to add custom API endpoints to their lenses. Used React/JavaScript to create a searchable, filterable, and sortable table of APIs. Designed initial Figma mock-ups for all pages in project',
                'Worked in a team of 4 to create an internal web app for debugging Spectacles builds in order to reduce overall debugging time for developers. Used React/JavaScript and FastApi/Python to develop automatic triager for build artifacts. Designed Figma mock-ups for multiple pages across site',
                'Worked as a solo developer to build dashboards that offered insights about memory usage in Spectacles’ build artifacts. Used Python/Bash to add script to build pipeline that uploaded memory usage information to GCP BigQuery and Grafana Cloud. Used SQL/LookML to build Grafana/Looker dashboards with tables and data visualizations'
              ]
            },
            {
              jobTitle: 'Software Engineer Intern',
              season: "Summer 2020",
              responsibilities: [
                'Designed and implemented an internal testing framework for Snap Labs',
                'Utilized Go and React/JavaScript to create a gRPC API, server, and web app'
              ]
            }
          ]
        },
        {
          company: 'Microsoft',
          logo: microsoft,
          jobInfo: [
            {
              jobTitle: 'Software Engineer Intern',
              season: 'Summer 2019',
              responsibilities: [
                'Generated visualizations for Intune',
                'Created Power BI reports from logs to improve data analysis and reporting'
              ]
            },
            {
              jobTitle: 'Software Engineer/Program Manager Intern',
              season: "Summer 2018",
              responsibilities: [
                'Added browser settings for Intune',
                'Created specs for Intune telemetry settings for the Microsoft Edge browser',
                'Used C# and TypeScript to support end-to-end integration of Intune telemetry settings into Edge browser'
              ]
            }
          ]
        },
        {
          company: 'The University of Texas at Austin',
          logo: ut,
          jobInfo: [
          {jobTitle: 'Computational Materials Researcher',
          season: 'Summer 2017',
          responsibilities: [
            'Developed and compared optimization algorithms for molecular structure of alternative energy catalysts',
            'Utilized Python and NumPy to implement algorithms from research papers and created visualizations of hyperparameter tuning'
          ]}]
        },
      ];

  return (
    <StyledWorkHistory open={open} width={width}>
      <h2>✨ Experience ✨</h2>
      <div className='jobs'>
      {jobs.map((job, index) => (
        <div key={index} className="work-item">
          <div className='work-item-logo'>
            <img src={job.logo} alt={`${job.company} Logo`} />
          </div>
          <div className="work-info">
            <h3>{job.company}</h3>
            {job.jobInfo.map((jobA, index) =>(
              <div className='job'>
                <h4>{jobA.jobTitle}</h4>
                <div className='date'>
                  <CalendarTodayIcon fontSize='20px'/>
                  <p>{jobA.season ? jobA.season : jobA.startDate + ' - ' + jobA.endDate}</p>
                </div>
                <ul>
                  {jobA.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
      </div>
    </StyledWorkHistory>
  );
}

export default WorkHistory;
