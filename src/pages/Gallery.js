import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import Pagination from '../components/Gallery/Pagination';
import Cell from '../components/Gallery/Cell';
import '../static/css/pages/gallery.scss'

const pageSize = 6;

const Gallery = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = {
          'Content-Type': 'application/json',
        };
        const response = await axios.get("http://localhost:4000/event", { headers });
        setData(response.data.data);
        setCurrentPage(1);
        
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchData();
  }, []);
  const [currentPage, setCurrentPage] = useState(0);

  // Calculate the total number of pages
  const totalPages = Math.ceil(data.length / pageSize);

  // Calculate the items to display on the current page
  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, data.length);
    return data.slice(startIndex, endIndex);
    window.location.reload();
  }, [currentPage]);

  // Callback function to handle page changes
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Main
      title="Events"
      description="A glimpse into the life of Prof. Dr. Bagesh Kumar"
    >
      <article className="post" id="Gallery">
        <header>
          <div className="title">
            <h2><Link to="/gallery">Events</Link></h2>
          </div>
        </header>
        <div className='gallery-container'>
          {currentItems.map((photo) => (
            <Cell
              data={photo}
              key={photo.cap}
            />
          ))}
        </div>
        <Pagination
          onPageChange={handlePageChange}
          totalCount={data.length}
          pageSize={pageSize}
          currentPage={currentPage}
        />
      </article>
    </Main>
  );
};

export default Gallery;
