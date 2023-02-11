import SocialIcon from "../SocialIcon/SocialIcon";
import './Info.css';

export default function Info() {
    return (
        <div className='Info'>
            <h3 className='title'>About Me</h3>
            <div className='details'>
                <p>A <strong>software engineer</strong> with a 5+ year background in biomedical engineering and consulting with demonstrated competence in finding solutions to complex problems.</p>
                <p>Understands and can communicate technical information to a variety of individuals, developed through experiences in diverse collaborations. Continuously looks to improve, as shown by continuous re-iteration of technology and optimization of projects on a team and in personal life.</p>
            </div>
            <div className='socials'>
                <SocialIcon icon='linkedin' link='https://www.linkedin.com/in/michael-morgan-j41/' samePage={false}/>
                <SocialIcon icon='github' link='https://github.com/mmorganj41' samePage={false}/>
                <SocialIcon icon='file' link='/Resume_MichaelMorgan.pdf' samePage={false} />
                <SocialIcon icon='envelope' link='#contact' samePage={true}/>
            </div>
        </div>
    )
}