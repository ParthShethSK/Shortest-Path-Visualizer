# Shortest Path Visualizer

This project is a Shortest Path Visualizer implemented in JavaScript, HTML, and CSS. It allows users to visualize the shortest path between a start and a destination point on a grid while avoiding obstacles. The application supports multiple algorithms to find the shortest path, including Breadth-First Search (BFS), Depth-First Search (DFS), Bidirectional Search, Dijkstra's Algorithm, and Bellman-Ford Algorithm.

![screenshot](https://github.com/ParthShethSK/Shortest-Path-Visualizer/assets/75533289/94d70e8d-cb88-44ee-8233-cf6dd1ddf188)


## Features

- Interactive grid to mark the start and destination points.
- Add obstacles to the grid.
- Visualize the shortest path using
various algorithms.
- Clear the grid to start fresh.

## Table of Contents
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Supported Algorithms](#supported-algorithms)
- [License](#license)

## Getting Started

### Prerequisites
- Web browser (Google Chrome, Mozilla Firefox, etc.)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/ParthShethSK/Shortest-Path-Visualizer.git

### Usage

1. Open the index.html file in your preferred web browser.

2. Mark Start and Destination Points:
   - Click on the grid cells to mark the start and destination points.
   - Obstacles can also be added by clicking on the grid cells.

3. Choosing an Algorithm:
   Select your preferred algorithm from the dropdown menu:
   - Breadth-First Search (BFS)
   - Depth-First Search (DFS)
   - Bidirectional Search
   - Dijkstra's Algorithm
   - Bellman-Ford Algorithm

4. Finding the Shortest Path:
   Click the "Find Path" button to visualize the shortest path using the selected algorithm.

5. Clearing the Grid:
   Click the "Clear" button to reset the grid for a new search.

# Supported Algorithms

- **Breadth-First Search (BFS):** Breadth-First Search explores the grid level by level, ensuring the shortest path is found.

- **Depth-First Search (DFS):** Depth-First Search explores the grid deeply, allowing for alternative pathfinding.

- **Bidirectional Search:** Bidirectional Search starts from both the start and destination points and meets in the middle, offering an optimized approach.

- **Dijkstra's Algorithm:** Dijkstra's Algorithm finds the shortest path based on the cost of traversing cells.

- **Bellman-Ford Algorithm:** Bellman-Ford Algorithm handles negative edge weights while finding the shortest path.

# License

This project is licensed under the MIT License - see the LICENSE file for details.

**Note:** This project is meant for educational and demonstration purposes. It's a visual representation of various pathfinding algorithms and is not intended for production use.

For further improvements or enhancements, feel free to fork the project and make your own modifications.
