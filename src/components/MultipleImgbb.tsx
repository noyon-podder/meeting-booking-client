// import { useState, useCallback } from "react";
// import axios from "axios";
// import { useDropzone } from "react-dropzone";

// type TMultipleImageUpload = {
//   imageURLs: string[];
//   setImageURLs: (images: string[]) => void;
// };

// const MultipleImageUpload = ({
//   imageURLs,
//   setImageURLs,
// }: TMultipleImageUpload) => {
//   const [selectedImages, setSelectedImages] = useState<File[]>([]);

//   const onDrop = useCallback((acceptedFiles: File[]) => {
//     setSelectedImages((prevImages) => [...prevImages, ...acceptedFiles]);
//   }, []);

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop,
//     accept: {
//       "image/*": [".jpeg", ".jpg", ".png"],
//     },
//     multiple: true,
//   });

//   const uploadImages = async () => {
//     const imgbbAPIKey = "5729e9fedf9787a13119c4010a7a3072";
//     const uploadedURLs: string[] = [];

//     console.log("image uploaded", uploadedURLs);

//     for (const image of selectedImages) {
//       const formData = new FormData();
//       formData.append("image", image);

//       try {
//         const response = await axios.post(
//           `https://api.imgbb.com/1/upload?key=${imgbbAPIKey}`,
//           formData
//         );

//         if (response.data.success) {
//           uploadedURLs.push(response.data.data.url);
//           console.log("Image uploaded successfully:", response.data.data.url);
//         } else {
//           console.error("Image upload failed:", response.data.error.message);
//         }
//       } catch (error) {
//         console.error("Error uploading image:", error);
//       }
//     }

//     setImageURLs(uploadedURLs);
//   };

//   const removeImage = (indexToRemove: number) => {
//     setSelectedImages((prevImages) =>
//       prevImages.filter((_, index) => index !== indexToRemove)
//     );
//   };

//   console.log({ imageURLs });
//   return (
//     <div className="p-4">
//       <div
//         {...getRootProps()}
//         className={`flex items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer transition-all duration-200 p-5 ${
//           isDragActive ? "border-blue-500 bg-blue-100" : "border-gray-300"
//         }`}
//       >
//         <input {...getInputProps()} />
//         {isDragActive ? (
//           <p className="text-blue-500">Drop the files here ...</p>
//         ) : (
//           <p className="text-gray-500">
//             Drag & drop some files here, or click to select files
//           </p>
//         )}
//       </div>

//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
//         {selectedImages.map((image, index) => (
//           <div key={index} className="relative">
//             <img
//               src={URL.createObjectURL(image)}
//               alt={`Preview ${index}`}
//               className="w-full h-32 object-cover rounded-md shadow-md"
//             />
//             <button
//               onClick={() => removeImage(index)}
//               className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition duration-200"
//             >
//               &times;
//             </button>
//           </div>
//         ))}
//       </div>

//       {imageURLs.length > 0 && (
//         <div className="mt-6">
//           <h3 className="text-lg font-medium mb-2">Uploaded Image URLs:</h3>
//           <ul className="list-disc list-inside">
//             {imageURLs.map((url, index) => (
//               <li key={index}>
//                 <a
//                   href={url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-500 underline"
//                 >
//                   {url}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       <div className="mt-4">
//         <button
//           onClick={uploadImages}
//           className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
//         >
//           Upload Images
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MultipleImageUpload;
