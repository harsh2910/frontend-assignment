import { useEffect, useState } from "react";
import "./App.css";
import TableGrid from "./components/TableGrid/index";
import Pagination from "./components/Pagination/index";

function App() {
  const [data, setData] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json"
        );
        const result = await response.json();
        setData(result);
        setDisplayData(result.slice(0, itemsPerPage));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handlePageChange = (page) => {
    const startIndex = (page - 1) * itemsPerPage;
    setDisplayData(data.slice(startIndex, startIndex + itemsPerPage));
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <TableGrid displayData={displayData} />
      <Pagination
        handlePageChange={handlePageChange}
        currentPage={currentPage}
        totalPages={totalPages}
        pageRangeDisplayed={5}
      />
    </div>
  );
}

export default App;
