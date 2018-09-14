import React, { Component } from 'react';
import './App.css';
import Input from './Input';

class App extends Component {
  render() {
    const input1 = [
      {label: 'hover states'},
      {label: 'how to use sweet alerts js'},
      {label: 'lil bow wow basketball music video'},
      {label: 'pictures of feet'},
      {label: 'what is a bens bagel'},
      {label: 'todays special popeyes'},
      {label: 'react-autocomplete'}
    ]

    const input2 = [
      {label: 'cohort 19 is so awesome'},
      {label: 'cohort 19 is so talented'},
      {label: 'cohort 19 is going to get amazing jobs and make lots of money'}
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
              <a className="scroll" href="#what-is-it"><i className="fa fa-angle-down"></i></a>
            </div>
          </section>

          <section className="what-is-it page" id="what-is-it">
            <div className="wrapper">
              <h1>what is it?</h1>
              <ul>
                <li>WAI-ARIA compliant React autocomplete</li>
                <li>Renders a div with an input tag inside</li>
                <li>has built-in props to define its appearance and behavior </li>
                <a className="scroll" href="#how-to-get"><i className="fa fa-angle-down"></i></a>
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
              <a className="scroll" href="#how-to-use"><i className="fa fa-angle-down"></i></a>
            </div>
          </section>

          <section className="how-to-use page" id="how-to-use">
            <div className="wrapper">
              <h2>how to use it</h2>
              <div className="container">
                <img className="screenshot" src={require('./screenshot.png')} />
              </div>
              <a className="scroll" href="#props"><i className="fa fa-angle-down"></i></a>
            </div>
          </section>

    
          <section className="props page" id="props">
            <div className="wrapper">
              <h1>built-in props</h1>
              <div className="clearfix">
                <img className="screenshot2" src={require('./screenshot2.png')} />
                <ul>
                  <li>
                      <h2>items:</h2>
                      <p>the items you want to generate in the dropdown</p>
                  </li>
                  <li>
                      <h2>shouldItemRender:</h2>
                      <p>function to decide what items should generate in the dropdown</p>
                  </li>
                  <li>
                      <h2>renderItem</h2>
                      <p>how you want the item in the dropdown to look like</p>
                  </li>
                </ul>
                <a className="scroll" href="#examples"><i className="fa fa-angle-down clearfix"></i></a>
              </div>
            </div>
          </section>

          <section className="examples" id="examples">
            <div className="wrapper">
              <h1>real world examples</h1>
              <a href="https://www.google.com/maps/">
                <img src="https://smhttp-ssl-73418.nexcesscdn.net/tech/en/wp-content/uploads/sites/2/2018/06/MAPS-APK.jpg" />
              </a>
              <a className="link" href="https://project5-3d96f.firebaseapp.com/">The Financial Report Card</a>
              <a className="scroll" href="#why"><i className="fa fa-angle-down"></i></a>
            </div>
          </section>

          <section className="why" id="why">
            <div className="wrapper">
              <h1>why you should use it</h1>
                <ul>
                  <li>Improves user experience</li>
                  <li>Modular and reusable</li>
                  <li>Minimizes user error (which means less error handling!)</li>
                </ul>
              <a className="scroll" href="#end"><i className="fa fa-angle-down"></i></a>
            </div>
          </section>

          <section className="end" id="end">
            <div className="wrapper">
              <img  className="google-logo" src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c51f.png" />
              <Input items={input2} name={"cohort"}/>
              <div className="fake-buttons">
                <button>Google Search</button>
                <button>I'm feeling lucky</button>
              </div>
            </div>
          </section>


       </section>

      {/* --------------------------------------------------------- */}
      </div>
    );
  }
}

export default App;
