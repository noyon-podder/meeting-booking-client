import React, { useState } from "react";
import { FaX } from "react-icons/fa6";

type TMultiImageUpload = {
  imageUrls: string[];
  setImageUrls: (images: string[]) => void;
};

const MultiImageUpload: React.FC<TMultiImageUpload> = ({
  imageUrls,
  setImageUrls,
}) => {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<File[]>([]);
  // const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleUploadImage = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (files) {
      const newImages = [...images, ...Array.from(files)];
      if (newImages.length < 3) {
        setError("Please upload at least 3 images.");
        return;
      } else {
        setError(null);
      }

      setLoading(true);
      const newImageUrls: string[] = [];

      for (const file of newImages) {
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "meeting-booking");
        data.append("cloud_name", "dszc3cimc");

        try {
          const res = await fetch(
            "https://api.cloudinary.com/v1_1/dszc3cimc/image/upload",
            {
              method: "POST",
              body: data,
            }
          );
          const result = await res.json();
          newImageUrls.push(result.url);
        } catch (error) {
          console.error("Error uploading image:", error);
        }
      }

      setLoading(false);
      setImages(newImages);
      setImageUrls(newImageUrls); // Save URLs in state
    }
  };

  const handleRemoveImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    const newImageUrls = imageUrls.filter((_, i) => i !== index);

    if (newImages.length < 3) {
      setError("Please upload at least 3 images.");
    } else {
      setError(null);
    }

    setImages(newImages);
    setImageUrls(newImageUrls); // Update URLs state when removing images
  };

  return (
    <div>
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleUploadImage}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      {loading && <p>Uploading images...</p>}
      <div className="flex gap-2">
        {images.map((image, index) => (
          <div key={index} className="border relative">
            <img
              src={URL.createObjectURL(image)}
              alt={`preview ${index}`}
              style={{ width: "100px", height: "100px" }}
            />
            <button
              onClick={() => handleRemoveImage(index)}
              className="absolute top-0 right-0 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-[10px] text-white"
            >
              <FaX />
            </button>
          </div>
        ))}
      </div>
      {/* {imageUrls.length > 0 && (
        <div>
          <h3>Uploaded Image URLs:</h3>
          <ul>
            {imageUrls.map((url, index) => (
              <li key={index}>{url}</li>
            ))}
          </ul>
        </div>
      )} */}
    </div>
  );
};

export default MultiImageUpload;
