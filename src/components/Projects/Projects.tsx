import './Projects.css';
import React, {forwardRef, useState} from "react";
import HighlightedProject from "../HighlightedProject/HighlightedProject";
import ProjectList from "../ProjectList/ProjectList";

const Projects = forwardRef<HTMLDivElement>((props, ref) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    function liftIndex(index:number) {
        setSelectedIndex(index);
        console.log(selectedIndex);
    }

    return (
        <section id='projects' className='Projects section secondary' ref={ref}>
            <div className="container">
                <h2 className="heading">
                    <div className="main">Projects</div>
                    <div className="secondary">Front-end and Back-end creativity with a focus on JS.</div>
                </h2> 
                <div className='data'>
                <ProjectList projects={projects} liftIndex={liftIndex}/>
                <HighlightedProject projects={projects} selectedIndex={selectedIndex} />
                </div>
            </div>
        </section>
    )
});

export default Projects;

export class ProjectInfo {
    name: string;
    summary: string;
    images: string[];
    bullets: string[]
    constructor(name: string, summary: string) {
        this.name = name;
        this.summary = summary;
        this.images = [];
        this.bullets = [];
    }
    addImages(...images: string[]) {
        for (let i=0; i< images.length; i++) {
            this.images.push(images[i])
        }
    }
    addBullets(...bullets: string[]) {
        for (let i=0; i< bullets.length; i++) {
            this.bullets.push(bullets[i])
        }
    }
}

const battleship = new ProjectInfo('Battleship', 'A browser-based game built in vanilla JS');
battleship.addBullets(
    'Produced an interactive user interface using HTML, Javascript, and CSS allowing one player to drag and drop ships and select squares to fire upon during battles against an AI opponent.',
    'Made the classic game of Battleship complete with sound effects and animations, and added a feature for tracking wins and losses for repeatable and enjoyable gameplay experience.'
);
battleship.addImages('battleship/PlayingSS.png', '/battleship/draggingSS.png', '/battleship/GameoverSS.png', );

const pokeCatcher = new ProjectInfo('PokeCatcher', 'A MERN-based online game');
pokeCatcher.addBullets(
    'Constructed a browser game utilizing JavaScript, by interfacing with public APIs and parsing JSON data to mimic traditional Pokemon battle mechanics.',
    'Leveraged MongoDB to store user and pokemon data, integrated with Node.JS, mongoose, and express for inter-player interactions.',
    'Created the full CRUD website application to pokemon training through battles and for tracking individual progression through saved levels, health, and move data using Google OAuth.'
);
pokeCatcher.addImages(
    '/pokeCatcher/BattleGame.png',
    '/pokeCatcher/Battle.png',
    '/pokeCatcher/All Pokemon.png',
    '/pokeCatcher/NewPokemon.png',
);

const ration = new ProjectInfo('Ration', 'A recipe and nutrition tracker built with Django');
ration.addBullets(
    'Implemented Git version control and agile development methodologies for software development, specifically a full stack web application using Python and Django.',
    'Devised functions to make REST API calls to perform CRUD operations on a Postgres database, and implemented image storage on AWS S3.',
    'Customized forms and data visualization capabilities using JQuery, ChartJS, and JavaScript to display daily meal nutrition information on a recipe website.',
    'Launched an intuitive and user-friendly recipe website for users to track nutrition and plan four daily meals, providing a solution for fitness enthusiasts.',
);

ration.addImages(
    '/ration/rationList.png',
    '/ration/Home.png',
    '/ration/NutritionTracker.png',
);

const progress = new ProjectInfo('Progress', 'A Competitive and Community-centric habit tracker');
progress.addBullets(
    'Drafted and programmed a 5+ page web-design system for users to track and develop skills every day based upon continual completion of repeating habits.',
    'Assembled over 35 components in react to construct the front-end ui, which, when interacted with, made RESTful API calls on the backend MongoDB server in a reactive and pleasant manner.',
    'Incorporated JWT and AWS S3 cloud for user authorization and photo storage respectively.',
);

progress.addImages(
    '/progress/habits.png',
    '/progress/profile.png',
    '/progress/tracker.png',
);

const projects = [progress, ration, pokeCatcher, battleship];