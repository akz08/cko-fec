import React from 'react';
import './App.css';
import CommentForm from './components/CommentForm';
import CommentList from './components/CommentList';
import TrendGraph from './components/TrendGraph';

function App(): JSX.Element {
  return (
    <main>
      <section id="topSection">
        <h1>Customer Feedback</h1>
        <div id="topContainer">
          <CommentForm />
          <TrendGraph />
        </div>
      </section>
      <section id="bottomSection">
        <CommentList />
      </section>
    </main>
  );
}

export default App;
