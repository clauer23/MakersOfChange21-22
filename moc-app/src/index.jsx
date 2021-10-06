import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import musicImage from "./imgs/Music/Template_Music_adobespark.jpeg"
import activityImage from "./imgs/Activity/Template_Act_adobespark.png"
import fdImage from "./imgs/F&D/Template_Food_adobespark.jpeg"


class Button extends React.Component{
    render(){
        return(
            <div className="button">
                <a><img src={this.props.src} alt={this.props.alt} /><h2>{this.props.text}</h2></a>
            </div>
            
        );
    }
}
class Main extends React.Component{
    render(){
        return (
            <div>
                <h1>Makers of Change 2021-2022</h1>
                <div className="grid">
                    <Button src={musicImage} alt="Music" text="Gabbie's Music Board"/>
                    <Button src={activityImage} alt="Activity" text="Gabbie's Activity Board"/>
                    <Button src={fdImage} alt="Food and Dance" text="Gabbie's Food and Dance Board"/>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Main/>,
    document.getElementById("root"),
);