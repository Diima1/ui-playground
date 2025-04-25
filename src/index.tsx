import { render } from 'solid-js/web';
import { onMount } from 'solid-js';
import './index.css';
import Button from './components/button';
import { PinInput } from './components/pinInput'
import Collapsible from './components/accordion';
import { initScrollAnimations } from './gsap-setup';

const App = () => {
  onMount(() => {
    initScrollAnimations();
  });

  return (
    <div class="hero-section" id="hero-section">
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
    </div>
  );
};

render(() => <App />, document.getElementById('root')!);
