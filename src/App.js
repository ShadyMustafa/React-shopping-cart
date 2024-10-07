import { NavBar } from './components/Navbar';
import { Main } from './components/Main';
import './index.css';


export default function App(){
  return(
    <div className='wrapper'>
      <NavBar/>
      <Main/>
    </div>
  );
}