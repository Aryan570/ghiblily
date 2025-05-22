"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";

gsap.registerPlugin(Draggable, InertiaPlugin);

interface RotatingCircleProps {
  size?: number;
  borderColor?: string;
  borderWidth?: number;
  imageURLs: string[];
  spinDuration?: number;
}

export default function RotatingCircle({
  size = 400,
  //   borderColor = "#fffce1",
  //   borderWidth = 2,
  imageURLs,
  spinDuration = 50,
}: RotatingCircleProps) {
  const circleRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    if (!circleRef.current) return;
    const circleEl = circleRef.current;

    const radius = size / 2;
    const angleIncrement = (Math.PI * 2) / imageURLs.length;

    imagesRef.current = imageURLs.map((url, i) => {
      const img = document.createElement("img");
      img.src = url;
      img.alt = `flair-${i}`;
      img.width = 70;
      img.height = 70;
      img.className = "absolute transform -translate-x-1/2 -translate-y-1/2";

      const angle = angleIncrement * i;
      gsap.set(img, {
        x: radius + Math.cos(angle) * radius,
        y: radius + Math.sin(angle) * radius,
        transformOrigin: "50% 50%",
      });

      circleEl.appendChild(img);
      return img;
    });

    const spin = gsap
      .timeline({ repeat: -1, defaults: { duration: spinDuration, ease: "none" } })
      .to(circleEl, { rotation: 360 })
      .to(imagesRef.current, { rotation: -360 }, 0);

    Draggable.create(circleEl, {
      type: "rotation",
      inertia: true,
      onPressInit: () => { spin.pause(); },
      onDrag() {
        const angle = (this.rotation + 360 * 100000) % 360;
        spin.progress(angle / 360);
      },
      onThrowUpdate() {
        const angle = (this.rotation + 360 * 100000) % 360;
        spin.progress(angle / 360);
      },
      onThrowComplete: () => {
        spin.resume();
        gsap.fromTo(
          spin,
          { timeScale: 0 },
          { duration: 1, timeScale: 1, ease: "power1.in" }
        );
      },
    });

    return () => {
      spin.kill();
      Draggable.get(circleEl)?.kill();
      imagesRef.current.forEach((img) => circleEl.removeChild(img));
      imagesRef.current = [];
    };
  }, [imageURLs, size, spinDuration]);

  return (
    <div className="flex justify-center items-center">
      <div className="max-w-6xl  container">
        <h1 className="decoration-wavy underline decoration-1 underline-offset-2 text-3xl font-bold">skills</h1>
        <div className="flex flex-col items-center justify-center w-full min-w-[400px] h-screen">
          <div
            ref={circleRef}
            className="relative rounded-full border-1 border-dashed"
            style={{
              width: size,
              height: size,
              //   border: `${borderWidth}px solid ${borderColor}`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
