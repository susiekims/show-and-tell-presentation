import React, { Component } from 'react';
import './App.css';
import Input from './Input';

class App extends Component {
  render() {
    let input1 = [
      {label: 'hover states'},
      {label: 'how to use sweet alerts js'},
      {label: 'lil bow wow basketball music video'},
      {label: 'pictures of feet'},
      {label: 'dug the pug nudes'},
      {label: 'todays special popeyes'},
      {label: 'react-autocomplete'}
    ]

    return (
      <div className="App">
      {/* --------------------------------------------------------- */}
       <section className="header">
        <img  className="google-logo" src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c51f.png" />
        <Input items={input1}/>
        <div className="fake-buttons">
          <button>Google Search</button>
          <button>I'm feeling lucky</button>
        </div>
       </section>

       <section className="content" id="content">

          <section className="intro page">
            <div className="wrapper">
              <h1>react-autocomplete</h1>
              <h2>Accessible, extensible, autocomplete for React.js.</h2>
              <a href="#what-is-it"><i className="fa fa-angle-down"></i></a>
            </div>
          </section>

          <section className="what-is-it page" id="what-is-it">
            <div className="wrapper">
              <h1>what is it?</h1>
              <ul>
                <li>WAI-ARIA compliant React autocomplete</li>
                <li>Renders a div with an input tag inside</li>
                <li>has built-in props to define its appearance and behavior </li>
                <a href="#how-to-get"><i className="fa fa-angle-down"></i></a>
              </ul>
            </div>
          </section>

          <section className="how-to-get page" id="how-to-get">
            <div className="wrapper">
              <h1>how to get it</h1>
              <h2> in your command line: </h2>
              <code>npm install --save react-autocomplete</code>
              <h2> or </h2>
              <code>yarn add react-autocomplete</code>
              <h2> then add: </h2>
              <code>import ReactAutocomplete from 'react-autocomplete';</code>
              <h2>now you're ready to go!</h2>
              <a href="#how-to-use"><i className="fa fa-angle-down"></i></a>
            </div>
          </section>

          <section className="how-to-use page" id="how-to-use">
            <div className="wrapper">
              <h1>how to use it</h1>
              <img src={require('./screenshot.png')} />
            </div>
          </section>


       </section>

      {/* --------------------------------------------------------- */}
      </div>
    );
  }
}

export default App;
