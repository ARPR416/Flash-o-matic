import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";

import Home from "./Home";
import DeckStudy from "./Deck/DeckStudy";
import Deck from "./Deck/Deck";
import DeckCreate from "./Deck/DeckCreate";
import DeckEdit from "./Deck/DeckEdit";
import CardCreate from "./Card/CardCreate";
import CardEdit from "./Card/CardEdit";
import { BrowserRouter as Route, Switch } from "react-router-dom";

function Layout() {
  return (
    <div>
      
      <Header />
      <div className="container">
      <Switch>
        <Route exact={true} path="/">
          <Home />
        </Route>
        <Route path={'/decks/:deckId/study'}>
          <DeckStudy />
        </Route>
        <Route path={'/decks/new'}>
          <DeckCreate />
        </Route>
        <Route path={'/decks/:deckId/cards/:cardId/edit'}>
          <CardEdit />
        </Route>
        <Route path={'/decks/:deckId/cards/new'}>
          <CardCreate />
        </Route>
        <Route path={'/decks/:deckId/edit'}>
          <DeckEdit />
        </Route>
        <Route path={'/decks/:deckId'}>
          <Deck />
        </Route>
        
 
        <Route>
          <NotFound />
        </Route>
      </Switch>      
      </div>
    </div>
  );
}

export default Layout;
