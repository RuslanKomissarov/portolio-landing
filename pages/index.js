import Head from 'next/head'
import PCSA from '../public/PCSA.png';
import PCSSA from '../public/SSA.png';
import node from '../public/node.png';
import sut from '../public/sut.png';
import cisco from '../public/cisco.png';
import masterdata from '../public/masterdata.jpeg'
import customertimes from '../public/customertimes.jpg'
import Roadmap from './sections/Roadmap';
import AboutMe from './sections/AboutMe';
import { collegeBlock, pcsaBlock, pcssaBlock, nodeBlock } from './data/textBlocks';


export default function Home() {
  const roadmapElements = [{
    name: 'college',
    img: sut,
    modal: {
      header: collegeBlock.header,
      body: collegeBlock.body,
      img: [sut, cisco]
    }
  }, {
    name: 'pcsa',
    img: PCSA,
    modal: {
      header: pcsaBlock.header,
      body: pcsaBlock.body,
      img: [masterdata, PCSA]
    }
  }, {
    name: 'pcssa',
    img: PCSSA,
    modal: {
      header: pcssaBlock.header,
      body: pcssaBlock.body,
      img: [customertimes, PCSSA]
    }
  }, {
    name: 'node',
    img: node,
    modal: {
      header: nodeBlock.header,
      body: nodeBlock.body,
      img: [node]
    }
  }]

  return (
    <div>
      <Head>
        <title>Ruslan Komissarov Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-white px-10'>
        <AboutMe />
        <Roadmap header="Experience Roadmap" elements={roadmapElements}/>
      </main>
    </div>
  );
}
