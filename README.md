# Talos

A quiet game of stones on a hex board.

Play it: https://danger.academy/talos/

Also on [itch.io](https://kmacleod.itch.io/talos) and [Newgrounds](https://www.newgrounds.com/portal/view/1051152).

![Talos](icons/icon-512.png)

## The game

Each board starts with a scatter of dark stones and a single white stone in
the middle. On your turn you place one dark stone on any empty space. Then the
white stone moves one space toward the edge, and it is good at finding the way
out. Your job is to close every route before it gets there.

A game is six boards. Each one starts with fewer stones on the table than the
last, so the room you have to work with shrinks as you go. The fewer stones you
need to finish a board, the more points it is worth. Three escapes and the game
ends early.

Nothing is timed. There are no lives to buy, no daily streaks, no
notifications, no accounts, and no ads.

## How to play

1. Tap or click any empty hex to place a dark stone.
2. The white stone then moves one space. It always heads for an open edge.
3. Keep placing stones until the white stone has nowhere left to move.
4. If the white stone reaches an open edge and steps off, the board is lost.
   Three escapes in one game ends the session.
5. Score is the number of empty hexes left when the white stone is trapped,
   multiplied by the mode bonus. Fewer stones placed means a higher score.

Tip: don't chase the stone. Find the path it wants and close the door before
it arrives.

## Features

- Three modes: Easy, Medium (x2 score), Hard (x3 score, with sealed edges).
- Every board is generated fresh and checked by a solver so it is always winnable.
- Optional suggestions that highlight every strongest placement, no penalty.
- Light and dark boards, or follow the system setting.
- Original music and hand-recorded stone sounds, each with its own volume.
- Works offline and installs to the home screen as a web app.
- Per-mode high scores stored on your device. No server, no tracking.

## Running it

The whole game is `index.html`. Open it in any modern browser and it runs.
The `audio/` folder holds the music and stone sounds, `icons/` the app icons,
and `sw.js` plus `manifest.webmanifest` make it installable and playable
offline when served over http(s).

To host it, copy the repository contents to any static web server. No build
step, no dependencies.

## Lineage

The rule set descends from Chat Noir (gamedesign.jp, 2007) and, further back,
John Conway's Angel Problem (1982). Talos keeps the core idea and restates it
as an abstract stone game, with generated boards, a solver that guarantees
every board is winnable, and scoring that rewards economy.

The name: Talos, in Greek myth, was a bronze giant who guarded the coast of
Crete, circling the island and hurling stones at any ship that tried to land.
One open gap at the ankle was all it took to bring him down.

## License

CC0 1.0 Universal. Public domain. Copy it, change it, ship it. No permission
needed, no credit required. See `LICENSE`.

Made by Kevin MacLeod for danger.academy.
