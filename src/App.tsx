import React from 'react';
import './App.css';

function App(): JSX.Element {
  return (
    <main>
      <section id="topSection">
        <h1 style={{ fontSize: '40px' }}>Customer Feedback</h1>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap-reverse',
          }}
        >
          <div className="form-comment">
            <h2>Add Comment</h2>
            <label htmlFor="formName">Name</label>
            <input id="formName" type="text" />

            <label htmlFor="formEmail">Email</label>
            <input id="formEmail" type="email" />

            <label htmlFor="formRating">Rating</label>
            <div id="formRating">rating placeholder</div>

            <label htmlFor="formComment">Comment</label>
            <textarea id="formComment"></textarea>
            <button id="formSubmit">Add comment</button>
          </div>
          <div
            className="trend-graph-container"
            style={{
              backgroundColor: 'rgb(57, 63, 121)',
              flexGrow: 1,
              minWidth: '350px',
            }}
          >
            <h2>Product Trends</h2>
            {/* add graph here */}
          </div>
        </div>
      </section>
      <section id="bottomSection">
        <div className="comment-list">
          <h2>Latest Comments</h2>
          <div className="comment-container">
            {[...Array(10)].map((i) => (
              <div key={i} className="comment-content">
                <h3 style={{ margin: '5px 0' }}>Commenter Name</h3>
                <div>rating placeholder</div>
                <div>Lauren Ipsun Es Dolores Doris Day</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
