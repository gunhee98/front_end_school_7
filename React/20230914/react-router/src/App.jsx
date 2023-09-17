import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
function App() {
  return (
    <BrowserRouter>
      {/* 라우트를 감싸줍니다. */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/one" element={<One />} />
        <Route path="/two" element={<Two />} />
        <Route path="/three" element={<Three />} />
      </Routes>
    </BrowserRouter>
  );
}

function Index() {
  const [text, setText] = useState("안녕");
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onClick = (e) => {
    setText();
  };
  return (
    <>
      <h1>{text}</h1>
      <input type="text" value={text} onChange={onChange} />
      <button onClick={onClick}>클릭</button>
    </>
  );
}

function One() {
  return <h1>hello world1</h1>;
}

function Two() {
  return <h1>hello world2</h1>;
}

function Three() {
  return <h1>hello world3</h1>;
}

export default App;
