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
    <div className="">
      <div className="mb-5">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center w-full max-w-lg p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl"
        >
          {loading ? (
            <>
              <div className="w-full h-full dark:bg-color-darkBaseColor flex items-center justify-center z-50 py-6">
                <p>Uploading</p>
              </div>
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-8 h-8 text-gray-500 dark:text-gray-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                />
              </svg>
              <h2 className="mt-1 font-medium tracking-wide text-gray-700 dark:text-gray-200">
                Room Image
              </h2>
              <p className="mt-2 text-xs tracking-wide text-gray-500 dark:text-gray-400">
                Upload or darg & drop your jpg and png.{" "}
              </p>
            </>
          )}

          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            multiple
            accept="image/*"
            onChange={handleUploadImage}
          />
        </label>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}

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
    </div>
  );
};

export default MultiImageUpload;
