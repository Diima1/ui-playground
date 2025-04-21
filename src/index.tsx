import { render } from 'solid-js/web';
import './index.css';
import Button from './components/button';
import PinInput from './components/pinInput'
import Collapsible from './components/accordion';


const App = () => (
    <div class="main-containers">
      <div class="dark-container">
        <h1>Get Started</h1>
        <PinInput />
        <Button/>
      </div>
       <div class="lighter-container">
       <h1>FAQ</h1>
       <Collapsible />
       <Button/>
     </div>
   </div>
  );

render(() => <App />, document.getElementById('root')!);
