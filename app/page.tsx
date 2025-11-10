"use client"
import { useEffect, useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const messageRef = useRef(null);
  const emojiRef = useRef(null);

  useEffect(() => {
    // Animation logic removed due to TypeScript errors
  }, []);

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
          50% { transform: translateY(-30px) translateX(10px); opacity: 0.7; }
        }
        
        @keyframes scaleIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        @keyframes slideUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes bounceIn {
          0% { transform: scale(0) rotate(0deg); opacity: 0; }
          50% { transform: scale(1.2) rotate(10deg); }
          75% { transform: scale(1.1) rotate(-10deg); }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes glow {
          from { box-shadow: 0 10px 40px rgba(139, 92, 246, 0.1); }
          to { box-shadow: 0 20px 60px rgba(139, 92, 246, 0.3); }
        }
      `}</style>

      <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        {/* Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="particle absolute rounded-full bg-gradient-to-r from-violet-400 to-purple-400"
              style={{
                width: Math.random() * 6 + 4 + "px",
                height: Math.random() * 6 + 4 + "px",
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
                filter: "blur(1px)",
              }}
            />
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="decoration absolute left-10 top-20 h-20 w-20 rounded-full bg-gradient-to-br from-yellow-300 to-orange-400 opacity-20 blur-xl" />
        <div className="decoration absolute right-16 top-32 h-24 w-24 rounded-full bg-gradient-to-br from-cyan-300 to-blue-400 opacity-20 blur-xl" />
        <div className="decoration absolute bottom-20 left-20 h-32 w-32 rounded-full bg-gradient-to-br from-pink-300 to-purple-400 opacity-20 blur-xl" />
        <div className="decoration absolute bottom-32 right-24 h-28 w-28 rounded-full bg-gradient-to-br from-green-300 to-emerald-400 opacity-20 blur-xl" />

        {/* Main Content */}
        <main
          ref={containerRef}
          className="message-box relative z-10 mx-4 max-w-4xl rounded-3xl bg-white/80 px-8 py-16 text-center shadow-2xl backdrop-blur-xl sm:px-16 sm:py-20"
        >
          {/* Decorative corner accents */}
          <div className="absolute left-4 top-4 h-8 w-8 border-l-4 border-t-4 border-violet-500" />
          <div className="absolute right-4 top-4 h-8 w-8 border-r-4 border-t-4 border-purple-500" />
          <div className="absolute bottom-4 left-4 h-8 w-8 border-b-4 border-l-4 border-pink-500" />
          <div className="absolute bottom-4 right-4 h-8 w-8 border-b-4 border-r-4 border-indigo-500" />

          {/* Emoji */}
          <div ref={emojiRef} className="mb-8 text-6xl sm:text-7xl">
            🎓
          </div>

          {/* Title */}
          <h1
            ref={titleRef}
            className="mb-8 flex flex-wrap items-center justify-center gap-3 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
          >
            <span className="word bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Oops!
            </span>
            <span className="word bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              No
            </span>
            <span className="word bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Product
            </span>
            <span className="word bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">
              Here
            </span>
          </h1>

          {/* Message */}
          <p
            ref={messageRef}
            className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-700 sm:text-xl md:text-2xl"
          >
            There wasn't any product, we ran these ads for our{" "}
            <span className="font-semibold text-violet-600">
              digital assignment course
            </span>{" "}
            which will be graded. So sorry! 
          </p>

          {/* Decorative line */}
          <div className="mx-auto mt-12 h-1 w-32 rounded-full bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500" />

          {/* Small emoji accent */}
          <div className="mt-8 text-3xl opacity-70">📚✨</div>
        </main>
      </div>
    </>
  );
}