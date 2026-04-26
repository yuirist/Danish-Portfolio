import React from 'react';
import './ProjectCard.css';

const ProjectCard = (props) => (
  <div className="project-card">
    {props.source_link ? (
      <>
        <a href={props.source_link} target="_blank" rel="noreferrer">
          <i className="fa-solid fa-arrow-right arrow" />
        </a>
        <i className="fa-regular fa-arrow-up-right" />
      </>
    ) : null}
    <img src={props.image} alt="" />
    <div className="card-description">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <div className="stacks">
        {
            props.stacks.map((stack, id) => (
              <button className="tech-stack" key={id}>
                {stack}
              </button>
            ))
          }
      </div>
    </div>
  </div>
);

export default ProjectCard;
