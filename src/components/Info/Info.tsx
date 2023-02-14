import SocialIcon from "../SocialIcon/SocialIcon";
import './Info.css';

export default function Info() {
    return (
        <div className='Info'>
            <h3 className='title'>About Me</h3>
            
            <div className='details'>
                <p>Hello there! I'm a fullstack <strong>software engineer</strong> with a 5+ year history in biomedical engineering and consulting, and a passion for learning, growing, and problem solving.</p>
                <p>I probably code a bit too much, but outside of that I'm a fan of nutrition, fitness, music (guitar and piano), reading, and social outreach. I enjoy volunteering regularly.</p>
                <p>I'm a very regimented person, and will accomplish anything I decide to put my mind to. Let's work together to learn and achieve great things!</p>
            </div>
            <div className='photo'>
                <img src='https://i.imgur.com/I2jrKKp.jpg' />
            </div>
            <div className='socials'>
                <SocialIcon icon='linkedin' link='https://www.linkedin.com/in/michael-morgan-j41/' samePage={false} popup='LinkedIn'/>
                <SocialIcon icon='github' link='https://github.com/mmorganj41' samePage={false} popup='Github'/>
                <SocialIcon icon='file' link='/portfolio-MM/Resume_MichaelMorgan.pdf' samePage={false} popup='Resume'/>
                <SocialIcon icon='envelope' link='#contact' samePage={true} popup='Contact'/>
            </div>
        </div>
    )
}