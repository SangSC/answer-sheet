import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { applyAndLog, reverseString } from "../utils";

const One = () => {
  const [result, setResult] = useState("");

  const handleButtonClick = () => {
    const reversedString = applyAndLog(reverseString, "Hello");
    setResult(reversedString);
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
            language="javascript"
            style={atomOneDark}
            customStyle={{
              padding: "25px",
              height: "350px",
            }}
          >
            {`// 1. JavaScript: 字串反轉

function reverseString(str) {
  // 實作你的解答	
}

console.log(reverseString("Hello")); // 預期輸出: "olleH”
`}
          </SyntaxHighlighter>
        </div>
        {/* right.Answer */}
        <div className="half left">
          <div className="title">
            <p>Answer</p>
          </div>
          <SyntaxHighlighter
            language="javascript"
            style={atomOneDark}
            customStyle={{
              padding: "25px",
              height: "350px",
            }}
          >
            {`function reverseString(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str[str.length - 1 - i];
  }
  return result;
}

console.log(reverseString("Hello")); // 預期輸出: "olleH”
`}
          </SyntaxHighlighter>
        </div>
      </div>
      {/* bottom */}
      <div>
        <button onClick={handleButtonClick}>Click Me</button>
        {/* 在這裡顯示結果，可以根據實際需要放置在不同的區域 */}
        <p id="result">{result}</p>
      </div>
    </section>
  );
};

export default One;
