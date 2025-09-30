
import anatomyImage from "../assets/anatomy.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">Fitness Anatomy Explorer</h1>
      
      {/* Anatomy Image */}
      <div className="relative">
        <img 
          src={anatomyImage} 
          alt="Anatomy" 
          className="w-[350px] md:w-[500px]" 
        />
      </div>

      {/* Placeholder for Exercise Info */}
      <div className="mt-6 p-4 bg-white rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold">Select a muscle to see exercises</h2>
      </div>
    </div>
  );
}