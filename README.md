# Rock Paper Scissors Game – Autoplay Feature

This is a clean and functional implementation of the classic **Rock, Paper, Scissors** game with an added **autoplay feature** using JavaScript. The game simulates random computer moves at regular intervals and allows the user to start and stop autoplay dynamically.

## Features

- Interactive Rock, Paper, Scissors gameplay logic.
- Autoplay mode: Simulates computer moves every second.
- Start/Stop control for autoplay using buttons.
- Clean, modular JavaScript code suitable for extension.

## How It Works

- The `autoplay()` function uses `setInterval` to generate a random move (`Rock`, `Paper`, or `Scissors`) every second.
- The `stopAutoplay()` function stops the interval using `clearInterval`.
- A `playerMove()` function handles the core logic (assumed to be defined elsewhere).
- Guard conditions prevent multiple intervals from being created.
