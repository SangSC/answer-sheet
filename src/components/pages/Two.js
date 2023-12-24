import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { applyAndLog, filterNumbersGreaterThanFive } from "../utils";

const Two = () => {
  const [result, setResult] = useState("");

  const handleButtonClick = () => {
    const filteredNumbers = applyAndLog(
      filterNumbersGreaterThanFive,
      [2, 8, 4, 10, 1, 7]
    );
    setResult(filteredNumbers.toString()); // 将数组转换为字符串
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
            {`// 2. JavaScript: 陣列過濾
問題：寫一個JavaScript函式，接受一個數字陣列，並返回該陣列中所有大於5的數字。 

範例：

function filterNumbersGreaterThanFive(numbers) {
  // 實作你的解答
}

const numbers = [2, 8, 4, 10, 1, 7];
console.log(filterNumbersGreaterThanFive(numbers)); // 預期輸出: [8, 10, 7]

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
            {`function filterNumbersGreaterThanFive(numbers) {
  return numbers.filter((number) => number > 5);
}

const numbers = [2, 8, 4, 10, 1, 7];
console.log(filterNumbersGreaterThanFive(numbers)); // 預期輸出: [8, 10, 7]`}
          </SyntaxHighlighter>
        </div>
      </div>
      {/* bottom */}
      <div className="bottom">
        <button onClick={handleButtonClick}>Click Me</button>
        {/* 在這裡顯示結果，可以根據實際需要放置在不同的區域 */}
        <p id="result">{result}</p>
      </div>
    </section>
  );
};

export default Two;
