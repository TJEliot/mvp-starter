import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';

var leastSecure = <span id="leastSecure">Least Secure</span>;

var ourUser = prompt('What is your name?');

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
      }
    });
  }

  render () {
    var score = 0;
    for (var i = 0; i < this.state.items.length; i++) {
      console.log(this.state.items[i]['username']);
      if (this.state.items[i]['username'] === ourUser) {
        score = this.state.items[i]['balance'];
      }
    }
    var leastSecure = <span id="leastSecure">Least Secure</span>;
    var colorChanger = function() {
      var randomHue = Math.floor(Math.random() * 365);
      var randomColor2 = `hsl(${randomHue}, 100%, 80%)`
      var randomShade = `-1px -1px 0 ${randomColor2}, 1px -1px 0 ${randomColor2}, -1px 1px 0 ${randomColor2}, 1px 1px 0 ${randomColor2}`
      $("#leastSecure").css("transition", "text-shadow 1s ease")
      $("#leastSecure").css("text-shadow", randomShade);
    }
    window.setInterval(colorChanger, 1000);
    return (
    <div>
      <div id="ourTitle">
        <h1>Fake Internet Points</h1>
      </div>
      <h3 id="tagline">The {leastSecure} "Crypto" Currency</h3>
      <hr/>
      <h3>Welcome, {ourUser}</h3>
      <h3>You have {score} Fake Internet Points</h3>
      <input type="text" id="target" placeholder="Who do you want thank?"></input>
      <p> </p>
      <button id="sender">Express Gratitude</button>
      <hr/>
      <List items={this.state.items}/>
    </div>)
  }
}

//export default App;
ReactDOM.render(<App />, document.getElementById('app'));