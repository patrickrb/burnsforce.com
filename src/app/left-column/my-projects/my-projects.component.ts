import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.less']
})
export class MyProjectsComponent implements OnInit {

  projects =
  {
    featured:
    {
      name: "3D Interactive Galaxy Map",
      shortTag: "A webgl rendering of the Elite Dangerous game universe",
      description: "Using MEAN Stack + Three.js to create a 3D online visualization of the universe for a game: Elite Dangerous. This project uses restful services to load data into the rendering. This project was written to learn more about writing custom shaders and particle system optimizations for Three.js",
      url: "https://galaxy.burnsforce.com",
      image: "assets/images/projects/galaxy.mp4",
      github: "https://github.com/patrickrb/edGalaxyMap"
    },
    other: [
      {
        name: "WebGL Flappy Bird",
        description: "I wrote this WebGL Flappy Bird Clone using Three.js and Angular.  I wanted to copy an existing game to challenge myself.  This game is still a Work In Progress.",
        url: "https://flappy.burnsforce.com",
        image: "assets/images/projects/flappy.png",
        github: "https://github.com/patrickrb/flappyBirdThreeJs"
      },
      {
        name: "Webgl Dice Roller",
        description: "MEAN + ThreeJS to create a webGL dice roller. Physi.js physics based dice roller.  Created this project to learn physics animations in webgl.",
        url: "https://dice.burnsforce.com",
        image: "assets/images/projects/dice.png",
        github: "https://github.com/patrickrb/webglDiceRoller"
      },
      {
        name: "Webgl Tornado",
        description: "A quick tornado simulation written with full MEAN stack and Three.js.  Users are able to control the number of cubes in the tornado as well as how fast the tornado spins. ",
        url: "https://tornado.burnsforce.com",
        image: "assets/images/projects/tornado.png",
        github: "https://github.com/patrickrb/threejsTornado"
      },
      {
        name: "Soundboardr.com",
        description: "Our app was a soundboarding application written in a full MEAN stack and Asterisk. The application allows you enter a friends phone number, your phone number, and a spoofed caller id. The application connects the prankster to the 'victim'. Once connected, the prankster can click on audio files within the application to play through the phone. When the call is completed, the audio can be saved, shared, and voted upon by other users on soundboardr.com",
        url: "https://soundboardr.com",
        image: "assets/images/projects/soundboardr.png",
        github: null
      },
      {
        name: "Social Jukebox",
        description: "Our app idea was to build a Social Jukebox where people could add songs and vote up or down songs in the queue. We thought this idea would be great for Bars, parties or even offices. We didn't win, but we learned a lot and had fun doing it.",
        url: null,
        image: "assets/images/projects/chausage.png",
        github: null
      },
      {
        name: "Moodify",
        description: "Moodify is a conversational mood ring. You set it to listen and then put it in the middle of the conversation. As you converse, moodify listens to the conversation and gives analysis on what's being said. Github: https://github.com/JaesChausages/moodify-frontend Tech Stack: Node Angular - via Ionic mobile web framework Mongo Cordova/Phonegap Speech to text plugin uClassify - Free machine learning web service",
        url: null,
        image: "assets/images/projects/moodify.png",
        github: null
      }
    ]
  }

  constructor() { }

  ngOnInit() {
  }

}
