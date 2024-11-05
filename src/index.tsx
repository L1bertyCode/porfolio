import { createRoot } from 'react-dom/client';
import "./index.css";
import { Counter } from './features/Counter/Counter';


const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <div className='fz'>
    <Counter />
  </div>
);;