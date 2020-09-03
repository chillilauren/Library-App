import React from 'react';
import { Navbar } from './Components/Navbar';
import { BooksPage } from './Components/BooksPage';
import { MembersPage } from './Components/MembersPage';
// import headerImg from './CSS/Images/books.jpg';
import { BookDetailsPage } from './Components/BookDetailsPage';
import { MemberDetailsPage } from './Components/MemberDetailsPage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './CSS/App.scss';

function App() {
  return (
    <Router>
      <div className="header-img"></div>
      <Navbar />

      <Switch>
        {/* Home page */}
        <Route exact path="/">
          <div>
            <h1 className="intro">Welcome to the Library</h1>
          </div>
        </Route>

        {/* Books pages */}
        <Route path="/books/:id" >
          <BookDetailsPage />
        </Route>
        <Route path="/books">
          <BooksPage />
        </Route>

        {/* Members pages */}
        <Route path="/members/:id">
          <MemberDetailsPage />
        </Route>
        <Route path="/members">
          <MembersPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
