/* =======================================
   File: project.jsx
   Student: Sachin Kaushik
   StudentID: 301379467
   Date: 27-01-2024
======================================= */
import { Link } from 'react-router-dom';
import '../src/index.css';
import '../src/project.css';
import project1 from '../src/assets/project1.png';
import project2 from '../src/assets/project2.png';
import project3 from '../src/assets/project3.png';

export default function Project() {
  const projects = [
    { id: 1, title: 'Web-based Image Editor', image: project1, description: 'Image Editor is an online web app or tool used to manipulate or edit images', role: 'UI/UX Designer', outcome: 'Successfully designed a functional Web Application tool.' },
    { id: 2, title: 'Blog Website', image: project2, description: 'A blog website, in short, a weblog, a personal or business content published web page, is a digital way to spread the right news to the people.', role: 'Frontend Developer', outcome: 'Improved website performance.' },
    { id: 3, title: 'AI ChatBot System', image: project3, description: 'Artificial intelligence ChatBot, specifically AI Chatbots, is one of the innovations in modern technology, they communicate with humans through voices and text or both and are particularly useful for placing orders and answering general questions.', role: 'Full Stack Developer', outcome: 'Launched a successful Chatbot.' },
  ];

  return (
    <section id="projectSection">
      <h2 className="projectTitle">My Projects</h2>
      <span className="projectDesc">
      I am dedicated to delivering meticulous work with an eye for detail. My goal is to contribute my skills and expertise to assist businesses in reaching their objectives and establishing a robust online presence.
      <div style={{ marginBottom: '80px' }} />
      </span>
      <div className="projectList">
        {projects.map((project) => (
          <div key={project.id} className="projectItem">
            <img src={project.image} alt={project.title} className="projectImg" />
            <span className="projectTitle">{project.title}</span>
            <span className="projectDetails">
              <strong>{project.name}</strong>
              <p>{project.description}</p>
              <p><strong>Role:</strong> {project.role}</p>
              <p><strong>Outcome:</strong> {project.outcome}</p>
            </span>
          </div>
        ))}
      </div>
      <button className="Btn">See More</button>
      <div style={{ marginBottom: '80px' }} />
      <div className="gapAfterSeeMore"></div>
      <div style={{ marginBottom: '80px' }} />
    </section>
  );
}