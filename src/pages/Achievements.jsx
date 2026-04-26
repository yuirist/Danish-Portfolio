import React from 'react'
import './Achievement.css'
import ProjectCard from '../components/ProjectCard'
import DanishVolleyball from '../assets/danishvolleyball.jpg'
import GuitarDanish from '../assets/guitardanish.jpg'
import MusicDanish from '../assets/musicdanish.jpg'
import SulamDanish from '../assets/sulamdanish.jpg'
import FutsalDanish from '../assets/futsaldanish.jpg'
import BandDanish from '../assets/banddanish.jpg'

const Achievements = () => {
  // Manually define the project data
  const projectData = [
    {
      image_url: DanishVolleyball,
      project_name:
        'Sukan Antara Fakulti (SAF) Volleyball - Gold Medal Winner',
      description:
        'Appointed as the faculty team lead for the UTHM Inter-Faculty Sports Championship. Directed team strategy and managed group dynamics in a high-pressure competitive environment. This role sharpened my abilities in clear communication, conflict resolution, and collaborative goal-setting-skills I apply directly to agile software development and team-based technical projects.',
      tech_stack: ['Leadership', 'Teamwork', 'SAF', 'UTHM'],
    },
    {
      image_url: GuitarDanish,
      project_name: 'Team Leader & Lead Guitarist - Malam Citra Budaya',
      description:
        'Acted as Team Leader and Lead Guitarist for Malam Citra Budaya, leading a band performance by coordinating members, organizing and managing rehearsal schedules, and overseeing overall performance execution. Contributed to musical arrangement and stage presence, ensuring a cohesive and engaging performance, while demonstrating strong leadership, teamwork, communication, and live performance skills.',
      tech_stack: ['Leadership', 'Teamwork', 'Music', 'Performance'],
    },

    {
      image_url: MusicDanish,
      project_name: 'Team Leader - Musical Explorace at SK Bukit Rahman',
      description:
        'Led a team for Musical Explorace at SK Bukit Rahman, overseeing member coordination, delegating tasks, and managing end-to-end communication with school authorities to ensure clear alignment of objectives. Planned and organized activity flow, monitored team progress, and ensured smooth execution of the event, demonstrating strong leadership, organizational, and interpersonal skills while delivering an engaging and well-structured program.',
      tech_stack: ['Leadership', 'Event Management', 'Communication', 'Community'],
    },
    {
      image_url: SulamDanish,
      project_name: 'Committee Member - SULAM Program (Web Development)',
      description:
        'Served as a Committee Member for the SULAM Program at Universiti Tun Hussein Onn Malaysia, assisting in guiding primary school students to build basic websites using Wix. Facilitated structured, hands-on learning sessions, provided continuous technical support during activities, and simplified fundamental web design concepts to suit young learners. Contributed to planning and coordinating program activities, ensured smooth session flow, and fostered an engaging, supportive learning environment.',
      tech_stack: ['Web Development', 'Community Service', 'Mentorship', 'UTHM'],
    },
    {
      image_url: FutsalDanish,
      project_name:
        'Futsal Tournament Participant - Sekolah Dato’ Abdul Razak (SDAR)',
      description:
        'Represented a team as a participant in the Futsal Tournament at Sekolah Dato’ Abdul Razak (SDAR), contributing to overall team performance through effective coordination, clear on-field communication, and active gameplay. Demonstrated the ability to work collaboratively in a fast-paced and competitive environment, while maintaining discipline, adaptability, and strong sportsmanship throughout the tournament.',
      tech_stack: ['Teamwork', 'Sportsmanship', 'Agility', 'Coordination'],
    },
    {
      image_url: BandDanish,
      project_name:
        'Participant - Program Jom Masuk U/IPTA Zon Selatan (Busking Performance)',
      description:
        'Participated in Program Jom Masuk U/IPTA Zon Selatan (Latihan & Persembahan Busking), engaging in structured training sessions and live busking performances in a public setting. Actively contributed to group performances while developing musical performance skills, stage confidence, and audience engagement abilities. Gained valuable experience performing in front of diverse audiences, improving teamwork, adaptability, and real-world stage performance.',
      tech_stack: ['Performance', 'Public Engagement', 'Teamwork', 'Confidence'],
    },
  ]

  return (
    <div className="achievements" id="achievements">
      <h1 className="title achievement-title">Achievement Highlights</h1>
      <p className="projects-para">
        During my time at university, I've actively pursued involvement in
        various aspects of campus life. Academically, I've maintained a strong
        commitment to my studies, consistently striving to excel in my
        coursework and achieve second class upper honours. Simultaneously, I've
        also been highly engaged outside the classroom joining student clubs,
        organizations and extracurricular activities. My university years have
        been characterized by a balanced commitment to both academic excellence
        and active participation in extracurricular activities, fostering
        personal growth, and a well-rounded education.
      </p>
      <div className="projects-container">
        {projectData.map((project, id) => (
          <ProjectCard
            key={id}
            image={project.image_url}
            title={project.project_name}
            description={project.description}
            stacks={project.tech_stack}
          />
        ))}
      </div>
    </div>
  )
}

export default Achievements
