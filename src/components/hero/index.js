import React from 'react';

import
  {
    HeroContainer,
    HeroBg, 
    VideoBg, 
    HeroContent, 
    HeroItems,
    HeroH1,
    HeroP
  } from './HeroElement';
import { Button } from './../header/Button';
import 
  { 
    Jungle,
    City, 
    Balloons 
  } from './../../assets/index';

const Hero = () => {

  return  (
    <>
      <HeroContainer>
        <HeroBg>
          <VideoBg 
            src={
              Jungle,
              City,
              Balloons
            } 
            type='video/mp4' 
            autoPlay 
            loop 
            muted 
            playsInline
          />
        </HeroBg>
        <HeroContent>
          <HeroItems>
            <HeroH1>Unreal Destinations</HeroH1>
            <HeroP>Out of This World</HeroP>
            <Button 
              primary='true'
              big='true'
              round='true'
              to='trips'
            >
              Travel Now
            </Button>
          </HeroItems>
        </HeroContent>
      </HeroContainer>
    </>
  )
}

export default Hero;
