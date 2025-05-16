// import { useExplorer } from './context/explorerContext';
import Explorer from './components/Explorer';
import ToastContainer from './components/ToastContainer';
import StarRating from './components/StarRating';
import ProgressBar from './components/ProgressBar';
import Accordion from './components/Accordion';
import TablePagination from './components/TablePagination';
import SearchDropdown from './components/SearchDropdown';
import Timer from './components/Timer';

function App() {
  // const { fileData } = useExplorer();

  return (
    <>
      {/* <Explorer data={fileData} /> */}
      {/* <ToastContainer /> */}
      {/* <StarRating /> */}
      {/* <ProgressBar /> */}
      {/* <Accordion title={'My Hobbies'} expanded={true}>
        <h2>My Favorite Hobby</h2>
        <p>
          I enjoy <span>reading books</span> in my free time. It helps me relax
          and explore different perspectives.
        </p>
      </Accordion> */}

      {/* <TablePagination /> */}

      {/* <SearchDropdown /> */}

      <Timer />
    </>
  );
}

export default App;
