import React from 'react'
import Sidenavtyles from '../styles/Sidenav.module.css'
import ProfileImage from '../assets/Emmanuel_Idoko.jpg'
import Title from './Title'
import Fivebar from '../assets/fivebar.svg'
import Fourbar from '../assets/fourbar.svg'
import Threebar from '../assets/threebar.svg'

function Sidenav() {
    return (
        <div className={Sidenavtyles.sidenav}>
            <img className={Sidenavtyles.sidenav__image} src={ProfileImage} alt="profile icon" />
            <p className={Sidenavtyles.sidenav__name}><span style={{ fontWeight: '700' }}>EMMANUEL</span> IDOKO</p>
            <p className={Sidenavtyles.sidenav__role}>FRONTEND DEVELOPER AND DESIGNER</p>
            <div className={Sidenavtyles.sidenav__profile}>
                <Title name="PROFILE" />
                <p className={Sidenavtyles.sidenav_profile_text}>
                    🌇 I am a frontend developer with a specialization in JavaScript || React.
                    <br /><br />
                    📚 I have built several projects, taken part in hackathons and have interned as a frontend developer
                    <br /><br />
                    💻 I love building products and solutions with code, I am an active hacker and have participated in several <a href="https://devpost.com/pidoxy">hackathons</a> hope to work/intern at Netlify, Google, Microsoft, Apple, Netflix, Amazon and amazing startups in the nearest future
                    <br /><br />
                    🌿I love creating product designs, UI/UX designs
                    <br /><br />
                    🏔 In my free time I play the Keyboard, Violin, teach, play games and watch Cassidy Williams live stream
                    <br /><br />
                    💪🏽 I use Figma for UI/UX designs, I work mostly with React js and Javascript, Node, Express js, Github, SQL and API's...you would find me as Pidoxy on most platforms.                  </p>
            </div>

            <hr />
            <div>
                <Title name="CONTACT ME" />

                <p className={Sidenavtyles.contact__head}>PHONE NUMBER</p>
                <a className={Sidenavtyles.contact__body} href="tel:+2347067529758">+234 7067529758</a>
                <p className={Sidenavtyles.contact__head}>EMAIL ADDRESS</p>
                <a className={Sidenavtyles.contact__body} href="mailto:eemmanuel.idoko@gmail.com">eemmanuel.idoko@gmail.com</a>
                <p className={Sidenavtyles.contact__head}>ADDRESS</p>
                <a className={Sidenavtyles.contact__body} target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/Lagos/@6.5480357,3.1438663,11z/data=!3m1!4b1!4m5!3m4!1s0x103b8b2ae68280c1:0xdc9e87a367c3d9cb!8m2!3d6.5243793!4d3.3792057">Lagos, Nigeria</a>

            </div>

            <hr />

            <div>
                <Title name="PERSONAL SKILLS" />

                <div className={Sidenavtyles.skills}>
                    <p>Team work</p><img className={Sidenavtyles.skillbar} src={Fivebar} alt="skill bar indicator" />
                </div>
                <div className={Sidenavtyles.skills}>
                    <p>Communication</p><img className={Sidenavtyles.skillbar} src={Threebar} alt="skill bar indicator" />
                </div>
                <div className={Sidenavtyles.skills}>
                    <p>Creative</p><img className={Sidenavtyles.skillbar} src={Fourbar} alt="skill bar indicator" />
                </div>
                <div className={Sidenavtyles.skills}>
                    <p>Management</p><img className={Sidenavtyles.skillbar} src={Fourbar} alt="skill bar indicator" />
                </div>
            </div>
        </div>
    )
}

export default Sidenav
