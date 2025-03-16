import React, { useState } from "react";
import Modal from "./Modal";
import Button from "./Button";
import Input from "./Input";
import EditImageData from "./EditImageData";
import plusSvg from "../../assets/plus.svg";

const base_url = "http://localhost:5173";

function getAllImagesData() {
  const AllImagesData = [
    {
      id: 0,
      src: base_url + "/src/assets/img1.jpeg",
      title: "Beautiful Landscape",
      description: "A breathtaking view of nature.",
      tag: "Nature",
    },
    {
      id: 1,
      src: base_url + "/src/assets/img2.png",
      title: "City Life",
      description: "The hustle and bustle of the modern city.",
      tag: "Urban",
    },
    {
      id: 2,
      src: base_url + "/src/assets/img3.png",
      title: "Calm Beach",
      description: "Experience peace by the sea.",
      tag: "Beach",
    },
    {
      id: 3,
      src: base_url + "/src/assets/img4.png",
      title: "Calm Beach",
      description: "Experience peace by the sea.",
      tag: "Beach",
    },
    {
      id: 4,
      src: base_url + "/src/assets/img5.png",
      title: "Calm Beach",
      description: "Experience peace by the sea.",
      tag: "Beach",
    },
    {
      id: 5,
      src: base_url + "/src/assets/img1.jpeg",
      title: "Beautiful Landscape",
      description: "A breathtaking view of nature.",
      tag: "Nature",
    },
    {
      id: 6,
      src: base_url + "/src/assets/img2.png",
      title: "City Life",
      description: "The hustle and bustle of the modern city.",
      tag: "Urban",
    },
    {
      id: 7,
      src: base_url + "/src/assets/img3.png",
      title: "Calm Beach",
      description: "Experience peace by the sea.",
      tag: "Beach",
    },
    {
      id: 8,
      src: base_url + "/src/assets/img4.png",
      title: "Calm Beach",
      description: "Experience peace by the sea.",
      tag: "Beach",
    },
    {
      id: 9,
      src: base_url + "/src/assets/img5.png",
      title: "Calm Beach",
      description: "Experience peace by the sea.",
      tag: "Beach",
    },
    {
      id: 10,
      src: base_url + "/src/assets/img3.png",
      title: "Calm Beach",
      description: "Experience peace by the sea.",
      tag: "Beach",
    },
    {
      id: 11,
      src: base_url + "/src/assets/img4.png",
      title: "Calm Beach",
      description: "Experience peace by the sea.",
      tag: "Beach",
    },
    {
      id: 12,
      src: base_url + "/src/assets/img5.png",
      title: "Calm Beach",
      description: "Experience peace by the sea.",
      tag: "Beach",
    },
  ];
  return AllImagesData;
}

const ImageGallery = () => {
  const [selectedImageData, setSelectedImageData] = useState(null);
  const [AllImagesData, setAllImagesData] = useState(getAllImagesData);
  const [filteredImagesData, setFilteredImagesData] =
    useState(getAllImagesData);
  const [isEditing, setIsEditing] = useState(false);
  const [searchedText, setSearchedText] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  const handleImageClick = (image) => {
    setSelectedImageData(image);
  };

  // Close the modal
  const handleCloseModal = () => {
    setSelectedImageData(null);
  };

  const handleDeleteItem = (selectedImageData) => {
    setAllImagesData((prevAllImagesData) =>
      prevAllImagesData.filter((item) => item.id !== selectedImageData.id)
    );
    setSelectedImageData(null);
    setFilteredImagesData(getAllImagesData()); // Reset filtered data to original
    setSearchedText("");
  };

  const filter_images_data = (searchTerm) => {
    const newFilteredImagesData = AllImagesData.filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredImagesData(newFilteredImagesData);
  };

  return (
    <>
      <div className="div-search-filter-create flex justify-between w-full">
        <div className="flex gap-8">
          <Input
            classes="body1 rounded-lg search-input"
            type="search"
            name="search"
            placeholder="search"
            value={searchedText}
            onChange={(e) => {
              setSearchedText(e.target.value);
              filter_images_data(e.target.value);
            }}
          />
          <select
            name="tag"
            onChange={(e) => {
              setSelectedTag(e.target.value);
            }}
            value={selectedTag}
            className="body1 rounded-lg filter-input"
          >
            <option value="">select a tag</option>
            <option value="nature">Nature</option>
            <option value="beach">Beach</option>
            <option value="urban">Urban</option>
          </select>
        </div>
        <button className="bg-primary btn" onClick={() => {}}>
          <img src={plusSvg} alt="plus icon" />
        </button>
      </div>
      <div className="gallery-container">
        {filteredImagesData.map((imageData, index) => (
          <div
            className="gallery-item w-full"
            key={index}
            onClick={() => handleImageClick(imageData)}
          >
            <img className="w-full" src={imageData.src} alt={imageData.title} />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImageData && (
        <Modal>
          {isEditing ? (
            <>
              <img
                src={selectedImageData.src}
                alt={selectedImageData.title}
                className="w-full rounded-lg"
              />
              <EditImageData
                selectedImageData={selectedImageData}
                setSelectedImageData={setSelectedImageData}
                setIsEditing={setIsEditing}
                setAllImagesData={setAllImagesData}
              />
            </>
          ) : (
            <>
              <img
                src={selectedImageData.src}
                alt={selectedImageData.title}
                className="w-full rounded-lg"
              />
              <div className="flex flex-column gap-2">
                <h3 className="h3">{selectedImageData.title}</h3>
                <div>
                  <p className="body2">{selectedImageData.description}</p>
                  <p className="body2">{selectedImageData.tag}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button text="Edit" onClick={() => setIsEditing(true)} />
                  <Button text="Close" onClick={handleCloseModal} />
                  <Button
                    text="Delete"
                    classes={"btn-danger"}
                    onClick={() => handleDeleteItem(selectedImageData)}
                  />
                </div>
              </div>
            </>
          )}
        </Modal>
      )}
    </>
  );
};

export default ImageGallery;
