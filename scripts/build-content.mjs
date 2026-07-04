import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const siteRoot = path.resolve(scriptDir, "..");
const workspaceRoot = path.resolve(siteRoot, "../..");
const transcriptRoot = path.join(workspaceRoot, "outputs/named-playlists");
const githubRoot = path.join(workspaceRoot, "work/github");
const outPath = path.join(siteRoot, "src/data/siteData.ts");

if (!fs.existsSync(transcriptRoot) || !fs.existsSync(githubRoot)) {
  if (fs.existsSync(outPath)) {
    console.log("Local transcript/repo sources not found; reusing committed src/data/siteData.ts.");
    process.exit(0);
  }
  throw new Error("Cannot build content: local transcript/repo sources are missing and src/data/siteData.ts does not exist.");
}

const playlists = [
  {
    id: "abstraction",
    title: "Abstraction",
    folder: "Abstraction",
    description:
      "How abstraction moves between art, language, programs, and practical problem solving.",
  },
  {
    id: "the-basics",
    title: "The Basics",
    folder: "The Basics",
    description:
      "Why fundamentals, mental models, creativity, and curiosity matter more than any one tool.",
  },
  {
    id: "perfect-programming-process",
    title: "Perfect Programming Process",
    folder: "Perfect Programming Process",
    description:
      "A process-first look at planning, implementing, failing, and then building Tic Tac Toe correctly.",
  },
];

