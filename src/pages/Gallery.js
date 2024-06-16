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
import useVisibility from '../components/Gallery/useVisibility'; // Import the custom hook

const PAGE_SIZE = 6; // Number of carousels per page

const colors = ['#f0f8ff', '#faebd7', '#e6e6fa']; // Define your colors here

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);

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
          {currentData.map((chunk, index) => {
            const bgColor = colors[index % colors.length];
            const [isVisible, ref] = useVisibility(); // Use the custom hook
            const settings = {
              dots: false,
              infinite: true,
              speed: 1500,
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: isVisible, // Enable auto-play based on visibility
              autoplaySpeed: 3000,
              nextArrow: <div className="slick-arrow slick-next" />,
              prevArrow: <div className="slick-arrow slick-prev" />,
            };

            return (
              <div className='carousel-wrapper' key={index} ref={ref}>
                <Slider {...settings}>
                  {chunk.map((photo) => (
                    <div key={photo.cap}>
                      <Cell data={photo} bgColor={bgColor} />
                    </div>
                  ))}
                </Slider>
              </div>
            );
          })}
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
