import { useEffect, useRef, useState } from "react";

/** Types a single line once, then stops. */
export function TypeLine({
  text,
  speed = 40,        // ms per char
  startDelay = 200,  // delay before typing begins
  onDone,
  className = "",
}: {
  text: string;
  speed?: number;
  startDelay?: number;
  onDone?: () => void;
  className?: string;
}) {
  const [shown, setShown] = useState("");
  const intervalRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    let i = 0;
    timeoutRef.current = window.setTimeout(() => {
      intervalRef.current = window.setInterval(() => {
        i++;
        setShown(text.slice(0, i));
        if (i >= text.length) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          onDone?.();
        }
      }, speed);
    }, startDelay);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text, speed, startDelay, onDone]);

  return (
    <span className={`typewriter ${className}`}>
      {shown}
      <span className="caret" />
    </span>
  );
}

/** Cycles through phrases: type → pause → delete → next. */
export function TypeCycle({
  phrases,
  typeSpeed = 45,
  deleteSpeed = 30,
  pause = 900,       // ms to hold full text before deleting
  className = "",
}: {
  phrases: readonly string[];   // accept readonly arrays (fixes your error)
  typeSpeed?: number;
  deleteSpeed?: number;
  pause?: number;
  className?: string;
}) {
  const safePhrases = phrases.length ? phrases : [""];
  const [idx, setIdx] = useState(0);     // which phrase
  const [pos, setPos] = useState(0);     // char position
  const [del, setDel] = useState(false); // deleting?
  const current = safePhrases[idx % safePhrases.length];

  useEffect(() => {
    const atFull = pos === current.length && !del;
    const atEmpty = pos === 0 && del;

    const id = window.setTimeout(() => {
      if (atFull) {
        setDel(true);
      } else if (atEmpty) {
        setDel(false);
        setIdx((v) => v + 1);
      } else {
        setPos((p) => p + (del ? -1 : 1));
      }
    }, atFull ? pause : del ? deleteSpeed : typeSpeed);

    return () => clearTimeout(id);
  }, [pos, del, current.length, pause, typeSpeed, deleteSpeed]);

  const shown = current.slice(0, pos);

  return (
    <span className={`typewriter ${className}`}>
      {shown}
      <span className="caret" />
    </span>
  );
}
