import React from 'react'
import './Projects.css'
import ProjectCard from '../components/ProjectCard'
import orthoqImage from '../assets/orthoqqq.jpg'
import vintradeImage from '../assets/vintrade.jpg'
import yuiristImage from '../assets/yuirist.png'

const Projects = () => {
  // Manually define the project data
  const projectData = [
    {
      image_url: orthoqImage,
      project_name:
        'OrthoQ: Appointment Booking System for Orthopaedic Outpatient Clinic',
      description:
        'Developed a mobile application aimed at improving the efficiency of appointment management within the Orthopaedics Department. Designed a user-friendly and intuitive interface to ensure smooth navigation for patients, staff, and doctors. Implemented key functionalities including doctor selection, referral letter upload, and appointment tracking. Conducted comprehensive testing to ensure reliability, aiming to reduce patient waiting times and improve overall healthcare satisfaction.',
      tech_stack: ['Flutter', 'Firebase', 'Dart', 'UI/UX Design'],
      source_link: 'N/A',
    },
    {
      image_url: vintradeImage,
      project_name:
        'VINTRADE: Second-Hand Online Marketplace for UTHM Students',
      description:
        'Developed VINTRADE, a mobile-first Android application designed to promote sustainable trading practices and enhance student engagement through a personalized and discoverable shopping experience. Designed an intuitive and user-friendly interface tailored specifically to university students’ buying and selling behavior. Implemented core e-commerce functionalities including product listing, search and discovery, and secure data handling using the Flutter framework. Conducted thorough system testing to ensure an efficient, secure, and engaging platform for second-hand transactions within the campus community.',
      tech_stack: ['Flutter', 'Firebase', 'Mobile Development', 'UI/UX Design'],
      source_link: 'N/A',
    },

    {
      image_url: yuiristImage,
      project_name: 'Content Creator on YouTube: YUIRIST',
      description:
        'Ran a YouTube channel under the name "yuirist," creating and publishing fingerstyle guitar content featuring both indoor and outdoor performances. Produced original arrangements of popular songs, showcasing creativity and advanced guitar techniques, while also collaborating with vocalists to deliver engaging cover performances. Managed the full content creation process including planning, recording, editing, and uploading videos, while building audience engagement through consistent content and creative presentation.',
      tech_stack: [
        'Video Editing',
        'Audio Production',
        'Content Strategy',
        'Personal Branding',
      ],
      source_link: 'N/A',
    },
  ]

  return (
    <div className="projects" id="projects">
      <h1 className="title projects-title">Featured Projects</h1>
      <div className="projects-container">
        {projectData.map((project, id) => (
          <ProjectCard
            key={id}
            image={project.image_url}
            title={project.project_name}
            description={project.description}
            stacks={project.tech_stack}
            source_link={project.source_link}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects
