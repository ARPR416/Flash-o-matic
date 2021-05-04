import React from "react";
import { Link } from "react-router-dom";
//import component
import DeckList from "./Deck/DeckList";


export default function Home(){
    return (
        <div>
            <div>
                <Link to="/decks/new" className="btn btn-secondary">Create Deck</Link>
            </div>
            <br />
            <DeckList />
        </div>
    );
}
