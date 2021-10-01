import * as React from 'react'; // non-export default
import * as ReactDOM from 'react-dom';
import App from "./App" // export default


ReactDOM.render(
  <React.StrictMode>
		<App />
  </React.StrictMode>,
  document.getElementById('root')
)