const articleSpecs = {
  eyx25adnN6A: {
    originalLanguage: "English",
    lede:
      "Abstraction is not the opposite of concrete code. It is the act of stepping away from unnecessary detail so that the important shape of a problem becomes visible.",
    concepts: ["abstraction", "art", "language", "readability", "levels"],
    codeRefIds: ["c64-abstract-art", "asteroids-collision-abstraction"],
    sections: [
      {
        heading: "Abstraction means moving away from detail",
        body: [
          "The lesson starts with the everyday confusion around the word abstraction. In art it may mean strange shapes and colors, but in programming it means explaining a thing at the level where the listener can use it.",
          "A line-by-line explanation of code is usually too low level. Saying that the player moves left when the user presses A is the same behavior, but at a level where the purpose is visible.",
        ],
      },
      {
        heading: "Art makes levels of abstraction visible",
        body: [
          "The video moves through Lissitzky, battle paintings, Cubism, Futurism, Suprematism, and Constructivism to show that images can either start with concrete detail and extract meaning, or start with an idea and invite the viewer to reconstruct detail.",
          "That same movement happens in programming. We can work from implementation details toward a general idea, or start with a higher-level idea and then choose code that supports it.",
        ],
      },
      {
        heading: "Words are abstractions too",
        body: [
          "Scott McCloud's point about comics and Hayakawa's ladder of abstraction both matter because programs are written in language. Names such as player, cow, asset, and moveSpaceship are not the real thing. They are handles that help us reason together.",
          "The more useful the abstraction, the easier it is for different people to bring their own concrete understanding to the same idea without drowning in local detail.",
        ],
      },
      {
        heading: "Programming is choosing the right height",
        body: [
          "Good code lets the reader move up and down the ladder. Sometimes the reader needs to know how collision distance is calculated; sometimes they only need to know that two objects are colliding.",
          "The point is not to hide meaning. The point is to remove details that distract from the meaning currently being discussed.",
        ],
      },
    ],
    takeaways: [
      "Abstraction means removing unnecessary detail, not making code vague.",
      "A useful name lets readers think at the level of behavior before implementation.",
      "Different audiences need different levels of explanation.",
      "Readable programs let you move between high-level purpose and low-level mechanics.",
    ],
  },
  n54Hr2Tk2Og: {
    originalLanguage: "English",
    lede:
      "The companion video turns the abstraction discussion into a practical refactor: the same game behavior becomes easier to read when the code names the jobs it is doing.",
    concepts: ["refactoring", "named functions", "game loop", "readability"],
    codeRefIds: ["asteroids-starter-loop", "asteroids-collision-abstraction"],
    sections: [
      {
        heading: "Start with the same behavior",
        body: [
          "The important constraint is that the program should not become a different program just because it becomes more abstract. The behavior stays recognizable while the structure changes.",
          "That makes the refactor useful as a demonstration: readability improves because related details are grouped under names, not because features were added.",
        ],
      },
      {
        heading: "Name the work the program performs",
        body: [
          "The game contains several jobs: create asteroids, move asteroids, move the spaceship, detect collisions, apply damage, and display the current state.",
          "When those jobs are split into named functions, the reader can first understand the tick loop as a short story before inspecting the mechanics inside each function.",
        ],
      },
      {
        heading: "Details still exist",
        body: [
          "Abstraction is not deletion. The random coordinates, speed values, collision formula, health changes, and DOM updates still exist.",
          "They are placed where they belong, so the top-level program can speak in concepts rather than arithmetic and selectors.",
        ],
      },
    ],
    takeaways: [
      "Refactoring can improve readability without changing behavior.",
      "A function name is valuable when it says why a block exists.",
      "The game loop is easier to read when it stays at one conceptual level.",
    ],
  },
  nuRbPv6q2CI: {
    originalLanguage: "English",
    lede:
      "Problem solving with abstraction begins before code. The first step is recognizing what kind of problem you are really facing, then looking for a similar shape you already understand.",
    concepts: ["problem solving", "analogy", "transfer", "feature design"],
    codeRefIds: ["asteroids-starter-loop", "asteroids-shots"],
    sections: [
      {
        heading: "Abstraction helps transfer experience",
        body: [
          "The lesson uses stories and code to show that a specific problem can often be lifted into a more general shape. Once you see the shape, you can borrow experience from elsewhere.",
          "In programming, that can mean recognizing that a new feature resembles an existing feature: a projectile and an asteroid both need a position, speed, screen element, movement, display, and removal path.",
        ],
      },
      {
        heading: "Copying code is not enough",
        body: [
          "The temptation is to copy the closest existing code and tweak it until it appears to work. That can be a useful first move, but it can also trap you if you do not understand the abstraction behind the copied code.",
          "The better question is: what are the shared responsibilities, and where do they differ?",
        ],
      },
      {
        heading: "The feature exposes the structure",
        body: [
          "Adding shooting to the Asteroids example is not just a feature request. It is a test of whether the code structure can absorb another moving object type without becoming unreadable.",
          "When the current structure resists the change, the resistance is information. It tells you which abstraction level needs work.",
        ],
      },
    ],
    takeaways: [
      "Search for the shared shape of a problem before implementing details.",
      "Copying code can help only when you understand what is being copied.",
      "Feature work often reveals missing or mixed abstraction levels.",
    ],
  },
  KQEtEPQfdjU: {
    originalLanguage: "Danish",
    lede:
      "The second abstraction episode continues the problem-solving thread in Danish. This English adaptation focuses on the core idea: too many abstraction levels at once make a problem feel larger than it is.",
    concepts: ["single level", "mental load", "analysis", "decomposition"],
    codeRefIds: ["asteroids-shots", "asteroids-single-level"],
    sections: [
      {
        heading: "The problem is not always the code",
        body: [
          "The video returns to the Bessie example and the Asteroids feature to show that getting stuck is often a sign of mixed levels of thinking.",
          "A programmer may be thinking about game rules, object lifecycles, DOM elements, collision math, and array mutation all at the same time. Each level is manageable alone; together they become noisy.",
        ],
      },
      {
        heading: "Keep one level in focus",
        body: [
          "Artists, divers, and programmers all benefit from staying oriented. In code, orientation means knowing whether the current block is describing intent, coordinating operations, or performing a concrete detail.",
          "When a function mixes those levels, the reader has to constantly translate. The function may work, but it costs attention.",
        ],
      },
      {
        heading: "Use abstraction as a thinking tool",
        body: [
          "The goal is not to invent fancy architecture. The goal is to make the current question smaller: what must happen at this level, and which details can be moved behind a name?",
          "Once the right level is selected, the implementation has fewer moving parts in view.",
        ],
      },
    ],
    takeaways: [
      "Getting stuck can mean you are juggling too many abstraction levels.",
      "A function should usually read at one conceptual height.",
      "Moving detail behind a name reduces mental load when the name is honest.",
    ],
  },
  Fl0jna10f2g: {
    originalLanguage: "Danish",
    lede:
      "The third episode turns the abstraction theory back into forward motion: climb up to understand the shape, then climb down deliberately to implement the next concrete step.",
    concepts: ["implementation", "cleanup", "single level", "iteration"],
    codeRefIds: ["asteroids-shots", "asteroids-single-level"],
    sections: [
      {
        heading: "Use the ladder both ways",
        body: [
          "The series is not arguing that higher abstraction is always better. Higher abstraction helps you see the problem; lower abstraction is where the computer actually gets instructions.",
          "The useful skill is moving between those levels without mixing them accidentally.",
        ],
      },
      {
        heading: "Finish the feature by separating jobs",
        body: [
          "The shooting feature needs a shot to be created, added to the screen, added to the program state, moved, displayed, and removed. It also needs asteroids to be restarted or removed.",
          "Those steps become readable when each job has a name and the top-level loop can coordinate them without exposing every DOM and array detail.",
        ],
      },
      {
        heading: "Cleanup is part of problem solving",
        body: [
          "The end of the episode points toward cleanup and fixes because the first working solution is rarely the best readable solution.",
          "Once behavior exists, you can compare function levels, remove accidental duplication, and make the code easier to extend.",
        ],
      },
    ],
    takeaways: [
      "Higher abstraction helps analysis; lower abstraction completes implementation.",
      "A working feature can still need structural cleanup.",
      "Single-level functions make later changes less disorienting.",
    ],
  },
  C04r2qVpOC8: {
    originalLanguage: "English",
    lede:
      "The companion video shows the produced code with explanations stripped back. It is the practical audit trail for the three-part abstraction series.",
    concepts: ["code walkthrough", "cleanup", "branch progression", "feature implementation"],
    codeRefIds: ["asteroids-shots", "asteroids-single-level", "asteroids-collision-abstraction"],
    sections: [
      {
        heading: "The code is the argument",
        body: [
          "Without the long conceptual framing, the companion video makes the structural point directly: the code becomes easier to scan when each behavior is named.",
          "Shots, asteroids, spaceship movement, collision checks, and display updates can each be followed as their own small path.",
        ],
      },
      {
        heading: "The branch history matters",
        body: [
          "The public Asteroids repository preserves the lesson as a progression. The starter branch is compact, the abstraction branch groups existing behavior, and later branches add and clean up the shooting feature.",
          "That makes the code references more useful than a single final snapshot: you can compare the shape before and after each idea is introduced.",
        ],
      },
      {
        heading: "Readable code is still code",
        body: [
          "The final result does not hide the DOM, arrays, or movement math forever. It puts them in named places so the reader can decide how far down to inspect.",
        ],
      },
    ],
    takeaways: [
      "The companion video is best read beside the Asteroids branches.",
      "Feature code becomes clearer when lifecycle operations are explicit.",
      "The final branch improves structure without pretending details vanished.",
    ],
  },
  g7OqudbMEC4: {
    originalLanguage: "Danish",
    lede:
      "The Basics opens with nostalgia for BASIC, but the real topic is deeper: fundamentals, mental models, creativity, and curiosity make it easier to keep learning after the tools change.",
    concepts: ["fundamentals", "mental models", "creativity", "curiosity", "learning"],
    codeRefIds: ["c64-editor-keyloop", "c64-abstract-art"],
    sections: [
      {
        heading: "The basics are not just beginner material",
        body: [
          "The video begins with BASIC because many programmers first met computers through a simple language built into the machine. But the point is not to return to one old language.",
          "The point is that fundamentals help you form models that survive when the syntax, platform, or framework changes.",
        ],
      },
      {
        heading: "Mental models let us use systems",
        body: [
          "Drawing from Donald Norman, the video argues that programmers are always users of systems made by other people: languages, editors, compilers, runtimes, and operating environments.",
          "You cannot understand every physical detail at once. You need a model of how the system behaves, then you revise that model as feedback and documentation teach you more.",
        ],
      },
      {
        heading: "Creativity needs material and tradition",
        body: [
          "The video also connects programming to creativity. Writing code is not only filling in syntax; designing a solution is creative work.",
          "Experimentation, resistance from the material, and immersion in the history of a craft all make a programmer better at recognizing patterns and inventing variations.",
        ],
      },
      {
        heading: "Curiosity keeps models alive",
        body: [
          "The Feynman thread is the emotional center: deeper understanding does not remove beauty from a thing. It adds more ways to be interested.",
          "For programming, that means foundations are not a detour from practice. They make it easier to adapt to the next tool without throwing away what you already know.",
        ],
      },
    ],
    takeaways: [
      "Fundamentals matter because tools keep changing.",
      "A mental model is useful even when it is incomplete, as long as you keep revising it.",
      "Creativity in programming grows through experiment, friction, and craft history.",
      "Curiosity makes lifelong learning feel less like starting over.",
    ],
  },
  UsVd67Ys1t4: {
    originalLanguage: "Danish",
    lede:
      "The perfect programming process is a deliberate refusal to start by typing. It treats planning, sketching, and understanding as part of programming, not as delays before programming.",
    concepts: ["process", "planning", "paper first", "implementation", "testing"],
    codeRefIds: ["tictactoe-poor-selection", "tictactoe-right-winner"],
    sections: [
      {
        heading: "Programming starts before the editor",
        body: [
          "The video responds to the common experience of finishing tutorials and then failing when trying to build something alone.",
          "Its answer is a process: step away from the computer, define the program, reason about the problem, and only then move toward code.",
        ],
      },
      {
        heading: "Paper exposes missing decisions",
        body: [
          "A notebook forces the programmer to decide what the program should do without being distracted by syntax or tooling.",
          "For a small game such as Tic Tac Toe, that means thinking about the board, moves, win conditions, tie conditions, and user feedback before implementation begins.",
        ],
      },
      {
        heading: "The process is tested by failure",
        body: [
          "The later TicTacToe videos matter because they show the process under stress. The first attempt goes badly when the early steps are rushed; the second works when the process is followed more honestly.",
          "That contrast makes the process less like advice and more like an experiment with evidence.",
        ],
      },
    ],
    takeaways: [
      "Do not treat planning as something separate from programming.",
      "A simple game still needs explicit rules before code.",
      "The value of a process is visible when things go wrong.",
    ],
  },
  "52ia2C0XyRM": {
    originalLanguage: "Danish",
    lede:
      "The failed TicTacToe attempt is useful because it is honest. It shows what happens when the process is named but not really followed.",
    concepts: ["failure", "planning debt", "bugs", "TicTacToe"],
    codeRefIds: ["tictactoe-poor-win-checks", "tictactoe-poor-selection"],
    sections: [
      {
        heading: "A vague plan creates vague code",
        body: [
          "The project starts with the idea of demonstrating the process, but the implementation drifts toward improvising in the browser.",
          "Because the rules are not fully enumerated up front, the code checks only some win combinations and leaves tie behavior fragile.",
        ],
      },
      {
        heading: "The bug is a symptom",
        body: [
          "The public repository documents the failure directly: the game can loop forever on a tie and does not cover all winning combinations.",
          "Those are not isolated typos. They come from a missing model of the complete game state.",
        ],
      },
      {
        heading: "Failure becomes data",
        body: [
          "The value of this video is that it gives the next attempt something concrete to fix. The process has to be followed more seriously, especially in the early paper-and-rules phase.",
        ],
      },
    ],
    takeaways: [
      "Skipping problem analysis does not save time; it moves the cost into debugging.",
      "Random selection code needs a defined empty-board and full-board behavior.",
      "Incomplete win checks are a planning failure before they are a code failure.",
    ],
  },
  ertvnBmwPTY: {
    originalLanguage: "English",
    lede:
      "The second TicTacToe attempt succeeds by trusting the process more completely: plan the game, enumerate the rules, then implement the plain version before trying to make it elegant.",
    concepts: ["process", "TicTacToe", "working software", "iteration"],
    codeRefIds: ["tictactoe-right-winner", "tictactoe-right-computer"],
    sections: [
      {
        heading: "Trust the early steps",
        body: [
          "The video explicitly returns to the process after the failed attempt. This time the notebook work matters: the board, available moves, win states, and tie state are made concrete before coding.",
          "That extra attention prevents the programmer from relying on a vague mental picture of the game.",
        ],
      },
      {
        heading: "Correctness before elegance",
        body: [
          "The final code is repetitive, and the repository says so. But the point of this attempt is not abstraction or beauty. It is to make the program work by covering the actual game rules.",
          "That is an important distinction: a correct repetitive version is a better starting point than an elegant incomplete one.",
        ],
      },
      {
        heading: "The process creates a refactoring target",
        body: [
          "Once the program works, the duplication becomes visible and safe to improve later.",
          "The successful version therefore becomes both an end point for the process lesson and a starting point for future abstraction lessons.",
        ],
      },
    ],
    takeaways: [
      "A complete model of the rules matters more than clever code.",
      "Working, repetitive code can be a valid first success.",
      "Refactoring is easier after correctness is established.",
    ],
  },
};

