"use client";

import { useEffect, useRef } from "react";
import { animate, stagger, inView } from "motion";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const messageRef = useRef<HTMLParagraphElement>(null);
  const emojiRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate floating particles in background
    const particles = document.querySelectorAll(".particle");
    particles.forEach((particle, i) => {
      animate(
        particle,
        {
          y: [0, -30, 0],
          x: [0, Math.random() * 20 - 10, 0],
          opacity: [0.3, 0.7, 0.3],
        },
        {
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          delay: i * 0.2,
        }
      );
    });

    // Animate container entrance
    if (containerRef.current) {
      animate(
        containerRef.current,
        { scale: [0.8, 1], opacity: [0, 1] },
        { duration: 0.8, easing: [0.22, 1, 0.36, 1] }
      );
    }

    // Animate title with stagger
    if (titleRef.current) {
      const words = titleRef.current.querySelectorAll(".word");
      animate(
        words,
        { y: [50, 0], opacity: [0, 1] },
        { duration: 0.7, delay: stagger(0.1, { start: 0.3 }), easing: [0.22, 1, 0.36, 1] }
      );
    }

    // Animate message text
    if (messageRef.current) {
      animate(
        messageRef.current,
        { y: [30, 0], opacity: [0, 1] },
        { duration: 0.8, delay: 1.2, easing: [0.22, 1, 0.36, 1] }
      );
    }

    // Animate emoji with bounce
    if (emojiRef.current) {
      animate(
        emojiRef.current,
        { scale: [0, 1.2, 1], rotate: [0, 10, -10, 0] },
        { duration: 0.6, delay: 1.8, easing: [0.34, 1.56, 0.64, 1] }
      );

      // Continuous floating animation for emoji
      setTimeout(() => {
        animate(
          emojiRef.current!,
          { y: [-8, 8] },
          { duration: 2, repeat: Infinity, direction: "alternate", easing: "ease-in-out" }
        );
      }, 2400);
    }

    // Animate decorative elements
    const decorations = document.querySelectorAll(".decoration");
    decorations.forEach((decoration, i) => {
      animate(
        decoration,
        { scale: [0, 1], rotate: [0, 360] },
        { duration: 1, delay: 0.5 + i * 0.15, easing: [0.34, 1.56, 0.64, 1] }
      );

      // Continuous rotation
      setTimeout(() => {
        animate(
          decoration,
          { rotate: [0, 360] },
          { duration: 20, repeat: Infinity, easing: "linear" }
        );
      }, 1500);
    });

    // Add scroll-triggered animations
    inView(".message-box", () => {
      const box = document.querySelector(".message-box");
      if (box) {
        animate(
          box,
          { boxShadow: ["0 10px 40px rgba(139, 92, 246, 0.1)", "0 20px 60px rgba(139, 92, 246, 0.3)"] },
          { duration: 1, direction: "alternate", repeat: Infinity }
        );
      }
    });
  }, []);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-indigo-900/20">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle absolute rounded-full bg-gradient-to-r from-violet-400 to-purple-400 dark:from-violet-600 dark:to-purple-600"
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
        className="message-box relative z-10 mx-4 max-w-4xl rounded-3xl bg-white/80 px-8 py-16 text-center shadow-2xl backdrop-blur-xl dark:bg-gray-800/80 sm:px-16 sm:py-20"
      >
        {/* Decorative corner accents */}
        <div className="absolute left-4 top-4 h-8 w-8 border-l-4 border-t-4 border-violet-500 dark:border-violet-400" />
        <div className="absolute right-4 top-4 h-8 w-8 border-r-4 border-t-4 border-purple-500 dark:border-purple-400" />
        <div className="absolute bottom-4 left-4 h-8 w-8 border-b-4 border-l-4 border-pink-500 dark:border-pink-400" />
        <div className="absolute bottom-4 right-4 h-8 w-8 border-b-4 border-r-4 border-indigo-500 dark:border-indigo-400" />

        {/* Emoji */}
        <div ref={emojiRef} className="mb-8 text-6xl sm:text-7xl">
          🎓
        </div>

        {/* Title */}
        <h1
          ref={titleRef}
          className="mb-8 flex flex-wrap items-center justify-center gap-3 text-4xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl"
        >
          <span className="word bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent dark:from-violet-400 dark:to-purple-400">
            Oops!
          </span>
          <span className="word bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-pink-400">
            No
          </span>
          <span className="word bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent dark:from-pink-400 dark:to-rose-400">
            Product
          </span>
          <span className="word bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent dark:from-rose-400 dark:to-orange-400">
            Here
          </span>
        </h1>

        {/* Message */}
        <p
          ref={messageRef}
          className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-700 dark:text-gray-300 sm:text-xl md:text-2xl"
        >
          There wasn't any product, we ran these ads for our{" "}
          <span className="font-semibold text-violet-600 dark:text-violet-400">
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
  );
}
