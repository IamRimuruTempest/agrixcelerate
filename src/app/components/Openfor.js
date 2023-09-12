/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useState } from "react";

export default function Openfor() {
  const texts = [
    "Students",
    "Graduates",
    "Faculty",
    "Innovators",
    "Technopreneurs",
    "Researchers",
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState(texts[currentTextIndex]);

  useEffect(() => {
    const changeText = () => {
      const newIndex = (currentTextIndex + 1) % texts.length;
      setCurrentTextIndex(newIndex);
      setCurrentText(texts[newIndex]);
    };

    const intervalId = setInterval(changeText, 1000);

    return () => clearInterval(intervalId);
  }, [currentTextIndex, texts]);


  return (
    <>
      <p className="text-[#142D59] text-2xl lg:text-3xl font-bold mb-5">Open for {currentText}</p>
    </>
  );
}
