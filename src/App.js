import './App.css';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Step from './components/Step';
import BottomLead from './components/BottomLead';
import Footer from './components/Footer';

import logo from "./assets/logo.png";
import Rectangle_3 from './assets/Rectangle_3.png';
import Rectangle_4 from './assets/Rectangle_4.png';
import Rectangle_5 from './assets/Rectangle_5.png';


function App() {
  const data = {
    hero:{
      appName: 'ReCollect',
      tagLine: "Capture the digital universe, make your world the ultimate content canvas.",
      description: 'Join the invite list now',
      mainActionText: 'Playstore',
      extraActionText: 'App Store',
      signupText: "Sign Up"
    },
    step1: {
      title: 'Create an account',
      heading: 'Create collections',
      description: 'An account is created with your email and a desired password',
      img: Rectangle_3,
      alternate: false,
    },
    step2: {
      title: 'Explore while shopping',
      heading: 'Collaborate on collections',
      description: 'Shop for your favorite meals or drinks and enjoy while doing it.',
      img: Rectangle_4,
      alternate: true,
    },
    step3: {
      title: 'Checkout',
      heading: "Save images from other Collections",
      description: "Discover the collections other people are creating and add photos to your album.",
      img: Rectangle_5,
      alternate: false,
    },
    bottomLead: {
      actionText: 'Download',
      // description: 'Available on your favourite store. Start your premium experience now.',
      description: "Sign up to be a UX research participant",
      mainActionText: 'Playstore',
      extraActionText: 'App Store',
      signupText: "Sign Up",
      secondaryText: "Feedback"
    },
  }
  return (
    // __________________________TODO: ____________________
    // Add Montserrat font to everything (body)
    
    <div className="box-border">
      <div className="flex flex-col">
        
        <Navbar logo={logo}/>
        <Header 
          appName={data.hero.appName}
          tagLine={data.hero.tagLine}
          description={data.hero.description}
          mainActionText={data.hero.mainActionText}
          extraActionText={data.hero.extraActionText}
          signupText={data.hero.signupText}
        />
        
        <div id="divider" className="rounded-full ring-2 ring-gray-200 lg:w-1/2 lg:mx-auto "></div>
        
        <div id="faq" className="pt-20 mb-20 text-3xl font-semibold text-center text-blue-800 lg:font-bold">How the app works </div>
        
        <Step
          title={data.step1.title}
          heading={data.step1.heading}
          description={data.step1.description}
          img={data.step1.img}
          alternate={data.step1.alternate}
          />
          <Step
          title={data.step2.title}
          heading={data.step2.heading}
          description={data.step2.description}
          img={data.step2.img}
          alternate={data.step2.alternate}
          />
          <Step
          title={data.step3.title}
          heading={data.step3.heading}
          description={data.step3.description}
          img={data.step3.img}
          alternate={data.step3.alternate}
          />
          <div style={{height: "5vw"}}/>
          
          <BottomLead 
            actionText={data.bottomLead.actionText}
            description={data.bottomLead.description}
            mainActionText={data.bottomLead.mainActionText}
            extraActionText={data.bottomLead.extraActionText}
            signupText={data.bottomLead.signupText}
            secondaryText={data.bottomLead.secondaryText}
          />

          <Footer logo={logo}/>
      </div>
    </div>
  );
}

export default App;
