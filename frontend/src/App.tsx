import Header from './components/Header';
import TeamList from './components/TeamList';

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <Header />
      <TeamList />
    </div>
  );
};

export default App;
