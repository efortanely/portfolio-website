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
            'Revitalized professional competencies through hands-on roles in food service, retail, and childcare; adeptly managed customer interactions, mastered sales strategies, and provided exceptional care to 15 toddlers',
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
                  'Led front-end development in a cross-functional effort for a feature empowering creators to seamlessly request access to external API endpoints, resulting in a 50% increase in web app functionality',
                  'Led the redesign and migration of legacy JavaScript code to TypeScript/React; developed and implemented a custom table component for enhanced search, sort, and filter capabilities of API endpoints, leading to a 30% reduction in load times',
                  'Spearheaded the creation of UI mock-ups in Figma and collaborated with designers to ensure alignment with Snap Design System standards'
                ]},
                {name: 'Spectacles Test Hub', 
                responsibilities: [
                  'Collaborated with a team of 3 engineers to launch a new high-impact Spectacles testing suite web app, utilizing JavaScript/React and Python/FastApi to integrate robust debugging tools, resulting in a 25% increase in developer productivity and streamlined testing procedures',
                  'Conceptualized and crafted UI mock-ups for 3 key pages with Figma, directing successful implementation by two engineers, resulting in improved functionality and visual appeal of the platform'
                ]},
                {name: 'Build Artifacts Dashboards', 
                responsibilities: [
                  'Developed Grafana and Looker dashboards using SQL and LookML for Spectacles\' build artifacts under the guidance of a senior engineer, enabling the team to optimize resource allocation, resulting in a 30% reduction in memory waste and increased operational efficiency',
                  'Integrated Python and Bash scripts into the build pipeline to capture and upload build artifact metrics to GCP BigQuery and Grafana Cloud, introducing real-time monitoring capabilities',
                  'Spearheaded enhancing internal API functionality using Python'
                ]}
              ]
            },
            {
              jobTitle: 'Software Engineer Intern',
              season: "Summer 2020",
              responsibilities: [
                'Engineered and deployed a robust Android CTS/VTS testing framework using a high-performance gRPC API and Go server infrastructure, utilizing a Google Cloud SQL database, and implementing a JavaScript/React web application to showcase comprehensive test results, enhancing overall test coverage by 20%',
                'Containerized and deployed back-end and front-end services using Docker and Kubernetes',
                'Delivered an engaging project presentation to organizational members, detailing project motivations, cutting-edge architectural designs, and the profound impact on engineering productivity'
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
                'Processed Intune log data from Excel into Power BI reports, improving data analysis and reporting'
              ]
            },
            {
              jobTitle: 'Software Engineer/Program Manager Intern',
              season: "Summer 2018",
              responsibilities: [
                'Developed a technical spec, obtained approval, and guided the creation of feature for implementation by colleague',
                'Utilized C# and TypeScript for implementation of telemetry reporting setting in Microsoft Edge, ensuring accuracy with integration and end-to-end testing'
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
            'Researched optimization algorithms in UT\'s Accelerated Research Initiative\'s Computational Materials stream, focusing on optimizing molecular geometry in alternative energy catalysts',
            'Implemented popular optimization techniques from academic papers using Python and NumPy',
            'Created visualizations of potential energy surfaces with Matplotlib to determine most effective algorithm and hyperparameter values'
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
