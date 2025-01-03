import './App.css';
import BackToTop from './common/BackToTop';
import Addition from './components/Addition';
import EventsEinsenden from './components/EventsEinsenden';
import Star from './components/Star';
import Table from './components/Table';

function App() {
  return (
    <>
      <>
        <EventsEinsenden />
        <Table />
        <Addition />
        <Star/>
      </>
      <BackToTop/>
    </>
  );
}

export default App;
