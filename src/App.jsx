import './App.scss';
import CommentSection from './components/CommentSection/CommentSection';
import Header from './components/Header/Header';
import Video from './components/Video/Video';

function App() {
  return (
    <div className="App">
      <Header />
      <Video />
      <CommentSection />
    </div>
  );
}

export default App;
