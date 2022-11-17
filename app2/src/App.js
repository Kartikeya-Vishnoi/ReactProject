import {Route,Routes} from 'react-router-dom';

import Layout from './Components/layout';
import All from './Pages/allmeet';
import Fav from "./Pages/fav";
import Neo from './Pages/newmeet';

function App() {
  return (
      <Layout>
      <switch>
       <Routes>
        <Route path="/" element={<All />} exact />
        <Route path="/new-meetup" element={<Neo />} />
        <Route path="/favorites" element={<Fav/>} />
      </Routes>
      </switch>
      </Layout>

  );
}

export default App;
