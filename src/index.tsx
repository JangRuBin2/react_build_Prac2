import React from 'react';
import ReactDOM from 'react-dom';

// App 컴포넌트 작성
const App = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
};

// App 컴포넌트를 실제 DOM에 렌더링
ReactDOM.render(<App />, document.getElementById('root'));
