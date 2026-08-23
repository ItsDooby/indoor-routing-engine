/**
 * Indoor Navigation Map Data
 * Objectives:
 * 1. Define pixelsPerMeter for real-world distance calculation.
 * 2. Define node network (Spine and Ribs topology).
 * 3. Define edges with weights for A* path calculation.
 */
const graphData = {
  "pixelsPerMeter": 30,
  "nodes": {
    "entry":   { "id": "entry",   "x": 100, "y": 500, "type": "hallway", "name": "Main Entrance" },
    "spine_1": { "id": "spine_1", "x": 100, "y": 350, "type": "hallway", "name": "Hallway Hub" },
    "room_101":{ "id": "room_101", "x": 250, "y": 350, "type": "poi",     "name": "Classroom 101", "side": "right" }
  },
  "edges": [
    { "from": "entry",   "to": "spine_1", "weight": 150 },
    { "from": "spine_1", "to": "room_101", "weight": 150 }
  ]
};
