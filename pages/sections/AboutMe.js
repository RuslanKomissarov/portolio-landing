import Header from '../components/Header';
import TextBlockWithHeader from '../components/TextBlockWithHeader';
import LinkBar from '../components/LinkBar';
import Avatar from '../components/Avatar';
import {AiFillLinkedin, AiFillInstagram, AiFillGithub} from 'react-icons/ai';
import avatar from '../../public/avatar.png';
import { aboutMeBlock } from '../data/textBlocks';

const AboutMe = () => {
    const socialMediaLinks = [{
        name: "github",
        href: "#",
        element: <AiFillGithub/>,
      }, {
        name: "linkedin",
        href: "#",
        element: <AiFillLinkedin/>,
      }, {
        name: "instagram",
        href: "#",
        element: <AiFillInstagram/>,
      }];

    return(
        <section className='h-screen'>
          <Header />
          <TextBlockWithHeader 
            header={aboutMeBlock.header}
            subheader={aboutMeBlock.subheader}
            mainText={aboutMeBlock.body}/>
          <LinkBar links={socialMediaLinks} />
          <Avatar src={avatar} />
        </section>
    )
}

export default AboutMe;