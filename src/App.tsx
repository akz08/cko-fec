import React from 'react';
import './App.css';
import CommentForm from './components/CommentForm';
import CommentList from './components/CommentList';
import TrendGraph from './components/TrendGraph';
import ProductTrendsProvider from './providers/ProductTrendsProvider';

function App(): JSX.Element {
  return (
    <main>
      <section id="topSection">
        <h1>Customer Feedback</h1>
        <div id="topContainer">
          <CommentForm />
          <ProductTrendsProvider>
            <TrendGraph />
          </ProductTrendsProvider>
        </div>
      </section>
      <section id="bottomSection">
        <CommentList />
      </section>
    </main>
  );
}

export default App;
