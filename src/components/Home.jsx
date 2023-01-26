import React from 'react'
// import { LoremIpsum} from 'react-lorem-ipsum';
import vg from "../assets/2.webp";
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from 'react-icons/ai'
import "../styles/Home.scss"


const Home = () => {
  return (
    <> 
    <div className='home' id='home'>
        <main>
            <h1>Veer</h1>
            <p>Solution to every problem</p>
        </main>
    </div>

    <div className="home2">
        <img src={vg} alt="Graphics"/>

        <div>
            <p> Lorem ipsum dolor sit 
                amet consectetur adipisicing elit. 
                Fugit ut voluptatibus corrupti dolores 
                blanditiis quo aperiam, modi dicta, at atque 
                eaque? Voluptate, fugit itaque.
            </p>
        </div>
    </div>

    <div className="home3" id='about'>
        <div>
            <h1>Who we are?</h1>
            <p>Lorem ipsum dolor, Pariatur delectus dolore cupiditate iure obcaecati placeat, beatae praesentium totam nam ipsum consectetur maxime. Dolor quo hic quidem asperiores fugit autem repellendus provident commodi vitae, magnam reiciendis alias voluptatibus sed dolore dignissimos obcaecati! Iure, totam sint incidunt facilis maiores nemo quod. Maxime, dicta quas vel et tempora excepturi accusantium ex aliquam reiciendis veniam eius distinctio doloremque delectus consequatur, minus nostrum. Repudiandae, in odit, deserunt nisi adipisci vitae ullam asperiores porro nesciunt dignissimos reprehenderit obcaecati magni nam alias, tempora dolorum veritatis dolores.</p>
        </div>
    </div>

    <div className="home4" id='brands'>
       <div>
        <h1>Brands</h1>
        
        <article>
            <div style={{animationDelay: "0.3s"}}>
                <AiFillGoogleCircle/>
                <p>Google</p>
            </div>

            <div style={{animationDelay: "0.5s"}}>
                <AiFillAmazonCircle/>
                <p>Amazon</p>
            </div>

            <div style={{animationDelay: "0.7s"}}>
                <AiFillYoutube/>
                <p>Youtube</p>
            </div>

            <div style={{animationDelay: "0.1s"}}>
                <AiFillInstagram/>
                <p>Instagram</p>
            </div>
        </article>
       </div> 
    </div>
    </>
  )
}

export default Home;

