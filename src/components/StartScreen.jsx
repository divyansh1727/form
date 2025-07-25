export default function StartScreen({ onStart }) {
  return (
    <div className="text-center space-y-6">
      <h1 className="text-4xl font-bold text-pink-700">❤️ Love Guess Game ❤️</h1>
      <p className="text-lg">Start your romantic journey now</p>
      <button
        className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700"
        onClick={onStart}
      >
        Start 💘
      </button>
    </div>
  );
}
