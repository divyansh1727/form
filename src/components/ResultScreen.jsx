export default function ResultScreen({ score, total }) {
  return (
    <div className="bg-white/80 backdrop-blur p-6 rounded-xl shadow-lg text-center space-y-4 max-w-md">
      <h2 className="text-3xl text-pink-700 font-bold">💌 Your Result</h2>
      <p className="text-xl text-gray-800 font-medium">
        You got <span className="text-pink-600 font-bold">{score}</span> out of{" "}
        <span className="font-bold">{total}</span> romantic guesses right! 💖
      </p>
      <button
        onClick={() => window.location.reload()}
        className="mt-4 px-5 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition duration-300"
      >
        Play Again 🔁
      </button>
    </div>
  );
}


