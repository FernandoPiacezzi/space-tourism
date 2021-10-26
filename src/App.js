import { DefaultTemplate } from './Components/DefaultTemplate';
import { Routers } from './routers';
import './styles/global.css';

function App() {
  return (
    <DefaultTemplate>
      <Routers />
    </DefaultTemplate>
  );
}

export default App;
