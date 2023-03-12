import React from 'react';
import './WorkHistory.css'

function WorkHistory() {
    const jobs = [
        {
          company: 'ABC Company',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png',
          jobTitle: 'Senior Software Engineer',
          startDate: 'May 2017',
          endDate: 'Present',
          responsibilities: [
            'Developed and maintained company website using React and Node.js',
            'Managed a team of 5 developers and provided mentorship and guidance',
            'Created and managed project timelines and budgets',
            'Collaborated with cross-functional teams to deliver projects on-time and within scope',
            'Implemented various UX improvements resulting in a 20% increase in user engagement',
          ],
        },
        {
          company: 'XYZ Corporation',
          logo: 'https://brand.utexas.edu/wp-content/uploads/2017/05/Athletics_Bevo_Silhouette.svg',
          jobTitle: 'Software Engineer',
          startDate: 'Jan 2015',
          endDate: 'Apr 2017',
          responsibilities: [
            'Developed and maintained internal applications using AngularJS and ASP.NET',
            'Collaborated with stakeholders to gather and refine requirements',
            'Designed and implemented RESTful APIs for integration with external systems',
            'Implemented various performance optimizations resulting in a 30% decrease in page load times',
          ],
        },
      ];

  return (
    <div className="work-history">
      <h2>Work History</h2>
      {jobs.map((job, index) => (
        <div key={index} className="work-item">
          <div className='work-item-logo'>
            <img src={job.logo} alt={`${job.company} Logo`} />
          </div>
          <div className="work-info">
            <h3>{job.company}</h3>
            <p>{job.jobTitle}</p>
            <p>{job.startDate} - {job.endDate}</p>
            <ul>
              {job.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WorkHistory;
