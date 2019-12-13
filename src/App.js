import React from 'react';
import logo from './logo.svg';
import './App.css';
import Child, { SubChild1, ClassChild1 } from './components/child1'
import Api from './components/api'
import { thisExpression } from '@babel/types';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stateVar: 'this is state var 1'
    }
  }

  render() {
    const abc = 123;
    const data = [
      { key1: 'valuea1', key2: 'valuea2' },
      { key1: 'valueb1', key2: 'valueb2' },
      { key1: 'valuec1', key2: 'valuec2' }
    ]
    return (
      <div>
        {//binding
        }
        here is {abc}
        <p style={abc === 123 ? { 'color': 'red' } : { color: 'green' }}>this is para</p>

        <table>
          <thead>
            <tr>
              <th>1</th>
              <th>2</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((row, idx) => {
                return (
                  <tr key={idx}>
                    <td>{row.key1}</td>
                    <td>{row.key2}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <input type="text" value={this.state.stateVar} name="stateVar" onChange={(e) => { this.changeState(e) }} />

        <button onClick={() => this.updateValue()}>update</button>


        {this.state.stateVar}
        <hr />
        {
          abc === 234 ?
            <Header propName={this.state.stateVar} /> :
            <Child propName={abc} />
        }
        <hr />
        <Footer propName="propValue" />
        <ClassChild1 />

        <hr />

        <Api propName="propVal" />
      </div>
    )
  }
  updateValue = () => {
    let value = '';
    console.log(this.state.stateVar);
    if (this.state.stateVar === 'this is state var 1')
      value = 'new value';
    else
      value = 'this is state var 1';
    this.setState({ stateVar: value });
  }

  changeState = (e) => {
    let newState = this.state;
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }
}

function Header(props) {
  return (<div>this is header || {props.propName} <SubChild1 /></div>)
}

class Footer extends React.Component {

  render() {
    return (
      <div>
        this is footer || {this.props.propName}
      </div>
    )
  }
}

export default App;
