Indoor Routing Engine & Vector CAD CMS
A browser-based indoor navigation prototype and custom vector graphics CMS. Built to handle indoor routing where traditional GPS fails, utilizing an A* pathfinding algorithm and a custom typed graph topology. Target deployment includes large-scale high-footfall environments such as university campuses, hospitals, and the Masjid al-Haram in Mecca.
The Problem
Indoor navigation is notoriously difficult. GPS fails through concrete, and BLE (Bluetooth) beacons require heavy hardware deployment, battery maintenance, and complex signal filtering. I built this system to:

Provide hardware-free indoor positioning using deterministic graph mapping.
Calculate precise, real-world walking distances.
Enable facility managers to map massive floor plans rapidly via a custom CAD-style web interface.

Architecture
The application is engineered as an MVC system using an Immediate Mode render loop, avoiding the memory overhead of heavy DOM elements.

Model: A typed JSON graph separating continuous hallways ("spine") from dead-end rooms ("ribs").
View: HTML5 Canvas running a 60fps render loop driven strictly by the JSON state.
Controller: Custom raycasting using line-point distance formulas to detect mouse interactions over vector paths.
Localization: Leverages existing visual infrastructure (e.g., doorway barcodes) for ground-truth positioning without radio signal interference.

Technical Challenges & Solutions
Stateless Canvas Hit-Detection: Because the HTML5 Canvas lacks DOM nodes and CSS hover states, I implemented custom hit-detection using the Pythagorean theorem to calculate the distance between mouse coordinates and invisible vector segments.
Bezier Curve Snapping: Standard vector projection snapped room connectors to the straight chord of curved paths, breaking the geometry. I wrote a sampling algorithm to test points along the quadratic curve, find the nearest pixel, and proportionally split the bezier offset across the newly divided path segments.
Event Overloading: Using left-click for both creation and selection caused accidental path branches. I separated the physics: LMB handles the continuous drawing state machine, while RMB overrides the browser context menu to handle raycasting selection and spatial transformation.
Architectural Trade-offs
Vector Math vs. Hidden DOM: Overlaying hidden HTML buttons for hit-detection creates overlapping rectangular bounding boxes, breaking on diagonal paths. Pure vector math enables pixel-perfect selection on intersecting lines and prevents the browser from crashing under DOM bloat.
Leaf Nodes vs. Standard Graph Routing: Standard pathfinding will route users through private rooms if it mathematically saves distance (the "bathroom shortcut"). By strictly typing rooms as leaf nodes (edge degree of 1), I prevented the A* algorithm from making illogical routing choices at the architectural level, avoiding manual code patches.
Engineering Outcomes

Memory Allocation: Implemented a LIFO dual-stack state machine (Undo/Redo), utilizing deep copying to perfectly isolate map states and prevent pointer mutation.
Computational Geometry: Implemented vector projection and Bezier sampling to solve dynamic snapping errors in immediate mode rendering.
