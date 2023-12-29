import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Three = () => {
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
            {`// 3. JavaScript: 重構
問題：重構這段程式碼並說明原因

function formatName(firstName, lastName) {
  let formattedName = '';

  if (firstName) {
    formattedName += firstName;
  }

  if (lastName) {
    formattedName += ' ' + lastName;
  }

  return formattedName;
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
            language="javascript"
            style={atomOneDark}
            customStyle={{
              padding: "25px",
              height: "350px",
            }}
          >
            {`// 使用 Template literals 格式化名字
function formatName(firstName, lastName) {
  return \`\${firstName} \${lastName}\`;
}

// 變數的部分用 Template literals 比較容易看
      `}
          </SyntaxHighlighter>
        </div>
      </div>
    </section>
  );
};

export default Three;
