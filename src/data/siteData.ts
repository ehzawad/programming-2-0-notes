import type { SiteData } from "../types";

export const siteData = {
  "playlists": [
    {
      "id": "abstraction",
      "title": "Abstraction",
      "description": "How abstraction moves between art, communication, programs, and practical problem solving.",
      "playlistUrl": "https://www.youtube.com/playlist?list=PLT0acHsdNIawub0gUZTXml6PKWkzpkOQV",
      "videoIds": [
        "eyx25adnN6A",
        "n54Hr2Tk2Og",
        "nuRbPv6q2CI",
        "KQEtEPQfdjU",
        "Fl0jna10f2g",
        "C04r2qVpOC8"
      ]
    },
    {
      "id": "the-basics",
      "title": "The Basics",
      "description": "Why fundamentals, mental models, creativity, and curiosity matter more than any one tool.",
      "playlistUrl": "https://www.youtube.com/playlist?list=PLT0acHsdNIaz3wWEz__y77LFCwVM3riwI",
      "videoIds": [
        "g7OqudbMEC4"
      ]
    },
    {
      "id": "perfect-programming-process",
      "title": "Perfect Programming Process",
      "description": "A process-first look at planning, implementing, failing, and then building Tic Tac Toe correctly.",
      "playlistUrl": "https://www.youtube.com/playlist?list=PLT0acHsdNIawheKZb29kJuk71ZTKCNU54",
      "videoIds": [
        "UsVd67Ys1t4",
        "52ia2C0XyRM",
        "ertvnBmwPTY"
      ]
    }
  ],
  "videos": [
    {
      "id": "eyx25adnN6A",
      "playlistId": "abstraction",
      "playlistTitle": "Abstraction",
      "order": 1,
      "title": "Abstraction - in Art and Programming",
      "articleTitle": "Abstraction - in Art and Programming",
      "videoUrl": "https://www.youtube.com/watch?v=eyx25adnN6A",
      "thumbnailUrl": "https://i.ytimg.com/vi/eyx25adnN6A/hqdefault.jpg",
      "transcriptPath": "transcripts/eyx25adnN6A.txt",
      "lede": "Abstraction is not the opposite of concrete code. It is the act of stepping away from unnecessary detail so that the important shape of a problem becomes visible.",
      "sections": [
        {
          "heading": "Abstraction means moving away from detail",
          "body": [
            "The lesson starts with the everyday confusion around the word abstraction. In art it may mean strange shapes and colors, but in programming it means explaining a thing at the level where the listener can use it.",
            "A line-by-line explanation of code is usually too low level. Saying that the player moves left when the user presses A is the same behavior, but at a level where the purpose is visible.",
            "That difference is the heart of the video. The low-level version talks about keys, coordinates, subtraction, and assignment. The higher-level version talks about movement, intention, and what the player experiences. Both are true, but only one is useful when the question is what the program does.",
            "The word itself matters because it points to removal. To abstract is to pull away from the immediately visible details. In programming, that does not mean erasing those details; it means choosing not to force every detail into every conversation."
          ]
        },
        {
          "heading": "Art makes levels of abstraction visible",
          "body": [
            "The video moves through Lissitzky, battle paintings, Cubism, Futurism, Suprematism, and Constructivism to show that images can either start with concrete detail and extract meaning, or start with an idea and invite the viewer to reconstruct detail.",
            "That same movement happens in programming. We can work from implementation details toward a general idea, or start with a higher-level idea and then choose code that supports it.",
            "A realistic battle painting gives the viewer bodies, uniforms, expressions, weapons, and a frozen moment. The viewer extracts the larger idea from those details. A constructivist poster can do the opposite: it presents a wedge and a circle, and the viewer constructs the political or military situation behind the symbols.",
            "This is why the art detour is not decorative. It teaches the programmer to notice direction. Are we starting with a pile of statements and extracting the idea, or are we starting with an idea and constructing the statements that make it real?"
          ]
        },
        {
          "heading": "Words are abstractions too",
          "body": [
            "Scott McCloud's point about comics and Hayakawa's ladder of abstraction both matter because programs are written in language. Names such as player, cow, asset, and moveSpaceship are not the real thing. They are handles that help us reason together.",
            "The more useful the abstraction, the easier it is for different people to bring their own concrete understanding to the same idea without drowning in local detail.",
            "Hayakawa's cow example is useful because every step up the ladder includes more things while preserving fewer details. Bessie is a specific cow. Cow includes Bessie and many other cows. Livestock includes cows, sheep, goats, and other farm animals. Assets can include livestock, tractors, buildings, and equipment.",
            "Code names work the same way. A variable called object can technically point at something, but it does not tell the reader what world they are in. A name like spaceship or asteroid lets the reader climb toward the problem domain, then dive back down only when the implementation matters."
          ]
        },
        {
          "heading": "Programming is choosing the right height",
          "body": [
            "Good code lets the reader move up and down the ladder. Sometimes the reader needs to know how collision distance is calculated; sometimes they only need to know that two objects are colliding.",
            "The point is not to hide meaning. The point is to remove details that distract from the meaning currently being discussed.",
            "The collision example shows the whole move. A dense expression with square roots and coordinate differences becomes distance. A sum of widths becomes combined size. A comparison becomes isColliding. The program has not become less concrete to the computer, but it has become more meaningful to the reader.",
            "The video's diver metaphor captures the working life of a programmer better than a one-way ladder. We spend time near the surface, thinking about the user's world. Then we dive into lower-level details, change the machinery, and swim back up to see whether the program still behaves like the intended thing."
          ]
        }
      ],
      "takeaways": [
        "Abstraction means removing unnecessary detail, not making code vague.",
        "A useful name lets readers think at the level of behavior before implementation.",
        "Different audiences need different levels of explanation.",
        "Readable programs let you move between high-level purpose and low-level mechanics.",
        "The best abstraction for a moment depends on the question being asked."
      ],
      "codeRefIds": [
        "c64-abstract-art",
        "asteroids-collision-abstraction"
      ],
      "concepts": [
        "abstraction",
        "art",
        "communication",
        "readability",
        "levels"
      ]
    },
    {
      "id": "n54Hr2Tk2Og",
      "playlistId": "abstraction",
      "playlistTitle": "Abstraction",
      "order": 2,
      "title": "Abstraction in practice - companion video",
      "articleTitle": "Abstraction in practice - companion video",
      "videoUrl": "https://www.youtube.com/watch?v=n54Hr2Tk2Og",
      "thumbnailUrl": "https://i.ytimg.com/vi/n54Hr2Tk2Og/hqdefault.jpg",
      "transcriptPath": "transcripts/n54Hr2Tk2Og.txt",
      "lede": "The companion video turns the abstraction discussion into a practical refactor: the same game behavior becomes easier to read when the code names the jobs it is doing.",
      "sections": [
        {
          "heading": "Start with the same behavior",
          "body": [
            "The important constraint is that the program should not become a different program just because it becomes more abstract. The behavior stays recognizable while the structure changes.",
            "That makes the refactor useful as a demonstration: readability improves because related details are grouped under names, not because features were added.",
            "The companion walkthrough therefore treats every change as a translation of existing intent. A block that creates asteroids becomes createAsteroids. Movement logic becomes moveAsteroids or moveSpaceship. Collision math becomes a question asked by a named function.",
            "This matters because abstraction is often misunderstood as adding cleverness. Here it is the opposite: the refactor removes clever-looking density and replaces it with plain statements about the work being done."
          ]
        },
        {
          "heading": "Name the work the program performs",
          "body": [
            "The game contains several jobs: create asteroids, move asteroids, move the spaceship, detect collisions, apply damage, and display the current state.",
            "When those jobs are split into named functions, the reader can first understand the tick loop as a short story before inspecting the mechanics inside each function.",
            "The original loop mixes several concerns in one place. It handles input, moves the player, updates asteroid positions, restarts asteroids, checks distance, changes speed, removes health, and writes values back to the screen.",
            "After the refactor, the loop can read like the frame-by-frame plan of the game: calculate elapsed time, move the spaceship, move the asteroids, check collisions, display the results. That ordering is still code, but it is code at the level of the game."
          ]
        },
        {
          "heading": "Details still exist",
          "body": [
            "Abstraction is not deletion. The random coordinates, speed values, collision formula, health changes, and DOM updates still exist.",
            "They are placed where they belong, so the top-level program can speak in concepts rather than arithmetic and selectors.",
            "That placement also creates a maintenance advantage. If the distance calculation is wrong or inefficient, the programmer can inspect distance without rereading the whole game loop. If the asteroid display is wrong, the display function becomes the likely place to look.",
            "The companion video is therefore not just a cleaned-up version of the main example. It demonstrates the practical habit: once you discover the idea behind a block, give that idea a place and a name."
          ]
        }
      ],
      "takeaways": [
        "Refactoring can improve readability without changing behavior.",
        "A function name is valuable when it says why a block exists.",
        "The game loop is easier to read when it stays at one conceptual level.",
        "A refactor is most convincing when behavior stays stable and the explanation improves."
      ],
      "codeRefIds": [
        "asteroids-starter-loop",
        "asteroids-collision-abstraction"
      ],
      "concepts": [
        "refactoring",
        "named functions",
        "game loop",
        "readability"
      ]
    },
    {
      "id": "nuRbPv6q2CI",
      "playlistId": "abstraction",
      "playlistTitle": "Abstraction",
      "order": 3,
      "title": "Problem Solving with Abstraction | part 1/3",
      "articleTitle": "Problem Solving with Abstraction | part 1/3",
      "videoUrl": "https://www.youtube.com/watch?v=nuRbPv6q2CI",
      "thumbnailUrl": "https://i.ytimg.com/vi/nuRbPv6q2CI/hqdefault.jpg",
      "transcriptPath": "transcripts/nuRbPv6q2CI.txt",
      "lede": "Problem solving with abstraction begins before code. The first step is recognizing what kind of problem you are really facing, then looking for a similar shape you already understand.",
      "sections": [
        {
          "heading": "Abstraction helps transfer experience",
          "body": [
            "The lesson uses stories and code to show that a specific problem can often be lifted into a more general shape. Once you see the shape, you can borrow experience from elsewhere.",
            "In programming, that can mean recognizing that a new feature resembles an existing feature: a projectile and an asteroid both need a position, speed, screen element, movement, display, and removal path.",
            "The video keeps returning to the idea that abstraction is useful because it lets us transfer knowledge. The exact situation may be new, but some part of its structure may be familiar. If we can name the familiar structure, we do not have to start from nothing.",
            "That does not mean every similar-looking thing is identical. A shot is like an asteroid in some ways and unlike it in others. It moves upward rather than downward. It should disappear rather than restart. It is created by the player rather than created in a batch at startup."
          ]
        },
        {
          "heading": "Copying code is not enough",
          "body": [
            "The temptation is to copy the closest existing code and tweak it until it appears to work. That can be a useful first move, but it can also trap you if you do not understand the abstraction behind the copied code.",
            "The better question is: what are the shared responsibilities, and where do they differ?",
            "Copying asteroid code to begin a shot feature is reasonable only if the programmer keeps asking what each copied line means. A class name, an array push, a coordinate, and a restart rule are not just tokens to rename. They are decisions about the object's role in the game.",
            "The useful copy is therefore conceptual before it is textual. We copy the lifecycle shape: create a visual element, create a data object, store it, move it, display it, and remove it when it no longer belongs in the game."
          ]
        },
        {
          "heading": "The feature exposes the structure",
          "body": [
            "Adding shooting to the Asteroids example is not just a feature request. It is a test of whether the code structure can absorb another moving object type without becoming unreadable.",
            "When the current structure resists the change, the resistance is information. It tells you which abstraction level needs work.",
            "The new feature also reveals missing questions in the plan. What key fires? Where should the shot appear? How fast should it move? What happens when it leaves the screen? What happens when it hits an asteroid? Each question belongs to the problem before it belongs to code.",
            "By staying near the surface first, the programmer can write the desired behavior in simple terms. Then the implementation becomes a series of smaller dives into the functions that make each term real."
          ]
        }
      ],
      "takeaways": [
        "Search for the shared shape of a problem before implementing details.",
        "Copying code can help only when you understand what is being copied.",
        "Feature work often reveals missing or mixed abstraction levels.",
        "A new feature is also a way to test whether the existing structure explains itself."
      ],
      "codeRefIds": [
        "asteroids-starter-loop",
        "asteroids-shots"
      ],
      "concepts": [
        "problem solving",
        "analogy",
        "transfer",
        "feature design"
      ]
    },
    {
      "id": "KQEtEPQfdjU",
      "playlistId": "abstraction",
      "playlistTitle": "Abstraction",
      "order": 4,
      "title": "Problem Solving with Abstraction | part 2/3",
      "articleTitle": "Problem Solving with Abstraction | part 2/3",
      "videoUrl": "https://www.youtube.com/watch?v=KQEtEPQfdjU",
      "thumbnailUrl": "https://i.ytimg.com/vi/KQEtEPQfdjU/hqdefault.jpg",
      "transcriptPath": "transcripts/KQEtEPQfdjU.txt",
      "lede": "The second abstraction episode continues the problem-solving thread with a close look at why too many abstraction levels at once make a problem feel larger than it is.",
      "sections": [
        {
          "heading": "The problem is not always the code",
          "body": [
            "The video returns to the Bessie example and the Asteroids feature to show that getting stuck is often a sign of mixed levels of thinking.",
            "A programmer may be thinking about game rules, object lifecycles, DOM elements, collision math, and array mutation all at the same time. Each level is manageable alone; together they become noisy.",
            "The episode makes that mental load concrete by staying with the shooting feature. At the surface level, the feature sounds simple: press a key and fire. One step down, the shot needs to appear in the right place, travel upward, be visible on screen, and disappear when it is no longer relevant. Another step down, that means arrays, DOM nodes, positions, speed values, and removal logic.",
            "If all of those questions are held in the same paragraph of code, the programmer has to keep translating between what the game should do and how a browser element is changed. The work feels difficult partly because the brain is doing coordination, design, implementation, and debugging at once."
          ]
        },
        {
          "heading": "Keep one level in focus",
          "body": [
            "Artists, divers, and programmers all benefit from staying oriented. In code, orientation means knowing whether the current block is describing intent, coordinating operations, or performing a concrete detail.",
            "When a function mixes those levels, the reader has to constantly translate. The function may work, but it costs attention.",
            "A top-level update function should therefore stay close to the language of the game: move the spaceship, move the asteroids, move the shots, check collisions, remove what should be gone, and update the display. It should not suddenly contain the exact selector for a shot element unless that is the level the function has promised to work at.",
            "The same principle applies inside the lower-level functions. A function that removes a shot should do the removal work directly and clearly. It should not also decide the whole game rule for firing, collision, and score. Each place in the program earns trust by staying near one conceptual height."
          ]
        },
        {
          "heading": "Use abstraction as a thinking tool",
          "body": [
            "The goal is not to invent fancy architecture. The goal is to make the current question smaller: what must happen at this level, and which details can be moved behind a name?",
            "Once the right level is selected, the implementation has fewer moving parts in view.",
            "This is where stubs and temporary names are helpful. You can write a high-level call such as createShot or removeShot before every detail exists, then fill it in later. That is not pretending the problem is solved; it is reserving a named place for the detail so the surrounding idea can be understood.",
            "The episode's practical lesson is that abstraction can be used before code is polished. It is a way to make the next decision visible. If the next decision is about game behavior, stay high. If it is about an array index or a DOM element, dive down, solve that detail, and then climb back up."
          ]
        }
      ],
      "takeaways": [
        "Getting stuck can mean you are juggling too many abstraction levels.",
        "A function should usually read at one conceptual height.",
        "Moving detail behind a name reduces mental load when the name is honest.",
        "Stubs and named operations let you plan behavior before every implementation detail is known.",
        "The right abstraction level is the one that matches the decision currently being made."
      ],
      "codeRefIds": [
        "asteroids-shots",
        "asteroids-single-level"
      ],
      "concepts": [
        "single level",
        "mental load",
        "analysis",
        "decomposition"
      ]
    },
    {
      "id": "Fl0jna10f2g",
      "playlistId": "abstraction",
      "playlistTitle": "Abstraction",
      "order": 5,
      "title": "Problem Solving with Abstraction | part 3/3",
      "articleTitle": "Problem Solving with Abstraction | part 3/3",
      "videoUrl": "https://www.youtube.com/watch?v=Fl0jna10f2g",
      "thumbnailUrl": "https://i.ytimg.com/vi/Fl0jna10f2g/hqdefault.jpg",
      "transcriptPath": "transcripts/Fl0jna10f2g.txt",
      "lede": "The third episode turns the abstraction theory back into forward motion: climb up to understand the shape, then climb down deliberately to implement the next concrete step.",
      "sections": [
        {
          "heading": "Use the ladder both ways",
          "body": [
            "The series is not arguing that higher abstraction is always better. Higher abstraction helps you see the problem; lower abstraction is where the computer actually gets instructions.",
            "The useful skill is moving between those levels without mixing them accidentally.",
            "The third episode treats that movement as normal programming work. You climb up to describe the desired behavior, then climb down into concrete code, then climb back up to check whether the new code still matches the behavior you meant to create.",
            "That rhythm is especially important for feature work. A shot is not only an object in an array and not only a visible element on the screen. It is both, plus a rule about when it starts, how it moves, and when it stops existing. The programmer has to visit each level, but not all at once."
          ]
        },
        {
          "heading": "Finish the feature by separating jobs",
          "body": [
            "The shooting feature needs a shot to be created, added to the screen, added to the program state, moved, displayed, and removed. It also needs asteroids to be restarted or removed.",
            "Those steps become readable when each job has a name and the top-level loop can coordinate them without exposing every DOM and array detail.",
            "The useful pattern is almost inverse operations. If a shot is created, there must be a clear way to remove it. If an element is added to the page, there must be a clear place where it leaves the page. If an object is pushed into an array, there must be an equally visible rule for removing it from that array.",
            "The feature therefore becomes less mysterious when it is described as a lifecycle. Create the thing, store the thing, move the thing, show the thing, test the thing against the world, and delete the thing when its job is over. Those are not just implementation steps; they are the shape of the problem."
          ]
        },
        {
          "heading": "Cleanup is part of problem solving",
          "body": [
            "The end of the episode points toward cleanup and fixes because the first working solution is rarely the best readable solution.",
            "Once behavior exists, you can compare function levels, remove accidental duplication, and make the code easier to extend.",
            "This order matters. Before the feature works, cleanup can become another way to avoid the hard problem. After the feature works, cleanup has evidence: the program reveals which pieces repeat, which names are misleading, and which functions are doing two jobs.",
            "The lesson lands on a pragmatic version of abstraction. Do not wait for perfect design, but do not leave a working mess untouched either. Use the working version to understand the right names, then let those names pull the code into a clearer shape."
          ]
        }
      ],
      "takeaways": [
        "Higher abstraction helps analysis; lower abstraction completes implementation.",
        "A working feature can still need structural cleanup.",
        "Single-level functions make later changes less disorienting.",
        "Object lifecycles are easier to reason about when creation and removal are both explicit.",
        "Cleanup is strongest after the behavior gives you something real to compare against."
      ],
      "codeRefIds": [
        "asteroids-shots",
        "asteroids-single-level"
      ],
      "concepts": [
        "implementation",
        "cleanup",
        "single level",
        "iteration"
      ]
    },
    {
      "id": "C04r2qVpOC8",
      "playlistId": "abstraction",
      "playlistTitle": "Abstraction",
      "order": 6,
      "title": "Problem Solving with Abstraction in practice - companion video",
      "articleTitle": "Problem Solving with Abstraction in practice - companion video",
      "videoUrl": "https://www.youtube.com/watch?v=C04r2qVpOC8",
      "thumbnailUrl": "https://i.ytimg.com/vi/C04r2qVpOC8/hqdefault.jpg",
      "transcriptPath": "transcripts/C04r2qVpOC8.txt",
      "lede": "The companion video shows the produced code with explanations stripped back. It is the practical audit trail for the three-part abstraction series.",
      "sections": [
        {
          "heading": "The code is the argument",
          "body": [
            "Without the long conceptual framing, the companion video makes the structural point directly: the code becomes easier to scan when each behavior is named.",
            "Shots, asteroids, spaceship movement, collision checks, and display updates can each be followed as their own small path.",
            "The value of the companion format is that it lets the code carry the lesson. Instead of explaining abstraction through art or metaphor, it shows the result of repeatedly asking what job a block is doing and whether that job belongs at the current level.",
            "That makes the final code a practical reading exercise. You can start with the high-level loop, choose one named function, and then inspect only the details needed for that path. The code invites selective attention instead of forcing a full reread every time."
          ]
        },
        {
          "heading": "The branch history matters",
          "body": [
            "The public Asteroids repository preserves the lesson as a progression. The starter branch is compact, the abstraction branch groups existing behavior, and later branches add and clean up the shooting feature.",
            "That makes the code references more useful than a single final snapshot: you can compare the shape before and after each idea is introduced.",
            "The branch progression also protects the teaching point from becoming vague. The starter version shows the pressure that motivates abstraction. The problem-solving branch shows the feature being added. The single-level cleanup branch shows the same feature after the structure has been made easier to read.",
            "For a reader, that means the repository is not only source code. It is an audit trail of decisions. Each branch answers a different question: what worked before, what changed for the feature, and what had to be renamed or separated afterward."
          ]
        },
        {
          "heading": "Readable code is still code",
          "body": [
            "The final result does not hide the DOM, arrays, or movement math forever. It puts them in named places so the reader can decide how far down to inspect.",
            "That distinction is important because abstraction sometimes gets mistaken for a layer that prevents people from seeing details. In this companion code, the details remain inspectable. They are simply no longer mixed into every other decision.",
            "The result is a program that better supports both learning modes. A beginner can follow the game story from the top. A more experienced programmer can dive into the collision, movement, or cleanup functions and evaluate the implementation choices directly."
          ]
        }
      ],
      "takeaways": [
        "The companion video is best read beside the Asteroids branches.",
        "Feature code becomes clearer when lifecycle operations are explicit.",
        "The final branch improves structure without pretending details vanished.",
        "Branch-by-branch comparison turns the repository into part of the lesson.",
        "Good abstraction makes details easier to find, not impossible to see."
      ],
      "codeRefIds": [
        "asteroids-shots",
        "asteroids-single-level",
        "asteroids-collision-abstraction"
      ],
      "concepts": [
        "code walkthrough",
        "cleanup",
        "branch progression",
        "feature implementation"
      ]
    },
    {
      "id": "g7OqudbMEC4",
      "playlistId": "the-basics",
      "playlistTitle": "The Basics",
      "order": 1,
      "title": "The Basics - Intro",
      "articleTitle": "The Basics - Intro",
      "videoUrl": "https://www.youtube.com/watch?v=g7OqudbMEC4",
      "thumbnailUrl": "https://i.ytimg.com/vi/g7OqudbMEC4/hqdefault.jpg",
      "transcriptPath": "transcripts/g7OqudbMEC4.txt",
      "lede": "The Basics opens with nostalgia for BASIC, but the real topic is deeper: fundamentals, mental models, creativity, and curiosity make it easier to keep learning after the tools change.",
      "sections": [
        {
          "heading": "The basics are not just beginner material",
          "body": [
            "The video begins with BASIC because many programmers first met computers through a simple language built into the machine. But the point is not to return to one old language.",
            "The point is that fundamentals help you form models that survive when the syntax, platform, or framework changes.",
            "The old home-computer experience matters because the machine was small enough to feel graspable. You could turn it on, type a few lines, and see the system respond. That kind of immediate feedback makes the basics feel concrete rather than ceremonial.",
            "Modern programming can hide that feeling behind editors, package managers, build tools, frameworks, and generated files. Those tools are powerful, but they can also make beginners feel as if programming is a collection of rituals. The basics restore a sense of cause and effect: input, state, memory, control flow, output.",
            "The episode therefore uses BASIC as a doorway into a larger claim. A programmer who understands only one tool is always at risk of being reset when the tool changes. A programmer who understands the underlying ideas can recognize old shapes inside new environments."
          ]
        },
        {
          "heading": "Mental models let us use systems",
          "body": [
            "Drawing from Donald Norman, the video argues that programmers are always users of systems made by other people: languages, editors, compilers, runtimes, and operating environments.",
            "You cannot understand every physical detail at once. You need a model of how the system behaves, then you revise that model as feedback and documentation teach you more.",
            "A mental model is not the same thing as a complete technical explanation. You do not need to know every electronic detail of a keyboard to use it well, and you do not need to know every implementation detail of a runtime to begin writing programs. You need a working picture that predicts what will happen next.",
            "That picture has to stay flexible. When the program behaves differently from what the model predicts, the feedback is not only an error message. It is an invitation to repair the model. This is why debugging and learning are so closely related: both are ways of reconciling what you thought the system would do with what it actually did.",
            "For beginners, this is a gentler and more accurate target than memorization. The goal is not to carry every detail in your head. The goal is to build a model strong enough to let you ask better questions when the details surprise you."
          ]
        },
        {
          "heading": "Creativity needs material and tradition",
          "body": [
            "The video also connects programming to creativity. Writing code is not only filling in syntax; designing a solution is creative work.",
            "Experimentation, resistance from the material, and immersion in the history of a craft all make a programmer better at recognizing patterns and inventing variations.",
            "The creative part of programming does not happen in empty space. It happens against constraints: what the computer can do, what the user needs, what the current code already implies, and what the programmer understands well enough to change. Those constraints are not enemies of creativity; they are the material creativity works with.",
            "This is why the episode brings in learning, craft, and examples rather than only syntax. A person becomes creative in a field by seeing many attempts, noticing recurring patterns, and trying variations. The more material you have absorbed, the more likely you are to recognize a promising direction when a new problem appears.",
            "Programming education often separates fundamentals from creativity, as if first you memorize commands and much later you are allowed to design. The video argues for a more connected view: even small programs can be creative when you understand the material well enough to shape it intentionally."
          ]
        },
        {
          "heading": "Curiosity keeps models alive",
          "body": [
            "The Feynman thread is the emotional center: deeper understanding does not remove beauty from a thing. It adds more ways to be interested.",
            "For programming, that means foundations are not a detour from practice. They make it easier to adapt to the next tool without throwing away what you already know.",
            "Curiosity is what keeps fundamentals from becoming dry rules. A curious programmer wants to know why a loop behaves that way, why a browser repaints at that moment, why a compiler complains about a type, or why a small change makes a program easier to read.",
            "That curiosity also protects against tool worship. If you only chase the current framework, each new stack can feel like a new beginning. If you keep asking what idea the tool embodies, the new stack becomes another expression of things you already partly understand.",
            "The basics are therefore not a beginner phase to escape. They are a place to return to whenever the surface of programming gets too noisy. The deeper the basics go, the more routes you have into new material."
          ]
        }
      ],
      "takeaways": [
        "Fundamentals matter because tools keep changing.",
        "A mental model is useful even when it is incomplete, as long as you keep revising it.",
        "Creativity in programming grows through experiment, friction, and craft history.",
        "Curiosity makes lifelong learning feel less like starting over.",
        "Small, understandable systems make cause and effect easier to see.",
        "Debugging is often the act of repairing a mental model."
      ],
      "codeRefIds": [
        "c64-editor-keyloop",
        "c64-abstract-art"
      ],
      "concepts": [
        "fundamentals",
        "mental models",
        "creativity",
        "curiosity",
        "learning"
      ]
    },
    {
      "id": "UsVd67Ys1t4",
      "playlistId": "perfect-programming-process",
      "playlistTitle": "Perfect Programming Process",
      "order": 1,
      "title": "The Perfect Programming Process",
      "articleTitle": "The Perfect Programming Process",
      "videoUrl": "https://www.youtube.com/watch?v=UsVd67Ys1t4",
      "thumbnailUrl": "https://i.ytimg.com/vi/UsVd67Ys1t4/hqdefault.jpg",
      "transcriptPath": "transcripts/UsVd67Ys1t4.txt",
      "lede": "The perfect programming process is a deliberate refusal to start by typing. It treats planning, sketching, and understanding as part of programming, not as delays before programming.",
      "sections": [
        {
          "heading": "Programming starts before the editor",
          "body": [
            "The video responds to the common experience of finishing tutorials and then failing when trying to build something alone.",
            "Its answer is a process: step away from the computer, define the program, reason about the problem, and only then move toward code.",
            "The important correction is that thinking is not a prelude to programming; it is programming. When you decide what the program should do, what the rules are, what counts as finished, and which parts you do not understand yet, you are already shaping the code that will exist later.",
            "Starting in the editor too early makes every uncertainty look like a syntax problem. The cursor is blinking, the file is empty, and the temptation is to type something just to feel progress. The process asks the programmer to resist that pressure long enough to understand what progress should look like.",
            "For a small game, that can mean writing down the user actions, the computer actions, the possible endings, and the order of play. For a larger program, the same idea scales into user stories, data models, state diagrams, or rough interface sketches. The tool changes, but the discipline is the same."
          ]
        },
        {
          "heading": "Paper exposes missing decisions",
          "body": [
            "A notebook forces the programmer to decide what the program should do without being distracted by syntax or tooling.",
            "For a small game such as Tic Tac Toe, that means thinking about the board, moves, win conditions, tie conditions, and user feedback before implementation begins.",
            "Paper is useful because it has no autocomplete. It will not rescue an incomplete idea with a convenient method name. If the plan says the computer selects a field, the next question becomes unavoidable: which field, from what set, and what happens when none are left?",
            "That is exactly the kind of hidden rule that breaks beginner projects. Everyone knows Tic Tac Toe in ordinary life, so it feels obvious. But code does not inherit ordinary understanding. Code needs the implicit rules made explicit: a selected field cannot be selected again, the user and computer use different marks, a game can end by win or tie, and the board state must be checked after each relevant move.",
            "The notebook stage also gives permission to fake uncertain parts on purpose. If the random computer move is not solved yet, the plan can mark it as a blank to fill later. That is very different from accidentally ignoring it while writing code."
          ]
        },
        {
          "heading": "The process is tested by failure",
          "body": [
            "The later TicTacToe videos matter because they show the process under stress. The first attempt goes badly when the early steps are rushed; the second works when the process is followed more honestly.",
            "That contrast makes the process less like advice and more like an experiment with evidence.",
            "The failed attempt is not included for embarrassment. It is included because a process is only meaningful if it explains failure as well as success. When the programmer skips problem analysis, missing rules reappear as bugs. When the rules are written out, the implementation has a map.",
            "The successful attempt still contains repetitive and inelegant code, which is part of the lesson. The first goal is not to prove cleverness. The first goal is to produce a program that behaves according to the plan. Elegance becomes a later refactoring problem after correctness exists.",
            "This is why the process deserves the exaggerated title. It is not perfect because it produces perfect code on the first pass. It is perfect because it gives the programmer a way to move: understand the problem, describe the solution, fill the blanks, test what was planned, and improve from a working baseline."
          ]
        }
      ],
      "takeaways": [
        "Do not treat planning as something separate from programming.",
        "A simple game still needs explicit rules before code.",
        "The value of a process is visible when things go wrong.",
        "Paper planning exposes hidden assumptions before they become bugs.",
        "Faking a hard part intentionally is better than discovering later that the part was never defined.",
        "Correctness gives refactoring something stable to improve."
      ],
      "codeRefIds": [
        "tictactoe-poor-selection",
        "tictactoe-right-winner"
      ],
      "concepts": [
        "process",
        "planning",
        "paper first",
        "implementation",
        "testing"
      ]
    },
    {
      "id": "52ia2C0XyRM",
      "playlistId": "perfect-programming-process",
      "playlistTitle": "Perfect Programming Process",
      "order": 2,
      "title": "Project TicTacToe - done poorly",
      "articleTitle": "Project TicTacToe - done poorly",
      "videoUrl": "https://www.youtube.com/watch?v=52ia2C0XyRM",
      "thumbnailUrl": "https://i.ytimg.com/vi/52ia2C0XyRM/hqdefault.jpg",
      "transcriptPath": "transcripts/52ia2C0XyRM.txt",
      "lede": "The failed TicTacToe attempt is useful because it is honest. It shows what happens when the process is named but not really followed.",
      "sections": [
        {
          "heading": "A vague plan creates vague code",
          "body": [
            "The project starts with the idea of demonstrating the process, but the implementation drifts toward improvising in the browser.",
            "Because the rules are not fully enumerated up front, the code checks only some win combinations and leaves tie behavior fragile.",
            "The visible failure begins with ordinary confidence. Tic Tac Toe seems small enough to hold in memory, so the plan can feel unnecessary. But the code quickly proves that the game has more rules than the vague idea contained.",
            "The win check is the clearest example. A player can win across three rows, three columns, or two diagonals. Missing even one combination means the program's model of the game is not the actual game. The bug is not that one line was mistyped; the bug is that the full matrix of possibilities was never written down.",
            "The random computer move has the same problem. Selecting a number from one to nine is easy, but selecting a valid move is not the same task. The code needs a reliable definition of which fields are still available and what should happen when that list becomes empty."
          ]
        },
        {
          "heading": "The bug is a symptom",
          "body": [
            "The public repository documents the failure directly: the game can loop forever on a tie and does not cover all winning combinations.",
            "Those are not isolated typos. They come from a missing model of the complete game state.",
            "The tie bug is especially revealing because it is a state problem. If the board is full and no one has won, the game is over. If the program does not recognize that state, it keeps trying to make a move that cannot exist. The result is a loop that expresses confusion rather than a planned rule.",
            "The repository code also shows how quickly local fixes can become misleading. A while loop that keeps trying random fields looks reasonable only if there will eventually be a valid field. Once the board can be full, the assumption collapses. The code needs a planned exit, not more attempts.",
            "That is why the failure belongs in the learning material. It separates code that happens to work during a short manual test from code that represents the whole problem. A program can appear alive while still lacking the rules that make it correct."
          ]
        },
        {
          "heading": "Failure becomes data",
          "body": [
            "The value of this video is that it gives the next attempt something concrete to fix. The process has to be followed more seriously, especially in the early paper-and-rules phase.",
            "A failed attempt can be productive when it is inspected instead of hidden. This one identifies exactly what the next plan must include: all winning lines, a complete available-field model, a tie condition, and a sequence that checks endings at the right moments.",
            "It also teaches a discipline about randomness. Randomness should not be used as a substitute for knowing the valid choices. The program should first construct or identify the set of legal moves, then choose one from that set. That principle applies far beyond Tic Tac Toe.",
            "By the end, the failure has stopped being merely frustrating. It has become a specification for the next version. The programmer now knows which assumptions were missing and can return to the process with sharper questions."
          ]
        }
      ],
      "takeaways": [
        "Skipping problem analysis does not save time; it moves the cost into debugging.",
        "Random selection code needs a defined empty-board and full-board behavior.",
        "Incomplete win checks are a planning failure before they are a code failure.",
        "A game state must include endings, not only moves.",
        "Random choice should select from valid options, not generate invalid guesses until luck helps.",
        "A failed version can become a precise checklist for the next attempt."
      ],
      "codeRefIds": [
        "tictactoe-poor-win-checks",
        "tictactoe-poor-selection"
      ],
      "concepts": [
        "failure",
        "planning debt",
        "bugs",
        "TicTacToe"
      ]
    },
    {
      "id": "ertvnBmwPTY",
      "playlistId": "perfect-programming-process",
      "playlistTitle": "Perfect Programming Process",
      "order": 3,
      "title": "Project TicTacToe - done right",
      "articleTitle": "Project TicTacToe - done right",
      "videoUrl": "https://www.youtube.com/watch?v=ertvnBmwPTY",
      "thumbnailUrl": "https://i.ytimg.com/vi/ertvnBmwPTY/hqdefault.jpg",
      "transcriptPath": "transcripts/ertvnBmwPTY.txt",
      "lede": "The second TicTacToe attempt succeeds by trusting the process more completely: plan the game, enumerate the rules, then implement the plain version before trying to make it elegant.",
      "sections": [
        {
          "heading": "Trust the early steps",
          "body": [
            "The video explicitly returns to the process after the failed attempt. This time the notebook work matters: the board, available moves, win states, and tie state are made concrete before coding.",
            "That extra attention prevents the programmer from relying on a vague mental picture of the game.",
            "The second attempt begins by treating Tic Tac Toe as a problem to be modeled, not a toy that everyone already understands. The board positions are numbered, the sequence of turns is described, and the conditions for ending the game are written before the implementation has to carry them.",
            "That changes the experience of coding. Instead of asking what to type next in a blank file, the programmer can ask which part of the plan is being filled. Selecting a field, marking it, finding available fields, checking a winner, and ending the game each become separate blanks.",
            "The notebook also protects against a common beginner trap: solving the first visible subproblem and forgetting the rest. Random selection is not allowed to become the whole project. It is one step inside a larger sequence that still includes ties, wins, and disabling used fields."
          ]
        },
        {
          "heading": "Correctness before elegance",
          "body": [
            "The final code is repetitive, and the repository says so. But the point of this attempt is not abstraction or beauty. It is to make the program work by covering the actual game rules.",
            "That is an important distinction: a correct repetitive version is a better starting point than an elegant incomplete one.",
            "The win checks are written out plainly because plainness is useful at this stage. Rows, columns, and diagonals are all visible in the code. That makes the program longer, but it also makes the rule coverage inspectable. You can look at the code and see whether every winning line has been represented.",
            "The computer move follows the same practical principle. Instead of choosing any random number and hoping it works, the program first collects the currently available fields and then chooses randomly from that list. The code now matches the actual rule: the computer selects a random available field.",
            "The successful version also includes the small behavioral details that the failed version missed. Used fields stop being available. The user cannot keep clicking after the game is over. A full board without a winner becomes a tie. These details are not polish; they are part of the game."
          ]
        },
        {
          "heading": "The process creates a refactoring target",
          "body": [
            "Once the program works, the duplication becomes visible and safe to improve later.",
            "The successful version therefore becomes both an end point for the process lesson and a starting point for future abstraction lessons.",
            "This is a mature stopping point. The code is not perfect, but the problem is now understood well enough that improvement can be deliberate. Repetition in the win checks can later become a reusable function or a list of winning combinations. Repeated event-listener removal can later become a helper. The game flow can later be separated into clearer responsibilities.",
            "Those improvements are easier precisely because the program already works. Refactoring a broken program can accidentally mix two tasks: discovering the rules and changing the structure. Refactoring a working program lets the programmer compare each change against known behavior.",
            "The broader lesson is that the process does not end at the first working version. It creates a stable version that makes the next learning step possible. In this playlist, that next step points naturally back toward abstraction, separation of concerns, and cleaner structure."
          ]
        }
      ],
      "takeaways": [
        "A complete model of the rules matters more than clever code.",
        "Working, repetitive code can be a valid first success.",
        "Refactoring is easier after correctness is established.",
        "A written plan turns implementation into filling known blanks.",
        "Visible repetition can be useful before it becomes a refactoring target.",
        "The first success should preserve behavior clearly enough for later improvements."
      ],
      "codeRefIds": [
        "tictactoe-right-winner",
        "tictactoe-right-computer"
      ],
      "concepts": [
        "process",
        "TicTacToe",
        "working software",
        "iteration"
      ]
    }
  ],
  "codeReferences": [
    {
      "id": "asteroids-starter-loop",
      "title": "Starter loop before abstraction",
      "repo": "asteroids",
      "branch": "00-starter",
      "file": "script.js",
      "startLine": 59,
      "endLine": 101,
      "note": "The original loop performs movement, collision, damage, and display in one dense flow.",
      "url": "https://github.com/programming2point0/asteroids/blob/00-starter/script.js#L59-L101",
      "code": "function tick(timestamp) {\n  requestAnimationFrame(tick);\n\n  const delta = (timestamp - lastTime) / 1000;\n  lastTime = timestamp;\n\n  if (controls.left && object.x > object.w / 2) {\n    object.x -= object.s * delta;\n  } else if (controls.right && object.x < 770) {\n    object.x += object.s * delta;\n  }\n\n  if (controls.up && object.y > object.h / 2) {\n    object.y -= object.s * delta;\n  } else if (controls.down && object.y < 410) {\n    object.y += object.s * delta;\n  }\n\n  for (let i = 0; i < objects.length; i++) {\n    objects[i].y += objects[i].s * delta;\n    if (objects[i].y > 450) {\n      objects[i].y = -30;\n      objects[i].x = Math.floor(Math.random() * 750);\n    }\n  }\n\n  for (let i = 0; i < objects.length; i++) {\n    if (Math.sqrt(Math.pow(objects[i].x - object.x, 2) +\n        Math.pow(objects[i].y - object.y, 2))\n        < objects[i].w / 2 + object.w / 2) {\n      objects[i].s *= 0.95;\n      object.hl--;\n    }\n  }\n\n  const visualSpaceShip = document.querySelector(\".spaceship\");\n  visualSpaceShip.style.translate = `${object.x - object.w / 2}px ${object.y - object.h / 2}px`;\n\n  for (let i = 0; i < objects.length; i++) {\n    objects[i].visual.style.translate = `${objects[i].x - 25}px ${objects[i].y - 25}px`;\n  }\n\n  document.querySelector(\"#score #number\").textContent = String(points).padStart(3, \"0\");"
    },
    {
      "id": "asteroids-collision-abstraction",
      "title": "Collision work behind names",
      "repo": "asteroids",
      "branch": "01-abstraction",
      "file": "script.js",
      "startLine": 95,
      "endLine": 121,
      "note": "The tick loop reads at a higher level while the collision formula remains inspectable.",
      "url": "https://github.com/programming2point0/asteroids/blob/01-abstraction/script.js#L95-L121",
      "code": "  moveSpaceship(delta);\n  moveAsteroids(delta);\n\n  for (const asteroid of asteroids) {\n    if (isColliding(asteroid, spaceship)) {\n      slowDown(asteroid);\n      loseHealth(spaceship);\n    }\n  }\n\n  function slowDown(asteroid) {\n    asteroid.s *= 0.95;\n  }\n\n  function loseHealth(spaceship) {\n    spaceship.hl--;\n  }\n\n  function isColliding(asteroid, spaceship) {\n    return distance(asteroid, spaceship) < combinedSize(asteroid, spaceship)\n  }\n\n  function distance(objA, objB) {\n    return Math.sqrt(Math.pow(objA.x - objB.x, 2) + Math.pow(objA.y - objB.y, 2));\n  }\n\n  function combinedSize(objA, objB) {"
    },
    {
      "id": "asteroids-shots",
      "title": "Projectile lifecycle",
      "repo": "asteroids",
      "branch": "02-problem-solving",
      "file": "script.js",
      "startLine": 34,
      "endLine": 86,
      "note": "Adding shots reveals the shared object lifecycle: create, store, move, display, and remove.",
      "url": "https://github.com/programming2point0/asteroids/blob/02-problem-solving/script.js#L34-L86",
      "code": "function fireShot() {\n    const div = addShotToScreen();\n    addShotToList(div);\n}\n\nfunction addShotToList(div) {\n  const shot = {\n    x: spaceship.x,\n    y: spaceship.y,\n    w: 50,\n    h: 50,\n    s: Math.random() * 100 + 50,\n    visual: div,\n  };\n  shots.push(shot);\n}\n\nfunction addShotToScreen() {\n  const div = document.createElement(\"div\");\n  div.classList.add(\"shot\");\n\n  document.querySelector(\"#gamefield\").insertAdjacentElement(\"beforeend\", div);\n  return div;\n}\n\nfunction moveShots(delta) {\n  for (const shot of shots) {\n    shot.y -= shot.s * delta;\n    if (shot.y < 0) {\n      removeShot(shot);\n    }\n  }\n}\n\nfunction removeShot(shot) {\n  removeShotFromScreen(shot);\n  removeShotFromList(shot);\n}\n\nfunction removeShotFromScreen(shot) {\n  shot.visual.remove();\n}\n\nfunction removeShotFromList(shot) {\n  const index = shots.indexOf(shot);\n  shots.splice(index,1);\n}\n\nfunction displayShots() {\n  for (const shot of shots) {\n    shot.visual.style.translate = `${shot.x - 25}px ${shot.y - 25}px`;\n  }\n}"
    },
    {
      "id": "asteroids-single-level",
      "title": "Single level of abstraction cleanup",
      "repo": "asteroids",
      "branch": "03-single-level-of-abstraction",
      "file": "script.js",
      "startLine": 90,
      "endLine": 154,
      "note": "The asteroid functions are separated so each step stays close to one conceptual level.",
      "url": "https://github.com/programming2point0/asteroids/blob/03-single-level-of-abstraction/script.js#L90-L154",
      "code": "function createAsteroids() {\n  for (let i = 0; i < 10; i++) {\n    createAsteroid();\n  }\n}\n\nfunction createAsteroid() {\n  const div = addAsteroidToScreen();\n  addAsteroidToList(div);\n}\n\nfunction addAsteroidToList(div) {\n  const asteroid = {\n    y: 0,\n    x: 0,\n    w: 50,\n    h: 50,\n    s: Math.random() * 100 + 50,\n    visual: div,\n  };\n  restartAsteroid(asteroid);\n\n  asteroids.push(asteroid);\n}\n\nfunction addAsteroidToScreen() {\n  const div = document.createElement(\"div\");\n  div.classList.add(\"asteroid\");\n\n  document.querySelector(\"#gamefield\").insertAdjacentElement(\"beforeend\", div);\n  return div;\n}\n\nfunction moveAsteroids(delta) {\n  for (const asteroid of asteroids) {\n    asteroid.y += asteroid.s * delta;\n    if (asteroid.y > 450) {\n      restartAsteroid(asteroid);\n    }\n  }\n}\n\nfunction restartAsteroid(asteroid) {\n  asteroid.y = -30;\n  asteroid.x = Math.floor(Math.random() * 750);\n}\n\nfunction removeAsteroid(asteroid) {\n  removeAsteroidFromScreen(asteroid);\n  removeAsteroidFromList(asteroid);\n}\n\nfunction removeAsteroidFromScreen(asteroid) {\n  asteroid.visual.remove();\n}\n\nfunction removeAsteroidFromList(asteroid) {\n  const index = asteroids.indexOf(asteroid);\n  asteroids.splice(index,1);\n}\n\nfunction displayAsteroids() {\n  for (const asteroid of asteroids) {\n    asteroid.visual.style.translate = `${asteroid.x - 25}px ${asteroid.y - 25}px`;\n  }"
    },
    {
      "id": "c64-abstract-art",
      "title": "C64 abstract art program",
      "repo": "c64-abstraction",
      "branch": "main",
      "file": "abstract-art.bas",
      "startLine": 1,
      "endLine": 34,
      "note": "The BASIC listing turns random lines, circles, and rectangles into a small abstraction machine.",
      "url": "https://github.com/programming2point0/c64-abstraction/blob/main/abstract-art.bas#L1-L34",
      "code": "10 X=0:Y=0:R=0:T=0:C=0:F=0\n20 COLOUR 1,1:HIRES 0,1:MULTI 0,2,6\n30 REM DECIDE ON COLOR\n31 IFRND(1)>.05GOTO35\n32 REM 5% CHANCE FOR NEW COLORS\n33 LOW COL 0,INT(RND(1)*15),INT(RND(1)*15)\n35 C = INT(RND(1)*3)+1\n40 REM DECIDE ON TYPE\n41 T=RND(1)\n42 IFT<.35THENGOSUB200:GOTO60\n43 IFT<.66THENGOSUB300:GOTO50\n44 IFT<1THENGOSUB400:GOTO50\n45 REM - ADD TRIANGLE! -\n50 REM DECIDE TO FILL OR NOT\n51 IF R>100 OR RND(1)<.5 GOTO60\n52 F=C+1:IFF=4THENF=1\n53 PAINT X+1,Y+1,F\n60 FORA=0TO300:NEXTA\n70 GOTO 30\n200 REM *** LINE ***\n210 X1=INT(RND(1)*160):Y1=INT(RND(1)*200)\n220 X2=INT(RND(1)*160):Y2=INT(RND(1)*200)\n230 LINE X1,Y1,X2,Y2,C\n240 RETURN\n300 REM *** CIRCLE ***\n310 X=8+INT(RND(1)*152):Y=8+INT(RND(1)*192)\n320 R=4+INT(RND(1)*40)\n330 CIRCLE X,Y,R,R*1.6,C\n340 RETURN\n400 REM *** RECTANGLE ***\n410 X=INT(RND(1)*152):Y=INT(RND(1)*192)\n420 W=8+INT(RND(1)*(152-X)):H=8+INT(RND(1)*(192-Y))\n430 REC X,Y,W,H,C\n440 RETURN"
    },
    {
      "id": "c64-editor-keyloop",
      "title": "C64 editor input loop",
      "repo": "c64-c-editor",
      "branch": "main",
      "file": "main.asm",
      "startLine": 51,
      "endLine": 105,
      "note": "A concrete example of a system image: key codes become editor actions through a loop.",
      "url": "https://github.com/programming2point0/c64-c-editor/blob/main/main.asm#L51-L105",
      "code": "getkey: jsr GETIN\n        cmp #$00\n        beq getkey\n/*\n        ldx #$01\n        ldy #$00\n        jsr st_setpos\n        pha\n        jsr st_print_hex        // only for debugging\n        pla\n*/\n        cmp #$13\n        beq key_crsr_home\n//        cmp #$93\n//        beq key_crsr_sh_home\n        cmp #$91\n        beq key_crsr_up\n        cmp #$11\n        beq key_crsr_down\n        cmp #$9d\n        beq key_crsr_left\n        cmp #$1d\n        beq key_crsr_right\n\n        cmp #$0d\n        beq key_return\n        cmp #$14\n        beq key_delete          // aka backspace\n        cmp #$94\n        beq key_insert\n\n        // Debugging tools for displaying memory, erasing line and entering complete line\n        cmp #$85\n        beq key_f1\n        cmp #$89\n        beq key_f2\n        cmp #$86\n        beq key_f3\n\n        cmp #$8a\n        beq key_f4\n        cmp #$87\n        beq key_f5\n/*        cmp #$8b\n        beq key_f6\n        cmp #$88\n        beq key_f7\n        cmp #$8c\n        beq key_f8\n*/\n        // todo: only if printable char\n        jsr printchar\n        jsr color_line\nnxtchar:jsr cursor_update\n        jmp getkey"
    },
    {
      "id": "tictactoe-poor-win-checks",
      "title": "Incomplete win checks",
      "repo": "TicTacToe-poorly",
      "branch": "main",
      "file": "script.js",
      "startLine": 25,
      "endLine": 44,
      "note": "Only a subset of possible wins is checked, which matches the repo's documented failure.",
      "url": "https://github.com/programming2point0/TicTacToe-poorly/blob/main/script.js#L25-L44",
      "code": "    // check if user is a winner\n    // - check if there are three X's in a row\n    if(\n        document.querySelector(\".field:nth-child(1)\").textContent == \"X\" &&\n        document.querySelector(\".field:nth-child(2)\").textContent == \"X\" &&\n        document.querySelector(\".field:nth-child(3)\").textContent == \"X\" ) {\n        console.log(\"Three in a row!\");\n        youWon();\n         // - check if there are three X's in a column\n    } else if( document.querySelector(\".field:nth-child(1)\").textContent == \"X\" &&\n        document.querySelector(\".field:nth-child(4)\").textContent == \"X\" &&\n        document.querySelector(\".field:nth-child(7)\").textContent == \"X\" ) {\n        console.log(\"Three in a column!\");\n        youWon();\n        // - check if there are three X's diagonally\n    } else if(document.querySelector(\".field:nth-child(1)\").textContent == \"X\" &&\n        document.querySelector(\".field:nth-child(5)\").textContent == \"X\" &&\n        document.querySelector(\".field:nth-child(9)\").textContent == \"X\" ) {\n        console.log(\"Three diagonally\");\n        youWon();"
    },
    {
      "id": "tictactoe-poor-selection",
      "title": "Random field selection problem",
      "repo": "TicTacToe-poorly",
      "branch": "main",
      "file": "script.js",
      "startLine": 46,
      "endLine": 53,
      "note": "The loop keeps looking for an enabled field, but it has no complete tie-state escape.",
      "url": "https://github.com/programming2point0/TicTacToe-poorly/blob/main/script.js#L46-L53",
      "code": "        // select a random field\n        let randomNumber = Math.ceil(Math.random()*9);\n        let randomField = document.querySelector(`.field:nth-child(${randomNumber}`);\n        while( randomField.disabled == true ) {\n            console.log(\"selected disabled field: \" + randomNumber)\n            randomNumber = Math.ceil(Math.random()*9);\n            randomField = document.querySelector(`.field:nth-child(${randomNumber}`);\n        }"
    },
    {
      "id": "tictactoe-right-winner",
      "title": "Complete user win and tie handling",
      "repo": "TicTacToe",
      "branch": "main",
      "file": "script.js",
      "startLine": 19,
      "endLine": 65,
      "note": "The second attempt explicitly checks rows, columns, diagonals, and tie behavior.",
      "url": "https://github.com/programming2point0/TicTacToe/blob/main/script.js#L19-L65",
      "code": "    // check winner ... for O\n    const f1 = document.querySelector(\"#field1\").textContent;\n    const f2 = document.querySelector(\"#field2\").textContent;\n    const f3 = document.querySelector(\"#field3\").textContent;\n    const f4 = document.querySelector(\"#field4\").textContent;\n    const f5 = document.querySelector(\"#field5\").textContent;\n    const f6 = document.querySelector(\"#field6\").textContent;\n    const f7 = document.querySelector(\"#field7\").textContent;\n    const f8 = document.querySelector(\"#field8\").textContent;\n    const f9 = document.querySelector(\"#field9\").textContent;\n    // - rows: 1 & 2 & 3 or 4 & 5 & 6 or 7 & 8 & 9\n    if ((f1 == 'O' && f2 == 'O' && f3 == 'O')\n        || (f4 == 'O' && f5 == 'O' && f6 == 'O')\n        || (f7 == 'O' && f8 == 'O' && f9 == 'O')\n        // - columns: 1 & 4 & 7 or 2 & 5 & 8 or 3 & 6 & 9\n        || (f1 == 'O' && f4 == 'O' && f7 == 'O')\n        || (f2 == 'O' && f5 == 'O' && f8 == 'O')\n        || (f3 == 'O' && f6 == 'O' && f9 == 'O')\n        // - diagonals: 1 & 5 & 9 or 3 & 5 & 7\n        || (f1 == 'O' && f5 == 'O' && f9 == 'O')\n        || (f3 == 'O' && f5 == 'O' && f7 == 'O')\n    ) {\n          // if user is winner:\n        // - end game: user won!\n        console.log(\"Winner !\");\n        document.querySelector(\"h2\").textContent = \"GAME OVER - You won!\";\n        document.querySelector(\"#field1\").removeEventListener(\"click\", clickedField);\n        document.querySelector(\"#field2\").removeEventListener(\"click\", clickedField);\n        document.querySelector(\"#field3\").removeEventListener(\"click\", clickedField);\n        document.querySelector(\"#field4\").removeEventListener(\"click\", clickedField);\n        document.querySelector(\"#field5\").removeEventListener(\"click\", clickedField);\n        document.querySelector(\"#field6\").removeEventListener(\"click\", clickedField);\n        document.querySelector(\"#field7\").removeEventListener(\"click\", clickedField);\n        document.querySelector(\"#field8\").removeEventListener(\"click\", clickedField);\n        document.querySelector(\"#field9\").removeEventListener(\"click\", clickedField);\n    } else {\n        // computer selects a random available field\n        const availableFields = document.querySelectorAll(\".field.available\");\n\n        const randomNumber = Math.floor(Math.random() * availableFields.length);\n        const randomField = availableFields[randomNumber];\n\n        // if no field is available:\n        if (!randomField) {\n            // - end game: tie\n            console.log(\"end game in a tie\");\n            document.querySelector(\"h2\").textContent = \"GAME OVER - it's a tie!\";"
    },
    {
      "id": "tictactoe-right-computer",
      "title": "Available-field computer move",
      "repo": "TicTacToe",
      "branch": "main",
      "file": "script.js",
      "startLine": 55,
      "endLine": 108,
      "note": "The working version chooses among available fields and then checks the computer's win states.",
      "url": "https://github.com/programming2point0/TicTacToe/blob/main/script.js#L55-L108",
      "code": "        // computer selects a random available field\n        const availableFields = document.querySelectorAll(\".field.available\");\n\n        const randomNumber = Math.floor(Math.random() * availableFields.length);\n        const randomField = availableFields[randomNumber];\n\n        // if no field is available:\n        if (!randomField) {\n            // - end game: tie\n            console.log(\"end game in a tie\");\n            document.querySelector(\"h2\").textContent = \"GAME OVER - it's a tie!\";\n        } else {\n\n            // mark selected field with an 'X'\n            randomField.textContent = \"X\";\n            randomField.classList.remove(\"available\");\n            randomField.removeEventListener(\"click\", clickedField);\n\n            // check winner ... for X\n            const f1 = document.querySelector(\"#field1\").textContent;\n            const f2 = document.querySelector(\"#field2\").textContent;\n            const f3 = document.querySelector(\"#field3\").textContent;\n            const f4 = document.querySelector(\"#field4\").textContent;\n            const f5 = document.querySelector(\"#field5\").textContent;\n            const f6 = document.querySelector(\"#field6\").textContent;\n            const f7 = document.querySelector(\"#field7\").textContent;\n            const f8 = document.querySelector(\"#field8\").textContent;\n            const f9 = document.querySelector(\"#field9\").textContent;\n            // - rows: 1 & 2 & 3 or 4 & 5 & 6 or 7 & 8 & 9\n            if ((f1 == 'X' && f2 == 'X' && f3 == 'X')\n                || (f4 == 'X' && f5 == 'X' && f6 == 'X')\n                || (f7 == 'X' && f8 == 'X' && f9 == 'X')\n                // - columns: 1 & 4 & 7 or 2 & 5 & 8 or 3 & 6 & 9\n                || (f1 == 'X' && f4 == 'X' && f7 == 'X')\n                || (f2 == 'X' && f5 == 'X' && f8 == 'X')\n                || (f3 == 'X' && f6 == 'X' && f9 == 'X')\n                // - diagonals: 1 & 5 & 9 or 3 & 5 & 7\n                || (f1 == 'X' && f5 == 'X' && f9 == 'X')\n                || (f3 == 'X' && f5 == 'X' && f7 == 'X')\n            ) {\n                // if computer is winner:\n                // - end game: computer won!\n                console.log(\"Winner !\");\n                document.querySelector(\"h2\").textContent = \"GAME OVER - Computer won!\";\n                document.querySelector(\"#field1\").removeEventListener(\"click\", clickedField);\n                document.querySelector(\"#field2\").removeEventListener(\"click\", clickedField);\n                document.querySelector(\"#field3\").removeEventListener(\"click\", clickedField);\n                document.querySelector(\"#field4\").removeEventListener(\"click\", clickedField);\n                document.querySelector(\"#field5\").removeEventListener(\"click\", clickedField);\n                document.querySelector(\"#field6\").removeEventListener(\"click\", clickedField);\n                document.querySelector(\"#field7\").removeEventListener(\"click\", clickedField);\n                document.querySelector(\"#field8\").removeEventListener(\"click\", clickedField);\n                document.querySelector(\"#field9\").removeEventListener(\"click\", clickedField);\n            }"
    }
  ]
} satisfies SiteData;
