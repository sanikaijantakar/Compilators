import React, { useState } from "react";
import axios from "axios";

const Detect = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
    setResult(null);
    setShowDetails(false);
  };

  const handleSubmit = async () => {
    if (!image) return alert("Please upload an image.");
    setLoading(true);

    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await axios.post("https://cfcc-34-75-70-17.ngrok-free.app", formData);
      setResult(response.data);
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 to-white flex items-center justify-center p-6 mt-15">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-2xl text-center">
        <h2 className="text-4xl font-extrabold text-teal-700 mb-6 tracking-tight">
          Cancer Detection
        </h2>
  
        <div className="mb-6">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-500
                       file:mr-4 file:py-2 file:px-4
                       file:rounded-full file:border-0
                       file:text-sm file:font-semibold
                       file:bg-teal-50 file:text-teal-700
                       hover:file:bg-teal-100 cursor-pointer"
          />
        </div>
  
        {preview && (
          <div className="mb-6">
            <img
              src={preview}
              alt="Uploaded preview"
              className="mx-auto h-64 object-contain border-2 border-dashed border-gray-300 rounded-lg shadow-md"
            />
          </div>
        )}
  
        <button
          onClick={handleSubmit}
          className={`px-6 py-2 text-white font-semibold rounded-full shadow-lg transition duration-300 
                      ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-teal-600 hover:bg-teal-700"}`}
          disabled={loading}
        >
          {loading ? "Detecting..." : "Detect Cancer"}
        </button>
  
        {result && (
          <div className="mt-10 text-left">
            <h3 className="text-2xl font-bold text-teal-700 mb-3">
              Prediction: <span className="text-gray-800">{result.cancer_type}</span>
            </h3>
  
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
            >
              {showDetails ? "Hide Details" : "Show Heatmap & Explanation"}
            </button>
  
            {showDetails && (
              <div className="mt-6 bg-gray-50 p-5 rounded-xl shadow-inner">
                <img
                  src={result.heatmap_url}
                  alt="Model attention heatmap"
                  className="mx-auto w-full max-w-md rounded-md border shadow"
                />
                <p className="mt-4 text-gray-700 leading-relaxed">
                  <strong className="text-gray-900">Explanation:</strong> {result.explanation}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
  
};

export default Detect;
