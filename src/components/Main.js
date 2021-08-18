import React from 'react'
import MainStyles from '../styles/Main.module.css'
import HeaderBox from './HeaderBox'
import Expert from '../assets/expert.svg'
import Intermediate from '../assets/intermediate.svg'
import Advanced from '../assets/advanced.svg'
import LinkedIn from '../assets/linkedin.svg'
import Github from '../assets/github.svg'
import Ingressive from '../assets/ingressive.png'

function Main() {

    const Header = ({ name }) => {
        return <h3 className={MainStyles.header}>{name}</h3>
    }

    const Date = ({ startDate, endDate }) => {
        return <p className={MainStyles.date}>{`${startDate} - ${endDate}`}</p>
    }

    const Links = () => {
        return (
            <div className={MainStyles.links}>
                <div >
                    <img style={{ paddingLeft: '0.2rem', paddingRight: '0.2rem' }} src={Github} alt="icon" /><a target="_blank" rel="noreferrer" href="https://github.com/pidoxy" >github.com/pidoxy</a>
                </div>
                <div >
                    <img style={{ paddingLeft: '0.2rem', paddingRight: '0.2rem' }} src={LinkedIn} alt="icon" /><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/emmanuelidoko/" >linkedin.com/in/emmanuelidoko/</a>
                </div>
                <div >
                    <span style={{ marginLeft: '0rem', marginBottom: '-0.1rem', marginRight: '0.2rem' }} className="iconify" data-icon="simple-icons:devpost"></span><a target="_blank" rel="noreferrer" href="https://devpost.com/pidoxy" >devpost.com/pidoxy</a>
                </div>
            </div>
        )
    }

    return (
        <div className={MainStyles.main}>
            <Links />

            <HeaderBox name="EDUCATION" />

            <Header name="University Of Lagos" />
            <Date startDate={2021} endDate={2025} />
            <p> BSc. Computer Science </p>

            <Header name="Apostolic Faith Secondary School" />
            <Date startDate={2012} endDate={2018} />

            <HeaderBox name="PROFESSIONAL SKILLS" />
            <div className={MainStyles.skills__container}>
                <div className={MainStyles.skills}>
                    <p>JAVASCRIPT</p><img className={MainStyles.skillbar} src={Expert} alt="skill bar indicator" />
                </div>
                <div className={MainStyles.skills}>
                    <p>REACT JS</p><img className={MainStyles.skillbar} src={Expert} alt="skill bar indicator" />
                </div>
                <div className={MainStyles.skills}>
                    <p>GITHUB</p><img className={MainStyles.skillbar} src={Expert} alt="skill bar indicator" />
                </div>
                <div className={MainStyles.skills}>
                    <p>HTML/CSS</p><img className={MainStyles.skillbar} src={Expert} alt="skill bar indicator" />
                </div>
                <div className={MainStyles.skills}>
                    <p>FIGMA</p><img className={MainStyles.skillbar} src={Advanced} alt="skill bar indicator" />
                </div>
                <div className={MainStyles.skills}>
                    <p>NEXT JS</p><img className={MainStyles.skillbar} src={Intermediate} alt="skill bar indicator" />
                </div>

                <div className={MainStyles.skills}>
                    <p>SQL</p><img className={MainStyles.skillbar} src={Advanced} alt="skill bar indicator" />
                </div>
            </div>

            <HeaderBox name="WORK EXPERIENCE" />

            <Header name="Ietech - Frontend developer intern" />
            <Date startDate={"May 2020"} endDate={"August 2020"} />

            <p style={{ marginBottom: '0.5rem' }}>Worked with javascript ejs templating, Consumed API endpoints, Implemented website designs into websites, Implemented Search Engine Optimization(SEO) in websites, Worked as a team player, Implemented subscribe email feature using php , Worked with mysql and mongodb databases, Worked with express js and node js in routing webpages, Used version control systems(git, GitHub)</p>
            <ul>
                <li><a target="_blank" rel="noreferrer" href="https://employee-profile-edit.netlify.app/">employee-profile-edit.netlify.app</a> </li>
                <li><a target="_blank" rel="noreferrer" href="https://super-nigerians-landing-page.netlify.app/">super-nigerians-landing-page.netlify.app</a></li>
                <li><a target="_blank" rel="noreferrer" href="https://employee-profile-edit.netlify.app/">employee-profile-edit.netlify.app</a> </li>
                <li><a target="_blank" rel="noreferrer" href="https://employer-contactus.netlify.app/">employer-contactus.netlify.app</a> </li>
                <li><a target="_blank" rel="noreferrer" href="https://rayviar-beauty-template-envato.netlify.app/">rayviar-beauty-template-envato.netlify.app </a></li>
                <li><a target="_blank" rel="noreferrer" href="https://about-page.netlify.app/">about-page.netlify.app </a></li>
            </ul>
            <Header name="Hng Internship - Frontend developer intern" />
            <Date startDate={"September 2018"} endDate={"March 2021"} />
            <ul>
                <li>Built template web pages</li>
                <li>Part of the team that built the company's website</li>
                <li>Used version control systems(git, GitHub)</li>
            </ul>
            <Header name="Apostolic Faith Church - Frontend developer (Volunteer)" />
            <Date startDate={"Februrary 2021"} endDate={"present"} />
            <p>Built a project using react and several other frameworks to solve a national issue the organisation is facing:

                <li style={{ paddingTop: '1rem' }}>The project is about making report submission nationwide easier, centralised, less volatile and more secure, session management, login logout, posting, getting, updating records are all implemented in this project.</li>
            </p>
            <div className={MainStyles.ingressive}>
                <p>cc:@Ingressive4good</p>
                <a target="_blank" rel="noreferrer" href="https://ingressive.org">
                    <img src={Ingressive} alt="Ingressive4good link" />
                </a>
            </div>
        </div>
    )
}

export default Main
