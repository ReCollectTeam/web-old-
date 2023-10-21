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
      tagLine: "Imagine a single, streamlined solution to organize and access all your bookmarks effortlessly",
      description: 'Sign up for the invite list now',
      mainActionText: 'Playstore',
      extraActionText: 'App Store',
      signupText: "Sign Up"
    },
    step1: {
      title: 'You Are What You Collect',
      heading: 'Curate Collections',
      description: 'Turn everyday moments into extraordinary inspiration. Save your favorite finds from social media in personalized collections.',
      img: Rectangle_3,
      alternate: false,
    },
    step2: {
      title: 'Do It With Friends',
      heading: 'Collaborate Seamlessly',
      description: "Girl's trip? Food adventure? Or simply just collecting memes? We got you! Collaborate with your friends and collectively shape your vision.",
      img: Rectangle_4,
      alternate: true,
    },
    step3: {
      title: 'Get Inspired',
      heading: "Discover More",
      description: "Check out what's trending in collections from the community and snag some inspo for your own album.",
      img: Rectangle_5,
      alternate: false,
    },
    bottomLead: {
      actionText: 'Join the Journey',
      // description: 'Available on your favourite store. Start your premium experience now.',
      description: "Got an awesome idea or want to help us build a great app? We'd love to hear from you. Sign up to become a UX research participant or share your feedback with us!",
      mainActionText: 'Playstore',
      extraActionText: 'App Store',
      signupText: "Join Research",
      secondaryText: "Share Ideas"
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
