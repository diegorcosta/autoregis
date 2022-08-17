import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Gallery = ({ galleryImages }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(true);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(galleryImages.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  return (
    <div>
      {openModal && (
        <div className="featuredImage">
          <div className="navigation">
            <FaChevronLeft className="btn-prev" onClick={prevSlide} />
            <FaChevronRight className="btn-next" onClick={nextSlide} />
          </div>
          <img src={galleryImages[slideNumber]} alt="" />
        </div>
      )}
      <ul className="photos">
        {galleryImages &&
          galleryImages.slice(0, 4).map((slide, index) => {
            return (
              <li
                className="single"
                key={index}
                onClick={() => handleOpenModal(index)}
              >
                <img src={slide} alt="" />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Gallery;
