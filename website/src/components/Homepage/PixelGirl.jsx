import { useEffect, useState } from "react";

/**
 * A hand-authored pixel sprite of a dark-skinned girl with cornrows.
 * Every character in the grid maps to one pixel (one SVG rect).
 * The waving arm lives in its own <g> so it can rotate around the shoulder.
 *
 * Plain JavaScript / JSX — no TypeScript.
 */

const PALETTE = {
  k: "#1b110b", // hair (base)
  h: "#3b2417", // cornrow ridge / highlight line
  b: "#f2b544", // hair bead
  s: "#8a5330", // skin
  d: "#6b3d21", // skin shadow
  y: "#120b06", // eyes
  w: "#ffffff", // eye shine
  m: "#c26a54", // lips
  t: "#e35b4d", // top
  u: "#b8402f", // top shadow
  p: "#2f74b0", // skirt
  q: "#255d8f", // skirt shadow
  L: "#75452a", // legs
  o: "#f4ecdc", // sneakers
};

// 16 wide x 20 tall
const BODY = [
  "...kkkkkkkk.....",
  "..khkhkhkhkhk...",
  "..khkhkhkhkhk...",
  "..khssssssshk...",
  "..khsyssysshk...",
  "..khsssdssshk...",
  "..khssmmmsshk...",
  "....dsssssd.....",
  "......dd........",
  "....ttttttt.....",
  "...sttttttt.....",
  "...sttttttt.....",
  "...stttuuut.....",
  "...sppppppp.....",
  "...ppppppppp....",
  "..ppppqqqpppp...",
  "....LL...LL.....",
  "....LL...LL.....",
  "....LL...LL.....",
  "...ooo...ooo....",
];

// beads dangling at the end of the cornrows
const BEADS = [
  [1, 3],
  [13, 3],
  [1, 6],
  [13, 6],
];

// raised waving arm, anchored so its bottom row sits on the shoulder (y = 9)
const ARM = [".ss", "sss", "sss", ".ss", ".ss", ".ss", ".ss", ".tt"];
const ARM_X = 10;
const ARM_Y = 2;

/** Turns a character grid into run-length compressed SVG rects. */
function Pixels({ grid, ox = 0, oy = 0, skip }) {
  const rects = [];

  grid.forEach((row, y) => {
    let x = 0;
    while (x < row.length) {
      const ch = row[x];

      if (ch === "." || (skip && skip.indexOf(ch) !== -1)) {
        x += 1;
        continue;
      }

      let run = 1;
      while (x + run < row.length && row[x + run] === ch) run += 1;

      rects.push(
        <rect
          key={`${x}-${y}-${ch}`}
          x={ox + x}
          y={oy + y}
          width={run}
          height={1}
          fill={PALETTE[ch] || "#ff00ff"}
        />,
      );

      x += run;
    }
  });

  return <g>{rects}</g>;
}

/** Pixel speech bubble that types its message out and loops. */
export function SpeechBubble({ text = "hey there", className = "" }) {
  const [shown, setShown] = useState(0);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    setShown(0);

    let i = 0;
    let holdTimer;

    const typer = window.setInterval(() => {
      i += 1;
      setShown(i);

      if (i >= text.length) {
        window.clearInterval(typer);
        holdTimer = window.setTimeout(() => setCycle((c) => c + 1), 10000);
      }
    }, 200);

    return () => {
      window.clearInterval(typer);
      window.clearTimeout(holdTimer);
    };
  }, [text, cycle]);

  return (
    <div className={`anim-pop relative ${className}`}>
      <div className="relative border-[3px] border-[#1b110b] bg-[#fffaf0] px-3 py-2.5 shadow-[4px_4px_0_0_rgba(27,17,11,0.45)]">
        <span className="font-pixel text-[9px] leading-none text-[#1b110b] sm:text-[11px]">
          {text.slice(0, shown)}
        </span>
        <span className="anim-caret font-pixel text-[9px] leading-none text-[#e35b4d] sm:text-[11px]">
          _
        </span>

        {/* pixel tail */}
        <div className="absolute -bottom-[9px] left-4 h-[6px] w-[12px] bg-[#fffaf0]" />
        <div className="absolute -bottom-[9px] left-4 h-[6px] w-[3px] bg-[#1b110b]" />
        <div className="absolute -bottom-[9px] left-[37px] h-[6px] w-[3px] bg-[#1b110b]" />
        <div className="absolute -bottom-[12px] left-4 h-[3px] w-[12px] bg-[#1b110b]" />
      </div>
    </div>
  );
}

export default function PixelGirl({ className = "", waving = true }) {
  return (
    <svg
      viewBox="-1 0 18 22"
      shapeRendering="crispEdges"
      className={`pixelated overflow-visible ${className}`}
      role="img"
      aria-label="Pixel art illustration of a dark skinned girl with cornrows waving hello"
    >
      {/* ground shadow */}
      <ellipse cx="7.5" cy="20.3" rx="5.2" ry="0.8" fill="rgba(10,8,6,0.35)" />

      <g className={waving ? "anim-bob" : undefined}>
        {/* body without eyes so the eyes can blink separately */}
        <Pixels grid={BODY} skip={["y"]} />

        {/* beads on the cornrows */}
        {BEADS.map(([x, y]) => (
          <rect
            key={`bead-${x}-${y}`}
            x={x}
            y={y}
            width={1}
            height={1}
            fill={PALETTE.b}
          />
        ))}

        {/* eyes (blink) */}
        <g className="anim-blink">
          <rect x={5} y={4} width={1} height={1} fill={PALETTE.y} />
          <rect x={8} y={4} width={1} height={1} fill={PALETTE.y} />
          <rect x={5} y={4} width={0.4} height={0.4} fill={PALETTE.w} />
          <rect x={8} y={4} width={0.4} height={0.4} fill={PALETTE.w} />
        </g>

        {/* resting left hand */}
        <rect x={3} y={13} width={1} height={1} fill={PALETTE.d} />

        {/* waving arm — rotates around the shoulder via the .anim-wave keyframes */}
        <g className={waving ? "anim-wave" : undefined}>
          <Pixels grid={ARM} ox={ARM_X} oy={ARM_Y} />
        </g>
      </g>
    </svg>
  );
}
