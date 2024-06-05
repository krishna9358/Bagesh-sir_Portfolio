import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import Main from '../layouts/Main';
import Cell from '../components/Gallery/Cell';
import Pagination from '../components/Gallery/Pagination';
import data from '../data/gallery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../static/css/pages/gallery.scss';

const PAGE_SIZE = 6; // Number of carousels per page

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const settings = {
    dots: true, // Enable dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable auto animation
    autoplaySpeed: 3000, // Set the speed of auto animation in milliseconds
    nextArrow: null, // Remove next arrow
    prevArrow: null // Remove prev arrow
  };

  // Function to create a chunked array
  const chunkArray = (array, chunkSize) => {
    const results = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      results.push(array.slice(i, i + chunkSize));
    }
    return results;
  };

  // Divide the data into chunks of 6
  const chunkedData = chunkArray(data, 6);

  // Calculate the total number of pages
  const totalPages = Math.ceil(chunkedData.length / PAGE_SIZE);

  // Get the data for the current page
  const currentData = chunkedData.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

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
        <div className='grid-container'>
          {currentData.map((chunk, index) => (
            <div className='carousel-wrapper' key={index}>
              <Slider {...settings}>
                {chunk.map((photo) => (
                  <div key={photo.cap}>
                    <Cell data={photo} />
                  </div>
                ))}
              </Slider>
            </div>
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalCount={chunkedData.length}
          pageSize={PAGE_SIZE}
          onPageChange={page => setCurrentPage(page)}
        />
      </article>
    </Main>
  );
};

export default Gallery;
