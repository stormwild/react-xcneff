 import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <p>
          This heatmap shows how the project's repo is progressing. Everybox represents a calendar day and it's color shows whether the codebase grew or shrunk in size. <br /><br />

          The darker a blue tile is, the more code was added to the repo on that day. <br /><br />
          Similarily, the darker a red tile is, the more code was removed from the repo on that day.  <br /><br />

          Gray tiles represent days when no work was done.
  </p>
        <div class="card-deck">
          <div class="card added added-50"></div>
          <div class="card removed removed-20"></div>
          <div class="card added added-10"></div>
          <div class="card added added-70"></div>
          <div class="card removed removed-10"></div>
          <div class="card"></div>
          <div class="card"></div>
          <div class="card added added-20"></div>
          <div class="card removed removed-50"></div>
          <div class="card added added-20"></div>
          <div class="card removed removed-20"></div>
          <div class="card added added-20"></div>
          <div class="card"></div>
          <div class="card"></div>
          <div class="card added added-70"></div>
          <div class="card added added-50"></div>
          <div class="card added added-20"></div>
          <div class="card removed removed-20"></div>
          <div class="card added added-20"></div>
          <div class="card"></div>
          <div class="card"></div>
          <div class="card added added-50"></div>
          <div class="card added added-20"></div>
          <div class="card added added-10"></div>
          <div class="card removed removed-70"></div>
          <div class="card removed removed-50"></div>
          <div class="card removed removed-20"></div>
          <div class="card"></div>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
