import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

const EditImageData = ({
  setIsEditing,
  selectedImageData,
  setSelectedImageData,
  setAllImagesData,
}) => {
  const [imageTitle, setImageTitle] = useState(selectedImageData.title);
  const [imageDes, setImageDes] = useState(selectedImageData.description);
  const [imageTag, setImageTag] = useState(selectedImageData.tag);

  const handleSaveEditing = () => {
    const updatedImageData = {
      ...selectedImageData,
      title: imageTitle,
      description: imageDes,
      tag: imageTag,
    };

    setSelectedImageData(updatedImageData);

    setAllImagesData((prevAllImagesData) =>
      prevAllImagesData.map((item) =>
        item.id === updatedImageData.id ? updatedImageData : item
      )
    );
    setIsEditing(false);
  };

  return (
    <div className="flex flex-column gap-4 w-full">
      <Input
        type="text"
        name="imageTitle"
        value={imageTitle}
        onChange={(e) => setImageTitle(e.target.value)}
        placeholder="image title"
        classes="body1 text-white bg-tertiary rounded-lg"
        label="Title"
        labelClasses="body1"
        required
      />
      <Input
        type="text"
        name="imageDes"
        value={imageDes}
        onChange={(e) => setImageDes(e.target.value)}
        placeholder="image description"
        classes="body1 text-white bg-tertiary rounded-lg"
        label="Description"
        labelClasses="body1"
        required
      />
      <Input
        type="text"
        name="imageTag"
        value={imageTag}
        onChange={(e) => setImageTag(e.target.value)}
        placeholder="image tag"
        classes="body1 text-white bg-tertiary rounded-lg"
        label="Tag"
        labelClasses="body1"
        required
      />
      <div className="flex flex-wrap gap-2 w-full">
        <Button text="Save" onClick={handleSaveEditing} />
        <Button text="Cancel" onClick={() => setIsEditing(false)} />
      </div>
    </div>
  );
};

export default EditImageData;
