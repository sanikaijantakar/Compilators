import React from 'react';

export const About = () => {
  return (
    <section id="about" className="bg-gradient-to-br from-white to-teal-50 py-16 px-6 my-15 sm:px-12 lg:px-32">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-teal-700 mb-6 text-center">
          About Skin Cancer Classifier
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed text-center mb-10">
          The <strong>Skin Cancer Classifier</strong> is an AI-powered web application designed to assist in the early detection of skin cancer. Using advanced Convolutional Neural Networks (CNNs) and Grad-CAM visualizations, it provides users with fast, reliable predictions and intuitive heatmaps to explain the model’s focus.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="p-6 bg-white rounded-2xl shadow-md border border-teal-100 hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold text-teal-600 mb-2">🔍 How It Works</h3>
            <p className="text-gray-600">
              Upload a skin lesion image, and our model predicts whether it's benign or malignant. Behind the scenes, the model has been trained on a large dataset of skin cancer images to detect subtle patterns and variations.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-md border border-teal-100 hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold text-teal-600 mb-2">🧠 Explainability</h3>
            <p className="text-gray-600">
              We use <strong>Grad-CAM</strong> to highlight the regions of the image the model focused on, offering transparency and increasing user trust in the AI’s decision-making process.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-md border border-teal-100 hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold text-teal-600 mb-2"> Why It Matters</h3>
            <p className="text-gray-600">
              Early detection of skin cancer can be life-saving. By making diagnostic tools more accessible, we empower users and reduce the burden on healthcare systems.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-md border border-teal-100 hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold text-teal-600 mb-2">💡 Tech Stack</h3>
            <p className="text-gray-600">
              ReactJS • TailwindCSS • Python • Flask • TensorFlow • Grad-CAM • OpenCV
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
