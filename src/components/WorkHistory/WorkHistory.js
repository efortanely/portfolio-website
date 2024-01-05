import React from 'react';
import snap from "../../assets/snap.svg";
import microsoft from "../../assets/microsoft.png"
import ut from "../../assets/ut.svg"
import careerBreak from "../../assets/career-break.svg"
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { StyledWorkHistory } from './WorkHistory.styled';

const WorkHistory = ({ open, width }) => {
    const jobs = [
        {
          company: 'Career Break',
          logo: careerBreak,
          jobInfo: [
          {
          startDate: 'September 2022',
          endDate: 'Present',
          responsibilities: [
            'Took a dedicated period for personal development and health reasons, including disability leave from a previous position',
            'Engaged in roles in food service, retail, and childcare during the break to maintain professional skills and adaptability',
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
              projects: [
                {name: 'My APIs', 
                responsibilities: [
                  'Led front-end development on a web app empowering creators to request access to external API endpoints within Lens Studio',
                  'Revamped and migrated prototype legacy code from JavaScript to TypeScript/React, introducing a custom table component, enabling searching, sorting, and filtering of API endpoints',
                  'Designed initial UI mock-ups using Figma, subsequently collaborating with designer to ensure alignment with the Snap Design System'
                ]},
                {name: 'Spectacles Test Hub', 
                responsibilities: [
                  'Built a Spectacles testing suite web app, boosting developer productivity by 25% through implementation of robust debugging tools',
                  'Utilized JavaScript/React and Python/FastApi to build web app, including an "automatic triager" page, offering seamless interaction with files from build artifacts',
                  'Designed UI mock-ups using Figma for multiple pages across the site'
                ]},
                {name: 'Build Artifacts Dashboards', 
                responsibilities: [
                  'Led development of dashboards for Spectacles\' build artifact insights, identifying redundant memory usage',
                  'Enhanced internal API functionality using Python, while integrating Python and Bash scripts into the build pipeline to capture and upload build artifact metrics to GCP BigQuery and Grafana Cloud',
                  'Constructed Grafana and Looker dashboards using SQL and LookML'
                ]}
              ]
            },
            {
              jobTitle: 'Software Engineer Intern',
              season: "Summer 2020",
              responsibilities: [
                'Designed and implemented a testing framework for Android CTS/VTS tests ran in Spectacles build pipeline',
                'Utilized Go to build a gRPC API and server with a Google Cloud SQL database, and JavaScript/React to create a web app displaying test results',
                'Leveraged Docker and Kubernetes for containerization, enabling deployment and execution of the back-end and front-end within Service Mesh'
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
            <img id={job.company.toLowerCase().split("").filter(char => !"\t\n ".includes(char) && !";:.,?!-'\"(){}".includes(char)).join("")} src={job.logo} alt={`${job.company} Logo`} />
          </div>
          <div className="work-info">
            <h3>{job.company}</h3>
            {job.jobInfo.map((jobA, index) =>(
              <div key={index} className='job'>
                {'jobTitle' in jobA ? <h4>{jobA.jobTitle}</h4> : <></>}
                <div className='date'>
                  <CalendarTodayIcon fontSize='20px'/>
                  <p>{jobA.season ? jobA.season : jobA.startDate + ' - ' + jobA.endDate}</p>
                </div>
                {'projects' in jobA ? (
                  jobA.projects.map((project, index) => (
                    <div key={index}>
                      <h5 id={index}>{project.name}</h5>
                      <ul>
                        {project.responsibilities.map((responsibility, index) => (
                          <li key={index}>{responsibility}</li>
                        ))}
                      </ul>
                    </div>
                  ))
                ) :
                  <ul>
                    {jobA.responsibilities.map((responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    ))}
                  </ul>
                }
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
