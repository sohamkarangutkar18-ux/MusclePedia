
// src/App.tsx
import { useEffect, useState } from "react";
import anatomyImg from "../assets/anatomy.jpg";
import { muscles } from "../muscles";


interface ImgSize {
  w: number;
  h: number;
}

export default function Home() {
  const [imgSize, setImgSize] = useState<ImgSize | null>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const [aboutOpen, setAboutOpen] = useState(false); // state for about section

  // BMI state
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmiResult, setBmiResult] = useState<string | null>(null);

  // 1RM state
  const [lift, setLift] = useState("");
  const [liftWeight, setLiftWeight] = useState("");
  const [reps, setReps] = useState("");
  const [oneRm, setOneRm] = useState<string | null>(null);

  // Load image size
  useEffect(() => {
    const img = new Image();
    img.src = anatomyImg;
    img.onload = () => {
      setImgSize({ w: img.naturalWidth, h: img.naturalHeight });
    };
  }, []);

  // Convert coords "x1,y1,x2,y2,..." → "x1,y1 x2,y2 ..."
  const coordsToPoints = (coords: string) => {
    const nums = coords.split(",").map((s) => s.trim()).filter(Boolean);
    const pairs: string[] = [];
    for (let i = 0; i < nums.length; i += 2) {
      pairs.push(`${nums[i]},${nums[i + 1]}`);
    }
    return pairs.join(" ");
  };

  // BMI calculator function
  const calculateBMI = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);
    if (!h || !w) {
      setBmiResult("⚠️ Please enter valid height and weight.");
      return;
    }
    const bmi = w / ((h / 100) * (h / 100));
    let msg = "";
    if (bmi < 18.5) msg = `BMI: ${bmi.toFixed(1)} (Underweight)`;
    else if (bmi < 25) msg = `BMI: ${bmi.toFixed(1)} (Normal ✅)`;
    else if (bmi < 30) msg = `BMI: ${bmi.toFixed(1)} (Overweight ⚠️)`;
    else msg = `BMI: ${bmi.toFixed(1)} (Obese ❌)`;
    setBmiResult(msg);
  };

  // 1RM calculator function
  const calculateOneRM = () => {
    const w = parseFloat(liftWeight);
    const r = parseInt(reps);
    if (!lift || !w || !r) {
      setOneRm("⚠️ Please fill all fields.");
      return;
    }
    const orm = w * (1 + r / 30);
    setOneRm(`${lift}: Your estimated 1RM is ${orm.toFixed(1)} kg`);
  };

  if (!imgSize) return <div className="p-8">Loading anatomy image...</div>;

  return (
    <div className="flex h-screen bg-gray-100">
      {/* LEFT: Tools/Info panel */}
      <aside className="w-1/4 bg-white shadow-xl p-6 border-r overflow-y-auto">
     
        <h2 className="text-xl font-bold text-gray-800 mb-4">Tools</h2>

        {/* BMI Calculator */}
        <div className="mb-6 p-4 bg-gray-50 rounded-lg shadow">
          <h3 className="font-semibold text-gray-700 mb-3">📏 BMI Calculator</h3>
          <input
            type="number"
            placeholder="Height (cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full mb-2 p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Weight (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full mb-2 p-2 border rounded"
          />
          <button
            onClick={calculateBMI}
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
          >
            Calculate
          </button>
          <button
            onClick={() => {
              setHeight("");
              setWeight("");
              setBmiResult(null);
            }}
            className="w-full mt-2 bg-gray-300 text-gray-800 py-2 rounded hover:bg-gray-400"
          >
            Reset
          </button>
          {bmiResult && <p className="mt-2 text-sm font-medium">{bmiResult}</p>}
        </div>

        {/* 1RM Calculator */}
        <div className="mb-6 p-4 bg-gray-50 rounded-lg shadow">
          <h3 className="font-semibold text-gray-700 mb-3">🏋️ One-Rep Max</h3>
          <select
            value={lift}
            onChange={(e) => setLift(e.target.value)}
            className="w-full mb-2 p-2 border rounded"
          >
            <option value="">Select your lift</option>
            <option value="Bench Press">Bench Press</option>
            <option value="Squat">Squat</option>
            <option value="Deadlift">Deadlift</option>
          </select>
          <input
            type="number"
            placeholder="Weight lifted (kg)"
            value={liftWeight}
            onChange={(e) => setLiftWeight(e.target.value)}
            className="w-full mb-2 p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Reps"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
            className="w-full mb-2 p-2 border rounded"
          />
          <button
            onClick={calculateOneRM}
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
          >
            Calculate
          </button>
          <button
            onClick={() => {
              setLift("");
              setLiftWeight("");
              setReps("");
              setOneRm(null);
            }}
            className="w-full mt-2 bg-gray-300 text-gray-800 py-2 rounded hover:bg-gray-400"
          >
            Reset
          </button>
          {oneRm && <p className="mt-2 text-sm font-medium">{oneRm}</p>}
        </div>

        {/* ABOUT SECTION */}
        <div className="bg-white shadow rounded-xl p-4">
          <button
            onClick={() => setAboutOpen(!aboutOpen)}
            className="flex justify-between items-center w-full text-left"
          >
            <span className="text-lg font-bold text-indigo-700 flex items-center gap-2">
              ℹ️ About
            </span>
            <span className="text-gray-500">{aboutOpen ? "▲" : "▼"}</span>
          </button>

          {aboutOpen && (
            <div className="mt-4 text-gray-700 space-y-4">
              <p>
                Welcome to <span className="font-semibold">Muscle❚█══█❚Pedia</span>, your
                all-in-one interactive fitness companion. Our mission is to make{" "}
                <span className="font-medium">
                  understanding the human body and training smarter
                </span>{" "}
                accessible to everyone — from beginners to athletes.
              </p>

              <div>
                <h3 className="font-semibold text-indigo-600">🔍 What You’ll Find</h3>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  <li>Interactive anatomy with clickable muscle groups</li>
                  <li>GIF-based exercise demonstrations</li>
                  <li>Smart tools: BMI & One-Rep Max calculators</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-indigo-600">🎯 Why Muscle-Pedia?</h3>
                <p>
                  Fitness is <span className="italic">knowledge + action</span>. Many
                  struggle because they don’t know which exercises target which muscles
                  or how to track progress. Muscle-Pedia bridges that gap with{" "}
                  <span className="font-medium">
                    clear, visual, and science-based information
                  </span>.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-indigo-600">🌍 Who Is It For?</h3>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  <li>Beginners learning proper workouts</li>
                  <li>Fitness enthusiasts refining their training</li>
                  <li>Coaches & trainers as a quick reference</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-indigo-600">💡 Our Goal</h3>
                <p>
                  To combine <span className="font-medium">fitness, education, and
                  technology</span>, empowering you to train smarter, avoid injuries,
                  and achieve your goals with confidence.
                </p>
              </div>
            </div>
          )}
        </div>
      </aside>

      {/* MIDDLE: Anatomy section with its own header */}
      <div className="flex-1 flex flex-col items-center justify-start p-6">
        {/* Local Header */}
        <h1 className="text-3xl font-bold text-indigo-700 mb-4">Muscle❚█══█❚Pedia</h1>

        <div style={{ width: "100%", maxWidth: 900 }}>
          <svg
            viewBox={`0 0 ${imgSize.w} ${imgSize.h}`}
            style={{ width: "100%", height: "auto", display: "block" }}
            preserveAspectRatio="xMidYMid meet"
          >
            <image
              href={anatomyImg}
              x="0"
              y="0"
              width={imgSize.w}
              height={imgSize.h}
            />

            {muscles.map((m) => {
              const points = coordsToPoints(m.coords);
              return (
                <polygon
                  key={m.name}
                  points={points}
                  fill="transparent"
                  stroke="transparent"
                  strokeWidth={0}
                  style={{
                    cursor: "pointer",
                    transition: "fill 120ms, opacity 120ms",
                  }}
                  onClick={() => setSelected(m.name)}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as SVGPolygonElement;
                    el.style.fill = m.color;
                    el.style.opacity = "0.6";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as SVGPolygonElement;
                    el.style.fill = "transparent";
                    el.style.opacity = "1";
                  }}
                />
              );
            })}
          </svg>
        </div>
      </div>

      {/* RIGHT: Details panel */}
      <aside className="w-1/3 bg-white shadow-xl p-6 border-l overflow-y-auto">
        {selected ? (
          (() => {
            const m = muscles.find((x) => x.name === selected)!;
            return (
              <>
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-800">{m.name}</h2>
                  <button
                    className="text-sm text-gray-500 px-2 py-1"
                    onClick={() => setSelected(null)}
                  >
                    Close
                  </button>
                </div>

                <h3 className="mt-4 font-semibold text-gray-600">Exercises</h3>
                <div className="grid grid-cols-1 gap-4">
  {m.exercises.map((exercise, idx) => (
    <div
      key={idx}
      className="relative group overflow-hidden rounded-xl shadow-md cursor-pointer"
    >
      {/* Exercise GIF */}
      <img
        src={exercise.gif}
        alt={exercise.name}
        className="w-full h-auto rounded-xl transform transition duration-300 group-hover:scale-105"
      />

      {/* Hover Text (Name + Details) */}
      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white px-3 py-2 text-sm opacity-0 group-hover:opacity-100 transition duration-300">
        <p className="font-semibold">{exercise.name}</p>
        <p className="text-xs">{exercise.details}</p>
      </div>
    </div>
  ))}
</div>
              </>
            );
          })()
        ) : (
          <div className="text-gray-500">Hover a muscle and click it to see exercises.</div>
        )}
      </aside>
    </div>
  );
}
