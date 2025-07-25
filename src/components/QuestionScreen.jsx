export default function QuestionScreen({ data, onSelect, current, total }) {
  return (
    <div className="bg-white/80 rounded-xl p-6 shadow-lg text-center space-y-6 w-full max-w-md backdrop-blur">
      <h2 className="text-xl font-semibold text-pink-700">
        Question {current} of {total}
      </h2>
      <p className="text-lg font-medium text-gray-800">{data.question}</p>
      <div className="space-y-3">
        {data.options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onSelect(opt.value)}
            className="w-full text-left bg-pink-50 border border-pink-300 hover:bg-pink-100 rounded-lg px-4 py-2 transition duration-300 font-medium text-pink-900"
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}


