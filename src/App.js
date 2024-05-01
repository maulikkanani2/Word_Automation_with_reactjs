import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Plan from './pages/Plan';
import Profile from './pages/Profile';
import MyProject from './pages/MyProject';
import Page6 from './pages/page6';
import DuplicatePage6 from './pages/DuplicatePage6'
import { CreatePlot, CreateSceneGenre, CustomizeScene, EvaluateProject, EvaluateScene, OutlineActOfScript, OutlineCharacters, OutlineSaveCat } from './pages/module/path';
import TextEditor from './pages/TextEditor';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/plan' element={<Plan />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/myProjects' element={<MyProject />}/>
          <Route path="/page6" element={<Page6 />}/>
          <Route path="/duplicate_page6" element={<DuplicatePage6 />}/>
          <Route path="/texteditor" element={<TextEditor />}/>

          {/* modal pages  */}
          <Route path="/create_plot" element={<CreatePlot />}/>

          <Route path="/outline_act" element={<OutlineActOfScript />}/>
          <Route path="/outline_save_cat" element={<OutlineSaveCat />}/>
          <Route path="/outline_char" element={<OutlineCharacters />}/>

          <Route path="/evaluate_project" element={<EvaluateProject />}/>
          <Route path="/evaluate_scene" element={<EvaluateScene />}/>

          <Route path="/create_scene_genre" element={<CreateSceneGenre />}/>
          <Route path="/customize_scene" element={<CustomizeScene />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
