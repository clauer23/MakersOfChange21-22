import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


function Button(props){
    return(
        <Link to={props.routeTo}>
            <div className="button">
                <img src={props.src} alt={props.text}/> <h2>Gabbie's {props.text} Board</h2>
            </div>
        </Link>
    );
}

function Home(props){
    return(
        <div>
            <h1>Makers of Change 2021-2022</h1>
            <div className="grid">
                {Object.values(props.data).map(item => {
                    return <Button src={item.src} text={item.text} routeTo={item.route} key={item.text}/>;
                })}
            </div>
        </div>
    );
}

function Board(props){
    return(
        <div>
            <h1>{props.data.text}</h1>
            <Link to="/">
                <div className="button">Back</div>
            </Link>
            
            <div className="grid">
                
                {Object.values(props.data.boards).map(item => {
                    return <Button src={item.src} text={item.text} routeTo={item.route} key={item.text}/>;
                })}
            </div>
        </div>
    );
}

function Main(props){
    let [error, setError] = useState(null);
    let [isLoaded, setLoaded] = useState(false);
    let [data, setData] = useState([]);

    useEffect(()=>{
        fetch("./data.json")
        .then(res => res.json())
        .then(
            (data) => {
                setLoaded(true);
                setData(data);
            },
            (error) => {
                setLoaded(true);
                setError(error);
            });
    });

    return(
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home data={data}/>
                </Route>

                {Object.entries(data).map(entry=>{
                    let [key, value] = entry;
                    return(

                        <Route exact path={value.route} key={key}>
                            <Board data={value}/>
                        </Route>

                    );
                })}
            </Switch>
        </Router>
    )
}


ReactDOM.render(
    <Main/>,
    document.getElementById("root"),
);