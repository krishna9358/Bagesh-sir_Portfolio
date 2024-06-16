import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import Pagination from '../components/Gallery/Pagination';
import Cell from '../components/Gallery/Cell';
import data from '../data/GexpertTalk';
import '../static/css/pages/gallery.scss';
import colors from '../data/colors';

const PAGE_SIZE = 6; // Number of items per page


const GexpertTalk = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the total number of pages
  const totalPages = Math.ceil(data.length / PAGE_SIZE);

  // Calculate the items to display on the current page
  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = Math.min(startIndex + PAGE_SIZE, data.length);
    return data.slice(startIndex, endIndex);
  }, [currentPage]);

  // Callback function to handle page changes
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Main
      title="Google expert talk
"
      description="A glimpse into the life of Prof. Dr. Bagesh Kumar"
    >
      <article className="post" id="Gallery">
        <header>
          <div className="title">
            <h2><Link to="/GexpertTalk">Google Expert Talk</Link></h2>
          </div>
        </header>
        <div className="grid-container">
          {currentItems.map((photo, index) => (
            <Cell
              data={photo}
              bgColor={colors[index % colors.length]} // Cycle through the background colors
              key={photo.cap}
            />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalCount={data.length}
          pageSize={PAGE_SIZE}
          onPageChange={handlePageChange}
        />
      </article>
    </Main>
  );
};

export default GexpertTalk;
