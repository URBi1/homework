import logo from './logo.svg';
import './App.css';

function AboutUs() {
  return <p>This is an example of an about us page~</p>
}

function Nav() {
  return (
      <div id="nav">
          <span>Home</span>
          <span>About</span>
      </div>
  )
}

function LandingPage() {
  return <h1>Welcome!</h1>
}

function App() {
  let isUserLoggedIn = localStorage.getItem('loggedIn')
  let componentToDisplay = isUserLoggedIn ?
      <LandingPage /> :
      <AboutUs />

  return (
      <div className="app">
          <Nav />
          {componentToDisplay}
      </div>
  )
}

export default App;
