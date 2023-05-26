import "taro-ui/dist/style/index.scss";
import "./app.scss";
import React from 'react';

type AppProps = {
  children: React.ReactNode;
};

const App = ({ children }: AppProps) => {
  return children;
};

export default App;
