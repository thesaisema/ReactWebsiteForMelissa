import React from 'react';
import './Styles.css';

// Inserting images onto the website. 
function Home() {
    return(
        <>
            <h1>H O M E</h1>
            <div id = 'Textbox'>
                <p>
                To Melissa Beesa:
                I am so grateful to have you as my best friend. You mean the world to me! I hope you enjoy this project that I created specifically
                for you. Cheers to our cultural photoshoot. Cheers to our motherland! India + Tonga & Fiji to the world! 
                </p>
            </div>

            <div id = 'homecropped.jpg'>
                <img src = "./ImagesForReact/homecropped.jpg"></img>
            </div>
            <div id = 'home2.jpg'>
                <img src = "./ImagesForReact/home2.jpg"></img>
            </div>
        </>
    )
}

export default Home;