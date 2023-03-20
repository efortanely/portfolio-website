import React from 'react';
import snap from "../../images/snap.svg";
import microsoft from "../../images/microsoft.png"
import ut from "../../images/ut.svg"
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { StyledWorkHistory } from './WorkHistory.styled';

const WorkHistory = ({ open, width }) => {
    const jobs = [
        {
          company: 'Snap Inc.',
          logo: snap,
          jobInfo: [
            {
              jobTitle: 'Software Engineer',
              startDate: 'February 2021',
              endDate: 'August 2022',
              responsibilities: [
                'Developed My APIs and automatic triaging web apps and metrics dashboards at Snap Labs',
                'Utilized UX design skills to make Figma web app mock-ups and implemented with React/JavaScript/CSS and Python',
                'Built Grafana and Looker dashboards using GCP, SQL, and Python'
              ]
            },
            {
              jobTitle: 'Software Engineer Intern',
              season: "Summer 2020",
              responsibilities: [
                'Designed and implemented an internal testing framework for Snap Labs',
                'Utilized Go and React/JavaScript/CSS to create a gRPC API, server, and web app'
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
              jobTitle: 'Explorer Intern',
              season: "Summer 2018",
              responsibilities: [
                'Added browser settings for Intune',
                'Created specs for Intune telemetry settings for the Microsoft Edge browser',
                'Utilized C# and TypeScript to support end-to-end integration of Intune telemetry settings into Edge browser'
              ]
            }
          ]
        },
        {
          company: 'The University of Texas at Austin',
          logo: ut,
          jobInfo: [
          {jobTitle: 'Accelerate Research Initiative Intern',
          season: 'Summer 2017',
          responsibilities: [
            'Developed and compared optimization algorithms for molecular structure of alternative energy catalysts',
            'Utilized Python and NumPy to implement algorithms from research papers and create visualizations of hyperparameter tuning'
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
