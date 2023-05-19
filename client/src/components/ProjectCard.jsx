/**
 * @file projectCard.jsx
 * @description this is jsx file for displaying the project within box in the home page for the users.
 * @author Tanoj kumar Innamuri
 */
import React from 'react';
import "./style.css";

const ProjectCard = ({ name, image }) => {
  return (
    <div className="project-box">
      <img className="project-image" src={image} alt={name} />
      <h2 className="project-title">{name}</h2>
    </div>
  );
};

export default ProjectCard;
