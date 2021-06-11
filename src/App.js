
import './App.css';
import Banner from './components/banner/Banner';
import Filmlist from './components/filmlist/Filmlist';
import Navbar from './components/Navbar/Navbar';
import { action, orginals } from './constants/url';



function App() {
  return (
  <>
    <Navbar/>
    <Banner/>
    {/* <Filmlist title="Netflix Orginals" url={orginals}  />
    <Filmlist title="Action" small url={action}/> */}
    <Filmlist title="Netflix Orginals" url={action}  />
    <Filmlist title="Action" small url={orginals}/>
   </>
  );
}

export default App;
