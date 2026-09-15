# 🏚️ The Forgotten Prison Escape

An interactive text-based escape room game where you must find the Master Escape Key and escape the prison before the 15-minute timer runs out!

## 🎮 How to Play

### Option 1: Run Locally (Node.js)
```bash
# Clone the repository
git clone https://github.com/micah725/prison-escape-game.git
cd prison-escape-game

# Run the game
node game.js
```

### Option 2: Play Through Copilot (Chat Interface)
You can interact with the game directly through this chat! Simply:
1. Tell me your command (e.g., "read diary", "check wall", "take gears")
2. I'll respond with the game state and available options
3. Continue playing until you escape!

## 🎯 Objective
- Find the **Master Escape Key** hidden in the Warden's Safe
- Unlock 10 rooms by solving puzzles
- Collect 4 code digits from various rooms
- Gather 3 gears and 1 silver key
- Escape before the 15:00 timer runs out!

## 📍 Rooms

| Room | Name | Challenge |
|------|------|-----------|
| 1 | Prison Cell | Find the Brass Key (8 bars clue) |
| 2 | Guard Station | Math puzzle: Sum the shifts = 24 |
| 3 | Storage Closet | Use flashlight to reveal hidden message |
| 4 | Cell Block 13 | Collect 3 gears and silver key |
| 5 | Boiler Room | Turn valves in order: Blue → Green → Red |
| 6 | Electrical Room | Solve: 8 + 8 = ? |
| 7 | Records Room | Find code 8472 in old files |
| 8 | Mess Hall | Arrange cans alphabetically: A-B-M-S |
| 9 | Warden's Office | Unlock desk with code 8472 |
| 10 | Final Safe Chamber | Enter final code to escape! |

## 🗝️ Key Commands

```
Movement:
  next / forward    - Go to next room
  back / previous   - Go to previous room

Interactions:
  read [object]     - Read something
  examine [object]  - Look at something
  check [object]    - Inspect something
  take [item]       - Pick up items
  use [item]        - Use an item
  answer [number]   - Submit answer to puzzle
  code [####]       - Enter a code

Information:
  help              - Show all commands
  inventory / inv   - Check your items
  status            - View game progress

Exit:
  quit / exit       - End the game
```

## 🧩 The Solution Path

1. **Room 1**: Read diary → collect digit **8**, find Brass Key
2. **Room 2**: Read schedule → answer **24** → collect digit **4**, get Batteries
3. **Room 3**: Use flashlight with batteries → find Card, access Cell Block
4. **Room 4**: Take gears and silver key
5. **Room 5**: Turn valves (Blue → Green → Red) → collect digit **7**
6. **Room 6**: Solve math (8+8=16) → get Magnetic Keycard
7. **Room 7**: Search records → find code **8472**
8. **Room 8**: Arrange cans (ABMS=1234) → collect digit **4**
9. **Room 9**: Unlock desk with **8472**
10. **Room 10**: Enter final code **8478** to escape!

**Final Safe Code: 8478**
- 8 (Room 1)
- 4 (Room 2)  
- 7 (Room 5)
- 8 (From Room 7 inmate code 8472)

## 🎮 Difficulty Features

- **Story-driven narrative** with immersive room descriptions
- **Interconnected puzzles** where solutions from one room unlock the next
- **Multiple item collection** to track throughout the game
- **Progressive difficulty** that increases as you advance
- **Timed challenge** to add urgency

## 📝 Example Gameplay

```
> read diary
📖 You read the faded diary:
'The first number is the number of prison bars on my window. I count them every day... 8 bars.'

✅ CODE DIGIT COLLECTED: 8
✅ ITEM: Torn Prisoner Diary

> check wall
🔑 You push on the loose brick. It crumbles away!
Inside the cavity: A Small Brass Key!

✅ ITEM: Small Brass Key
✅ Room 2 (Guard Station) is now accessible!

> next
```

## 🚀 Features

- ✅ 10 interconnected rooms with unique puzzles
- ✅ Item inventory system
- ✅ Progressive room unlocking based on puzzle completion
- ✅ Code digit collection (4 needed for final safe)
- ✅ Multiple puzzle types (riddles, math, observation, logic)
- ✅ Clear feedback and hints
- ✅ Full game state tracking
- ✅ CLI or chat-based play

## 💡 Tips

- **Examine everything** - You might miss important clues
- **Keep notes** - Write down code digits as you find them
- **Try different commands** - `read`, `examine`, `check` might give different info
- **Look for patterns** - Puzzles often have hidden logic
- **Unlock early rooms** - They often contain items needed later

## 🔄 Game State

The game tracks:
- Current room location
- Collected inventory items  
- Code digits found
- Gears and silver key status
- Unlocked rooms
- Puzzle progress

## 👨‍💻 Development

Built with:
- **Node.js** - Core game engine
- **Readline** - CLI input/output
- **JavaScript Classes** - Game architecture

## 📖 License

This project is open source and available for anyone to play and modify!

---

**Ready to escape? Start by running `node game.js` or play through this chat!** 🎮
