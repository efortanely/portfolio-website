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
          startDate: 'Sept 2022',
          endDate: 'Present',
          responsibilities: [
            'Revitalized professional competencies through hands-on roles in food service, retail, and childcare; adeptly managed customer interactions, mastered sales strategies, and provided exceptional care to 15 toddlers',
          ]}]
        },
        {
          company: 'Snap Inc.',
          logo: snap,
          jobInfo: [
            {
              jobTitle: 'Software Engineer',
              startDate: 'Feb 2021',
              endDate: 'Aug 2022',
                responsibilities: [
                  'Led front-end development for ‘My Lenses APIs Portal’ React web app by migrating legacy JavaScript to TypeScript and implementing new components',
                  'Engineered a testing suite React web app from scratch, implementing debugging tools with JavaScript and Python/FastApi back-end routes',
                  'Created UI mock-ups for pages using Figma and directed their successful implementation, resulting in improved platform functionality and visual appeal',
                  'Built BI dashboards in Grafana and Looker using SQL and automated data uploads in the build pipeline with Python and Bash, enabling real-time monitoring of build artifacts',
                  'Enhanced internal Python API integrations with GCP BigQuery by adding functionality and resolving critical bugs'
                ]
            },
            {
              jobTitle: 'Software Engineer Intern',
              startDate: 'May 2020',
              endDate: 'Aug 2020',
              responsibilities: [
                'Developed a high-performance Android CTS/VTS testing framework with a gRPC API, Go server, Google Cloud SQL database, and a React web app using JavaScript',
                'Containerized and deployed back-end and front-end microservices using Docker and Kubernetes'
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
              startDate: 'May 2019',
              endDate: 'July 2019',
              responsibilities: [
                'Created Power BI reports from Excel-based Intune log data, improving data analysis and reporting'
              ]
            },
            {
              jobTitle: 'Software Engineer/Program Manager Intern',
              startDate: 'May 2018',
              endDate: 'Aug 2018',
              responsibilities: [
                'Developed and tested an Edge telemetry reporting setting using C# and TypeScript',
                'Wrote a technical spec and guided the creation of Edge feature'
              ]
            }
          ]
        },
        {
          company: 'The University of Texas at Austin',
          logo: ut,
          jobInfo: [
          {
            jobTitle: 'Student Researcher',
            startDate: 'June 2017',
            endDate: 'July 2017',
            responsibilities: [
            'Implemented popular optimization algorithms using Python and NumPy on molecular geometry structures and created visualizations of potential energy surfaces with Matplotlib'
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
                  <p>{jobA.startDate + ' - ' + jobA.endDate}</p>
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
