import React, { Component } from 'react';
import FormInput from "./components/Form/FormInput";
import Form from "./components/Form/Form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Small questionnaire to start your web project
          </h1>
        </header>
        <main>
        <Form />
        <div>
          <h2>Thank you for completing this form!</h2>
          <p>This information is crucial to help me create the perfect design for you and your business.</p>
        </div>
        </main>
      </div>
    );
  }
}

export default App;
