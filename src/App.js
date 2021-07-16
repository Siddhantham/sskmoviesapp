import {BrowserRouter, Route, Switch} from 'react-router-dom'

import LogIn from './components/LogIn'

import HomePage from './components/HomePage'

import Popular from './components/popularPages'

import Account from './components/ProfileDetails'

import SearchIcon from './components/Search'

import SpecificMovie from './components/Specific'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/LogIn" component={LogIn} />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/popularMovies" component={Popular} />
      <Route exact path="/Search" component={SearchIcon} />
      <Route exact path="/Specific/:id" component={SpecificMovie} />
      <Route exact path="/ProfileDetails" component={Account} />
    </Switch>
  </BrowserRouter>
)

export default App