const codeReferenceSpecs = [
  {
    id: "asteroids-starter-loop",
    title: "Starter loop before abstraction",
    repo: "asteroids",
    branch: "00-starter",
    file: "script.js",
    language: "JavaScript",
    startLine: 59,
    endLine: 101,
    note:
      "The original loop performs movement, collision, damage, and display in one dense flow.",
  },
  {
    id: "asteroids-collision-abstraction",
    title: "Collision work behind names",
    repo: "asteroids",
    branch: "01-abstraction",
    file: "script.js",
    language: "JavaScript",
    startLine: 95,
    endLine: 121,
    note:
      "The tick loop reads at a higher level while the collision formula remains inspectable.",
  },
  {
    id: "asteroids-shots",
    title: "Projectile lifecycle",
    repo: "asteroids",
    branch: "02-problem-solving",
    file: "script.js",
    language: "JavaScript",
    startLine: 34,
    endLine: 86,
    note:
      "Adding shots reveals the shared object lifecycle: create, store, move, display, and remove.",
  },
  {
    id: "asteroids-single-level",
    title: "Single level of abstraction cleanup",
    repo: "asteroids",
    branch: "03-single-level-of-abstraction",
    file: "script.js",
    language: "JavaScript",
    startLine: 90,
    endLine: 154,
    note:
      "The asteroid functions are separated so each step stays close to one conceptual level.",
  },
  {
    id: "c64-abstract-art",
    title: "C64 abstract art program",
    repo: "c64-abstraction",
    branch: "main",
    file: "abstract-art.bas",
    language: "BASIC",
    startLine: 1,
    endLine: 34,
    note:
      "The BASIC listing turns random lines, circles, and rectangles into a small abstraction machine.",
  },
  {
    id: "c64-editor-keyloop",
    title: "C64 editor input loop",
    repo: "c64-c-editor",
    branch: "main",
    file: "main.asm",
    language: "Assembly",
    startLine: 51,
    endLine: 105,
    note:
      "A concrete example of a system image: key codes become editor actions through a loop.",
  },
  {
    id: "tictactoe-poor-win-checks",
    title: "Incomplete win checks",
    repo: "TicTacToe-poorly",
    branch: "main",
    file: "script.js",
    language: "JavaScript",
    startLine: 25,
    endLine: 44,
    note:
      "Only a subset of possible wins is checked, which matches the repo's documented failure.",
  },
  {
    id: "tictactoe-poor-selection",
    title: "Random field selection problem",
    repo: "TicTacToe-poorly",
    branch: "main",
    file: "script.js",
    language: "JavaScript",
    startLine: 46,
    endLine: 53,
    note:
      "The loop keeps looking for an enabled field, but it has no complete tie-state escape.",
  },
  {
    id: "tictactoe-right-winner",
    title: "Complete user win and tie handling",
    repo: "TicTacToe",
    branch: "main",
    file: "script.js",
    language: "JavaScript",
    startLine: 19,
    endLine: 65,
    note:
      "The second attempt explicitly checks rows, columns, diagonals, and tie behavior.",
  },
  {
    id: "tictactoe-right-computer",
    title: "Available-field computer move",
    repo: "TicTacToe",
    branch: "main",
    file: "script.js",
    language: "JavaScript",
    startLine: 55,
    endLine: 108,
    note:
      "The working version chooses among available fields and then checks the computer's win states.",
  },
];

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function transcriptFor(folder, relativeFile) {
  const filePath = path.join(transcriptRoot, folder, relativeFile);
  return fs.readFileSync(filePath, "utf8").trim();
}

