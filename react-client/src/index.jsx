import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';

var leastSecure = <span id="leastSecure">Least Secure</span>;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }

  componentDidMount() {
    // if (Object.keys(this.state.items).includes(username)) {
    //   console.log(`logged in as ${username}`);
    // } else {
    //   username = prompt(`That's not a valid username`);
    // }
    for (var i = 0; i < this.state.items.length; i++) {
      // console.log('--------------')
      // console.log(Object.keys(this.state.items[i]));
    };
    $.ajax({
      url: '/users', 
      success: (data) => {
        console.log('we have retrieved data');
        data.sort();
        this.setState({
          items: data
        })
        console.log(this.state.items);
      },
      error: (err) => {
        console.log('we did not retrieve from the database');
        //console.log('err', err);
      }
    });
  }


  render () {
    //var username = prompt('What is your name?');
    var username = "Thomas";
    var score = 0;
    for (var i = 0; i < this.state.items.length; i++) {
      if (this.state.items[i].hasOwnProperty(username)) {
        // score = this.state.items[i][username];
        score = (this.state.items[i][username]);
      }
    }
    var leastSecure = <span id="leastSecure">Least Secure</span>;
    var colorChanger = function() {
      var randomBlue = Math.floor(Math.random() * 120 + 120);
      var randomRed = Math.floor(Math.random() * 120 + 120);
      var randomGreen = Math.floor(Math.random() * 120 + 120);
      var randomColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
      var randomHue = Math.floor(Math.random() * 365);
      var randomColor2 = `hsl(${randomHue}, 100%, 80%)`
      console.log(randomColor);
      var randomShade = `-1px -1px 0 ${randomColor2}, 1px -1px 0 ${randomColor2}, -1px 1px 0 ${randomColor2}, 1px 1px 0 ${randomColor2}`
      console.log(randomShade);
      // $("#leastSecure").css("color", randomColor);
      $("#leastSecure").css("transition", "text-shadow 1s ease")
      $("#leastSecure").css("text-shadow", randomShade);
    }
    window.setInterval(colorChanger, 1000);
    return (<div>
      <h1>Fake Internet Points</h1>
      <h3 id="tagline">The {leastSecure} "Crypto" Currency</h3>
      <hr/>
      <h3>Welcome, {username}</h3>
      <h3>You have {score} Fake Internet Points</h3>
      <input type="text" id="target" placeholder="Who do you want thank?"></input>
      <button id="sender">Express Gratitude</button>
      <hr/>
      <List items={this.state.items}/>
    </div>)
  }
}

//export default App;
ReactDOM.render(<App />, document.getElementById('app'));