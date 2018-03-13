import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {

    const Books = [
      {
        "title": "The Cosmic Perspective, 2nd edition",
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
    ];

    const TableRowHeader = ({ header }) => (
      <tr>
        <th>Cover</th>
        <th>Title</th>
        <th>Authors</th>
        <th>Publisher</th>
      </tr>
    )

    const TableRowX = ({ row }) => (
      <tr>
        <td key={row.cover}>{row.cover}</td>
        <td key={row.title}>{row.title}</td>
        <td key={row.authors}>{row.authors}</td>
        <td key={row.publisher}>{row.publisher}</td>
      </tr>
    )

    const TableX = ({ data }) => (
      <table>
        {data.map(row => {
          <TableRow row={row} />
        })}
      </table>
    )

    const products = [{
      name: "onion",
      price: ".99",
      id: 1
    }, {
      name: "pepper",
      price: "1.25",
      id: 2
    }, {
      name: "broccoli",
      price: "3.00",
      id: 3
    }];
    
    const TableRow = ({row}) => (
      <tr>
        <td key={row.name}>{row.name}</td>
        <td key={row.id}>{row.id}</td>
        <td key={row.price}>{row.price}</td>
      </tr>
    )
    
    const Table = ({data}) => (
      <table>
        {data.map(row => {
          <TableRow row={row} />
        })}
      </table>
    )


    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to the Library</h1>
          </header>
          <table>
            <tbody>
              <tr>
                <th>Cover</th>
                <th>Title</th>
                <th>Authors</th>
                <th>Publisher</th>
              </tr>
              <tr>
                <td><img src="http://www.webassign.net/bdsvastro/BDSVastr02_cover_sm.jpg" alt="Cover"></img></td>
                <td>The Cosmic Perspective, 2nd edition</td>
                <td>Bennett, Donahue, Schneider, Voit</td>
                <td>Pearson Education</td>
              </tr>
              <tr>
                <td><img src="http://www.webassign.net/chaastrot8/chaastrot8_cover_sm.jpg" alt="Cover"></img></td>
                <td>Astronomy Today, 8th edition</td>
                <td>Chaisson, McMillan</td>
                <td>Pearson Education</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
        <Table data={products} />          
        </div>
      </div>

    );

  }
}

export default App;