function repoFile(spec) {
  const repoPath = path.join(githubRoot, spec.repo);
  if (spec.branch === "main") {
    return fs.readFileSync(path.join(repoPath, spec.file), "utf8");
  }

  return execFileSync("git", ["-C", repoPath, "show", `origin/${spec.branch}:${spec.file}`], {
    encoding: "utf8",
  });
}

function lineSlice(source, startLine, endLine) {
  return source
    .split(/\r?\n/)
    .slice(startLine - 1, endLine)
    .join("\n")
    .trimEnd();
}

function githubUrl(spec) {
  return `https://github.com/programming2point0/${spec.repo}/blob/${spec.branch}/${spec.file}#L${spec.startLine}-L${spec.endLine}`;
}

const codeReferences = codeReferenceSpecs.map((spec) => ({
  ...spec,
  url: githubUrl(spec),
  code: lineSlice(repoFile(spec), spec.startLine, spec.endLine),
}));

const playlistData = playlists.map((playlist) => {
  const index = readJson(path.join(transcriptRoot, playlist.folder, "playlist_index.json"));
  return {
    ...playlist,
    playlistUrl: index.playlistUrl,
    videoIds: index.videos.map((video) => video.id),
    sourceVideos: index.videos,
  };
});

const videos = playlistData.flatMap((playlist) =>
  playlist.sourceVideos.map((video) => {
    const spec = articleSpecs[video.id];
    if (!spec) {
      throw new Error(`Missing article spec for ${video.id}`);
    }

    const sourceTranscript = transcriptFor(playlist.folder, video.file);
    const wordCount = Number(video.words ?? sourceTranscript.split(/\s+/).length);
    const languageNote =
      spec.originalLanguage === "Danish"
        ? "English editorial adaptation from the original Danish transcript. The source drawer keeps the Danish transcript available for verification."
        : "English article adapted from the original English transcript. The source drawer keeps the transcript available for verification.";

    return {
      id: video.id,
      playlistId: playlist.id,
      playlistTitle: playlist.title,
      order: video.index,
      title: video.title,
      articleTitle: video.title,
      videoUrl: `https://www.youtube.com/watch?v=${video.id}`,
      thumbnailUrl: `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`,
      originalLanguage: spec.originalLanguage,
      articleLanguage: "English",
      languageNote,
      transcriptSourceUrl: `https://www.youtube-transcript.io/videos?id=${video.id}`,
      sourceTranscript,
      wordCount,
      estimatedMinutes: Math.max(3, Math.round(wordCount / 180)),
      lede: spec.lede,
      sections: spec.sections,
      takeaways: spec.takeaways,
      codeRefIds: spec.codeRefIds,
      concepts: spec.concepts,
    };
  }),
);

const siteData = {
  generatedAt: new Date().toISOString(),
  playlists: playlistData.map(({ sourceVideos, folder, ...playlist }) => playlist),
  videos,
  codeReferences,
};

const out = `import type { SiteData } from "../types";\n\nexport const siteData = ${JSON.stringify(
  siteData,
  null,
  2,
)} satisfies SiteData;\n`;

fs.writeFileSync(outPath, out);
console.log(`Generated ${path.relative(siteRoot, outPath)} with ${videos.length} videos and ${codeReferences.length} code references.`);
