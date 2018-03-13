import React, { Component } from 'react';
import { StitchClientFactory } from "mongodb-stitch";
import logo from './logo.svg';
import './App.css';

// Set-up DB Connection
const stitchClientPromise = StitchClientFactory.create("library-tdzjk");

// Authenticate
stitchClientPromise.then(stitchClient => {

  // Authenticate anonymously and then begin to load data
  stitchClient.login().then(() => console.log('logged in as: ' + stitchClient.authedId()))
    .catch(e => console.log('error: ', e));

  // Alternatively Use the API Key to load data more securely
  //client.authenticate("apiKey", "HwAeD6Tg9sbQxWhdzGwWydlU3ATLrJ3hWT1E94NZV72coxgpjda6WFLlG7HvOUrv").then(() => generateReceipts(salesData));
});

// Get Books
function getBooks() {
  return stitchClientPromise.then(stitchClient =>
    stitchClient.executeFunction("getBooksBySubject")
  ).then(result => {
    console.log('success: ', result)
    console.log("In getBooks()");
    console.log(result);
    return result;
  })
    .catch(e => {
      console.log('error', e)
      return []
    });
}

//let Books = [];

/*let Books = [
  {
    "title": "XXX - The Cosmic Perspective, 2nd edition",
    "authors": [
      "Bennett",
      "Donahue",
      "Schneider",
      "Voit"
    ],
    "publisher": "Pearson Education",
    "cover_image": "http://www.webassign.net/bdsvastro/BDSVastr02_cover_sm.jpg"
  },
  {
    "title": "Astronomy Today, 8th edition",
    "authors": [
      "Chaisson ",
      "McMillan"
    ],
    "publisher": "Pearson Education",
    "cover_image": "http://www.webassign.net/chaastrot8/chaastrot8_cover_sm.jpg"
  },
  {
    "title": "Astronomy: A Beginner's Guide to the Universe, 5th edition",
    "authors": [
      "Chaisson ",
      "McMillan"
    ],
    "publisher": "Pearson Education",
    "cover_image": "http://www.webassign.net/bg/bg5_cover_sm.jpg"
  }
];*/

/*
 * Render main page
 */
let App = class extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      books:[]
    };
    console.log("In App constructor");
    console.log(this.state);
  }

  componentDidMount() {
    getBooks().then(books => {
      this.setState({books});
      console.log("In App componentDidMount");
      console.log(this.state.books);
    })
  }

  render() {

    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to the Library</h1>
          </header>
          <p></p>
        </div>
        <SearchInput />
        <p></p>
        <SearchResults results={this.state.books} />
      </div>

    );
  }
}

/* 
 * Search input component
 */
var SearchInput = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Capturing every key entry
  handleChange(event) {
    this.setState({ value: event.target.value });
    //alert('In handleChange: ' + event.target.value);
  }

  handleSubmit(event) {
    alert('A search was submitted: ' + this.state.value);
    SearchResults.setState((
      prevState, results) => {
      results: getBooks();
    });
    event.preventDefault(); // Prevent default submit
    alert('Exiting handleSubmit');;

  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Subject:
<input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>)
  }
}

var SearchResults = class extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      books:[]
    };
    console.log("In SearchResults constructor");
    console.log(this.state);
  }

  componentDidMount() {
    getBooks().then(books => {
      this.setState({books});
      console.log("In componentDidMount");
      console.log(this.state.books);
    })
  }

  render() {

    console.log("In SearchResults render()");
    console.log(this.state.books);
    let data = this.state.books;

    const Table = ({ data }) => (
      <table>
        <tbody>
          <tr>
            <th>Cover</th>
            <th>Title</th>
            <th>Authors</th>
            <th>Publisher</th>
          </tr>
          {data.map(row =>
            <tr key={row.title}>
              <td> <img src={row.cover_image} alt="Cover"></img></td>
              <td>{row.title}</td>
              <td>{row.authors.map(authors => authors + " ")}</td>
              <td>{row.publisher}</td>
            </tr>
          )}
        </tbody>
      </table>
    )

    return (
      <Table data={data} />
      //<Table/>
    );

  }
}

/*
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {props.name}</h1>;
  }
}*/

export default App;
