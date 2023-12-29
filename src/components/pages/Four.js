import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Four = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginToggle = () => {
    setIsLoggedIn((prevIsLoggedIn) => !prevIsLoggedIn);
  };

  return (
    <section>
      <div className="division">
        {/* left.Question */}
        <div className="half left">
          <div className="title">
            <p>Question</p>
          </div>
          <SyntaxHighlighter
            showLineNumbers
            language="javascript"
            style={atomOneDark}
            customStyle={{
              padding: "25px",
              height: "350px",
            }}
          >
            {`// 4. React: 條件渲染
問題：在React中，如何根據條件渲染兩種不同的內容？

範例：

function ConditionalRendering({ isLoggedIn }) {
  // 實作你的條件渲染
}`}
          </SyntaxHighlighter>
        </div>
        {/* right.Answer */}
        <div className="half left">
          <div className="title">
            <p>Answer</p>
          </div>
          <SyntaxHighlighter
            showLineNumbers
            language="jsx"
            style={atomOneDark}
            customStyle={{
              padding: "25px",
              height: "350px",
            }}
          >
            {`import React from 'react';

function ConditionalRendering({ isLoggedIn }) {
  return (
    <div>
    {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
    </div>
  );
}

// <ConditionalRendering isLoggedIn={true} />  // is loggedIn
// or
// <ConditionalRendering isLoggedIn={false} /> // not loggedIn

`}
          </SyntaxHighlighter>
        </div>
      </div>
      {/* bottom */}
      <div className="bottom">
        {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
        <button onClick={handleLoginToggle}>
          {isLoggedIn ? "Logout" : "Login"}
        </button>{" "}
      </div>
    </section>
  );
};

export default Four;
