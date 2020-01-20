import React from 'react';
import {Block} from "./Block";
import './App.css';

export function redirect() {
            window.location.href = "http://e-chat-com.eu-4.evennode.com/";
}

function App() {
    return (
        <div className="containers">
            <div className="containers__header">
                <img src="logo512.svg" alt="logo"/>
            </div>
            <div className="containers__top-container container">
                <Block classStyle="top-left" text={"Доверьтесь нам"}/>
                <Block classStyle="top-right" text={"Узнавайте"}/>
            </div>
            <div className="containers__middle" onClick={redirect}>
                <h1>E-Chat</h1>
            </div>
            <div className="containers__bottom-container container">
                <Block classStyle="bottom-left" text={"Меняйтесь"}/>
                <Block classStyle="bottom-right" text={"Будьте лучшим"}/>
            </div>
            <div className="containers__footer">
                © 2020  Oleksandr Kryvets
            </div>
        </div>
    );
}

export default App;
