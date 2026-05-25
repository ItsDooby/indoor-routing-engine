# Indoor Routing Engine 🗺️

A lightweight, browser-based indoor navigation prototype built with standard web technologies. This project features a custom-built Mapping CMS and implements the A* pathfinding algorithm to route users through complex indoor environments using a "Spine and Ribs" node topology.

## 🚀 Features

* **Custom Mapping CMS:** A click-and-draw interface to visually map out hallways, drop points of interest (rooms, elevators), and connect paths.
* **A* Pathfinding Algorithm:** Calculates the absolute shortest path between any two points on the map.
* **Doorway-Scale Calibration:** A built-in tool that uses standard physical doorways (1m or 2m) to calculate the `pixelsPerMeter` scale, ensuring accurate real-world distance and ETA calculations.
* **Auto-JSON Generation:** Compiles the visual map into a highly structured JSON graph format ready for database storage or mobile app consumption.

## 🛠️ Tech Stack

* **Frontend:** HTML5 Canvas, Vanilla JavaScript, CSS3
* **Logic:** Custom A* Graph Theory Implementation
* **Data Structure:** JSON

## 🏃‍♂️ How to Run Locally

1. Clone this repository.
2. Open `index.html` in any modern web browser.
3. Use the **CMS Mode** buttons to draw your map and set your scale.
4. Click **Generate JSON** to output the routing graph data.
