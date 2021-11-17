import sidebar from './components/sidebar/sidebar';
import Topbar from './components/topbar/Topbar';

function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <sidebar />
        other pages somethirg else
      </div>
    </div>
  );
}

export default App;
