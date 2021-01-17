import { render } from 'react-dom';
import App from './components/App';

render(<App />, document.getElementById('root'));

if ((module as any).hot) {
  (module as any).hot.accept();
}
