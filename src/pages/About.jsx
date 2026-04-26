import React from 'react'
import './About.css'
import HTML from '../assets/html.png'
import Flutter from '../assets/flutter.png'
import VSCode from '../assets/vscode.png'
import Figma from '../assets/figma.png'
import GitLogo from '../assets/git.png'
import GitHublogo from '../assets/github.png'
import GMeet from '../assets/meet.png'
import Zoomlogo from '../assets/zoom.webp'
import Canva from '../assets/canva.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import MySql from '../assets/mysqll.png'
import Firebase from '../assets/firebase.png'
import Teams from '../assets/TEAMS.png'
import Android from '../assets/androidstudio.png'
import Drawio from '../assets/drawio.png'
import Discord from '../assets/discord.png'
import Kotlin from '../assets/Kotlin_Icon.svg.png'








const About = () => (
  <section className="about" id="about">
    <div className="about-me">
      <h2 className="title about-title">aBOUT mE</h2>
      <p className="paragraph about-para">
        A Computer Science (Web Technology) graduate from Universiti Tun Hussein
        Onn Malaysia (UTHM). I am passionate about Mobile App Development,
        UI/UX Design, Video Editing, and Content Creation, focusing on building
        seamless digital experiences and engaging visual narratives.
      </p>
    </div>
    <div className="about-skills">
      <h2 className="skill-title">Front-End</h2>
      <div className="skills">
        <div className="skill">
          <img src={JavaScript} alt="" />
          <p>JavaScript</p>
        </div>
        <div className="skill">
          <img src={HTML} alt="" />
          <p>HTML5</p>
        </div>
        <div className="skill">
          <img src={CSS} alt="" />
          <p>CSS3</p>
        </div>
      </div>
      <h2 className="skill-title">Back-End</h2>
      <div className="skills">
        <div className="skill">
          <img src={MySql} alt="" />
          <p>MySQL</p>
        </div>
        <div className="skill">
          <img src={Firebase} alt="" />
          <p>Firebase</p>
        </div>
      </div>
      <h2 className="skill-title">Mobile</h2>
      <div className="skills">
        <div className="skill">
          <img src={Flutter} alt="" />
          <p>Flutter</p>
        </div>
        <div className="skill">
          <img src={Kotlin} alt="" />
          <p>Kotlin</p>
        </div>
      </div>
      <h2 className="skill-title">Version Control & Deployment</h2>
      <div className="skills">
        <div className="skill">
          <img src={GitLogo} alt="" />
          <p>Git</p>
        </div>
        <div className="skill">
          <img src={GitHublogo} alt="" />
          <p>GitHub</p>
        </div>
      </div>
      <h2 className="skill-title">Tools</h2>
      <div className="skills">
        <div className="skill">
          <img src={VSCode} alt="" />
          <p>VS Code</p>
        </div>
        <div className="skill">
          <img src={Android} alt="" />
          <p>Android Studio</p>
        </div>
      </div>
      <h2 className="skill-title">Design</h2>
      <div className="skills">
        <div className="skill">
          <img src={Canva} alt="" />
          <p>Canva</p>
        </div>
        <div className="skill">
          <img src={Figma} alt="" />
          <p>Figma</p>
        </div>
        <div className="skill">
          <img src={Drawio} alt="" />
          <p>draw.io</p>
        </div>
      </div>
      <h2 className="skill-title">Communication</h2>
      <div className="skills">
      <div className="skill">
          <img src={Discord} alt="" />
          <p>Discord</p>
        </div>
        <div className="skill">
          <img src={Teams} alt="" />
          <p>Microsoft Teams</p>
        </div>
        <div className="skill">
          <img src={GMeet} alt="" />
          <p>Google Meet</p>
        </div>
        <div className="skill">
          <img src={Zoomlogo} alt="" />
          <p>Zoom</p>
        </div>
      </div>
      <h2 className="skill-title">Soft Skills</h2>
      <div className="skills">
        <p className="soft-skill">Critical Thinking</p>
        <p className="soft-skill">Communication</p>
        <p className="soft-skill">Teamwork</p>
        <p className="soft-skill">Collaboration</p>
        <p className="soft-skill">Creativity</p>

        <p className="soft-skill">Leadership</p>
        <p className="soft-skill">Problem Solving</p>
        <p className="soft-skill">Time Management</p>
        <p className="soft-skill">Emotional Intelligence</p>
        <p className="soft-skill">Adaptability</p>
      </div>
    </div>
  </section>
)

export default About
