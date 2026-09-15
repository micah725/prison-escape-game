// The Forgotten Prison Escape - Interactive Game Engine
class PrisonEscapeGame {
  constructor() {
    this.timer = 900; // 15 minutes in seconds
    this.currentRoom = 1;
    this.inventory = [];
    this.codDigits = [];
    this.gearsCollected = 0;
    this.unlockedRooms = [1];
    this.gameActive = true;
    this.gameState = {
      room1_keyFound: false,
      room2_drawerOpened: false,
      room3_batteryInserted: false,
      room5_valveSolved: false,
      room7_cardUsed: false,
      room9_deskOpened: false,
      room10_safeSolved: false
    };
  }

  startGame() {
    console.log("🏚️  THE FORGOTTEN PRISON ESCAPE");
    console.log("=".repeat(50));
    console.log("⏰ Timer: 15:00");
    console.log("🎯 Objective: Find the Master Escape Key and exit!");
    console.log("=".repeat(50));
    console.log("\nType 'start' to begin, 'help' for commands, or 'play' to enter a room.\n");
    return this.getDescription();
  }

  getDescription() {
    const descriptions = {
      1: "🔐 ROOM 1: PRISON CELL\nYou wake up in a cold prison cell. There's a rusty bed frame, a torn prisoner diary, and you notice a loose brick in the wall.\n\nWhat do you do? Type: 'examine bed', 'read diary', 'check wall', 'inventory', or 'next' to continue.",
      2: "🚔 ROOM 2: GUARD STATION\nThis room is locked by the Small Brass Key. Inside you see a guard schedule, flashlight with dead batteries, and a locked drawer.\n\nWhat do you do? Type: 'read schedule', 'take flashlight', 'check drawer', or 'back'.",
      3: "📦 ROOM 3: STORAGE CLOSET\nA dusty storage room with shelves and a mop bucket. A note sticks out from the bucket.\n\nWhat do you do? Type: 'check bucket', 'read note', 'use flashlight', or 'back'.",
      4: "🔒 ROOM 4: CELL BLOCK 13\nThree locked cells stand before you. Each one has a puzzle inside.\n\nWhat do you do? Type: 'cell a', 'cell b', 'cell c', or 'back'.",
      5: "🔥 ROOM 5: BOILER ROOM\nSteam hisses from pipes. Three large valve wheels dominate the room: Red, Blue, and Green.\n\nWhat do you do? Type: 'solve valves', 'turn red', 'turn blue', 'turn green', or 'back'.",
      6: "⚡ ROOM 6: ELECTRICAL ROOM\nA power panel glows with switches and indicators. A math puzzle is written on the wall.\n\nWhat do you do? Type: 'read puzzle', 'solve puzzle', or 'back'.",
      7: "📚 ROOM 7: RECORDS ROOM\nRows of filing cabinets and old inmate records. A security door requires a Magnetic Keycard.\n\nWhat do you do? Type: 'search records', 'use keycard', or 'back'.",
      8: "🍽️  ROOM 8: MESS HALL\nLong tables with food trays. One tray has labeled cans with a puzzle.\n\nWhat do you do? Type: 'examine cans', 'solve puzzle', or 'back'.",
      9: "📝 ROOM 9: WARDEN'S OFFICE\nA luxurious office with a large desk. The desk is locked.\n\nWhat do you do? Type: 'unlock desk' (need code 8472), 'search room', or 'back'.",
      10: "🏦 ROOM 10: FINAL SAFE CHAMBER\nThe warden's safe looms before you. It requires three gears and a silver key to open.\n\nWhat do you do? Type: 'insert gears', 'use key', 'examine safe', or 'back'."
    };
    return descriptions[this.currentRoom] || "Unknown room.";
  }

  handleCommand(input) {
    const cmd = input.toLowerCase().trim();

    if (cmd === 'help') {
      return this.showHelp();
    }
    if (cmd === 'inventory') {
      return this.showInventory();
    }
    if (cmd === 'status') {
      return this.showStatus();
    }
    if (cmd === 'next' || cmd === 'forward') {
      return this.moveToNextRoom();
    }
    if (cmd === 'back' || cmd === 'previous') {
      return this.moveToPreviousRoom();
    }

    // Room 1 commands
    if (this.currentRoom === 1) {
      if (cmd === 'examine bed') {
        return "You examine the rusty bed frame. The metal is cold and creaks. Nothing unusual.";
      }
      if (cmd === 'read diary') {
        this.codDigits.push(8);
        this.inventory.push("Torn Prisoner Diary");
        return "📖 The diary reads: 'The first number is the number of prison bars on my window. I count them every day. There are 8 bars.'\n\n✅ Code digit collected: 8\n✅ Item: Torn Prisoner Diary";
      }
      if (cmd === 'check wall') {
        this.inventory.push("Small Brass Key");
        this.gameState.room1_keyFound = true;
        this.unlockedRooms.push(2);
        return "🔑 You find a loose brick and pull it out! Behind it is a Small Brass Key!\n\n✅ Item: Small Brass Key\n✅ Room 2 (Guard Station) is now unlocked!";
      }
    }

    // Room 2 commands
    if (this.currentRoom === 2) {
      if (!this.inventory.includes("Small Brass Key")) {
        return "❌ This room is locked! You need the Small Brass Key from Room 1.";
      }
      if (cmd === 'read schedule') {
        return "📋 Guard Schedule:\nMorning Shift: 6 hours\nEvening Shift: 8 hours\nNight Shift: 10 hours\n\nTotal hours: 6 + 8 + 10 = 24\n\nType 'answer 24' to open the drawer.";
      }
      if (cmd === 'answer 24') {
        this.codDigits.push(4);
        this.inventory.push("Batteries");
        this.gameState.room2_drawerOpened = true;
        this.unlockedRooms.push(3);
        return "✅ Correct! The drawer opens with a click.\n\n✅ Code digit collected: 4\n✅ Item: Batteries\n✅ Room 3 (Storage Closet) is now unlocked!";
      }
      if (cmd === 'take flashlight') {
        this.inventory.push("Broken Flashlight");
        return "🔦 You pick up the flashlight. It's heavy but the batteries are dead.";
      }
    }

    // Room 3 commands
    if (this.currentRoom === 3) {
      if (cmd === 'check bucket') {
        return "🧹 You find a note in the mop bucket that reads: 'Only light reveals truth. Shine the flashlight on the walls and you will find what you seek.'";
      }
      if (cmd === 'use flashlight') {
        if (!this.inventory.includes("Batteries")) {
          return "🔦 The flashlight is broken. You need batteries first.";
        }
        this.gameState.room3_batteryInserted = true;
        this.inventory.push("Cell Block Access Card");
        this.unlockedRooms.push(4);
        return "✨ You insert the batteries into the flashlight and turn it on.\nYou shine it on the wall and see a hidden UV message: CELL 13\n\n✅ Item: Cell Block Access Card\n✅ Room 4 (Cell Block 13) is now unlocked!";
      }
    }

    // Room 4 commands
    if (this.currentRoom === 4) {
      if (cmd === 'cell a') {
        return "🔒 Cell A contains a locked box with a riddle: 'I am the number that comes after 24 and before 26. What am I?'\n\nType 'answer 25' to solve.";
      }
      if (cmd === 'answer 25') {
        this.codDigits.push(7); // This will be used later
        return "✅ Correct! The box opens, revealing nothing special, but you know this is important.";
      }
      if (cmd === 'cell b') {
        return "🔒 Cell B is empty except for 3 gears on the ground.\n\nType 'take gears' to collect them.";
      }
      if (cmd === 'take gears') {
        this.inventory.push("Gear #1");
        this.inventory.push("Gear #2");
        this.inventory.push("Gear #3");
        this.gearsCollected = 3;
        return "⚙️  You collect all three gears!\n\n✅ Items: Gear #1, Gear #2, Gear #3";
      }
      if (cmd === 'cell c') {
        this.inventory.push("Silver Key");
        return "🔑 You find a hidden Silver Key behind a loose brick!\n\n✅ Item: Silver Key";
      }
    }

    // Room 5 commands
    if (this.currentRoom === 5) {
      if (cmd === 'solve valves') {
        return "🔴🔵🟢 Three valve wheels await. The clue reads: 'Sky before grass before blood.'\nSky = Blue, Grass = Green, Blood = Red\n\nType 'turn blue', 'turn green', 'turn red' in order.";
      }
      if (cmd === 'turn blue') {
        return "🔵 You turn the blue valve. A hissing sound occurs.";
      }
      if (cmd === 'turn green') {
        return "🟢 You turn the green valve. More hissing.";
      }
      if (cmd === 'turn red') {
        this.codDigits[2] = 7; // Third code digit
        this.gameState.room5_valveSolved = true;
        this.unlockedRooms.push(6);
        return "🔴 You turn the red valve and hear a mechanical CLICK!\nA secret compartment opens in the wall!\n\n✅ Code digit collected: 7\n✅ Room 6 (Electrical Room) is now unlocked!";
      }
    }

    // Room 6 commands
    if (this.currentRoom === 6) {
      if (cmd === 'read puzzle') {
        return "➕ Math Puzzle on the wall:\n2 + 2 = 4\n4 + 4 = 8\n8 + 8 = ?\n\nType 'answer 16' to solve.";
      }
      if (cmd === 'answer 16') {
        this.inventory.push("Magnetic Keycard");
        this.unlockedRooms.push(7);
        return "✅ Correct! The power panel hums to life.\nThe lights throughout the prison flicker on.\n\n✅ Item: Magnetic Keycard\n✅ Room 7 (Records Room) is now unlocked!";
      }
    }

    // Room 7 commands
    if (this.currentRoom === 7) {
      if (!this.inventory.includes("Magnetic Keycard")) {
        return "❌ This room is locked! You need the Magnetic Keycard from Room 6.";
      }
      if (cmd === 'search records') {
        return "📚 You flip through old inmate records. One inmate number keeps appearing: 8472\n\nType 'remember code' to note this.";
      }
      if (cmd === 'remember code') {
        this.inventory.push("Safe Code Hint: 8472");
        this.unlockedRooms.push(8);
        this.unlockedRooms.push(9);
        return "✅ You remember the code: 8472\n✅ Rooms 8 and 9 are now accessible!";
      }
    }

    // Room 8 commands
    if (this.currentRoom === 8) {
      if (cmd === 'examine cans') {
        return "🥫 Canned food labels:\nApple (A)\nBread (B)\nMeat (M)\nSoup (S)\n\nClue: 'Arrange in alphabetical order.'\nThe numbers behind the cans are: 1, 2, 3, 4\n\nType 'answer 1234' to solve.";
      }
      if (cmd === 'answer 1234') {
        this.codDigits.push(4);
        return "✅ Correct! The cans rearrange and reveal: 1234\n\n✅ Code digit collected: 4";
      }
    }

    // Room 9 commands
    if (this.currentRoom === 9) {
      if (cmd === 'unlock desk') {
        if (!this.inventory.includes("Safe Code Hint: 8472")) {
          return "🔐 The desk requires a 4-digit code. You don't know it yet.";
        }
        return "Type: 'code 8472' to unlock the desk.";
      }
      if (cmd === 'code 8472') {
        this.gameState.room9_deskOpened = true;
        this.unlockedRooms.push(10);
        this.inventory.push("Letter from Warden");
        return "🔓 The desk clicks open!\n\n📄 Letter reads: 'Only those carrying all THREE gears may open my safe.'\n\n✅ Room 10 (Final Safe Chamber) is now unlocked!";
      }
    }

    // Room 10 commands
    if (this.currentRoom === 10) {
      if (cmd === 'examine safe') {
        return "🏦 The safe is massive with a keyhole and a gear slot.\nYou need: Silver Key, 3 Gears, and a 4-digit code.\n\nType 'open safe' when ready.";
      }
      if (cmd === 'open safe') {
        if (!this.inventory.includes("Silver Key") || this.gearsCollected < 3) {
          return "❌ You're missing items! You need the Silver Key and all 3 Gears.";
        }
        return "🔐 Enter the safe code (4 digits): Type 'code XXXX' (hint: use room code digits)";
      }
      if (cmd.startsWith('code ')) {
        const code = cmd.substring(5);
        if (code === '8478') {
          this.gameState.room10_safeSolved = true;
          this.gameActive = false;
          this.inventory.push("Master Escape Key");
          return "🎉 ESCAPE SUCCESSFUL!\n\nThe safe opens with a deafening CRACK!\n\n✅ You found the MASTER ESCAPE KEY!\n\n🚪 You rush to the main gate, insert the key, and the heavy doors swing open!\n\n⏰ You escaped with time remaining!\n\n🏆 CONGRATULATIONS! YOU'VE ESCAPED THE FORGOTTEN PRISON!";
        } else {
          return "❌ Wrong code! The safe doesn't open. Try again.";
        }
      }
    }

    return "❓ I don't understand that command. Type 'help' for available commands.";
  }

  moveToNextRoom() {
    if (this.currentRoom < 10) {
      this.currentRoom++;
      if (!this.unlockedRooms.includes(this.currentRoom)) {
        this.currentRoom--;
        return `❌ Room ${this.currentRoom + 1} is locked! You need to solve puzzles in previous rooms to unlock it.`;
      }
      return `\n➡️  Moving to Room ${this.currentRoom}...\n\n${this.getDescription()}`;
    }
    return "You're at the final room!";
  }

  moveToPreviousRoom() {
    if (this.currentRoom > 1) {
      this.currentRoom--;
      return `\n⬅️  Moving to Room ${this.currentRoom}...\n\n${this.getDescription()}`;
    }
    return "You're at the first room!";
  }

  showInventory() {
    if (this.inventory.length === 0) {
      return "📦 Inventory: Empty";
    }
    return "📦 Inventory:\n" + this.inventory.map(item => `  • ${item}`).join("\n");
  }

  showStatus() {
    return `
=== GAME STATUS ===
Current Room: ${this.currentRoom}
Code Digits Collected: ${this.codDigits.length}/4
Gears Collected: ${this.gearsCollected}/3
Unlocked Rooms: ${this.unlockedRooms.join(", ")}
Inventory Items: ${this.inventory.length}
    `;
  }

  showHelp() {
    return `
📖 AVAILABLE COMMANDS:
  • start - Begin the game
  • help - Show this help menu
  • next/forward - Move to the next room
  • back/previous - Return to the previous room
  • inventory - Check your items
  • status - View game progress
  • examine [object] - Look at things
  • answer [number] - Submit puzzle answers
  • code [digits] - Enter codes
  • take/use [item] - Interact with items

🎮 GAME FLOW:
1. Solve puzzles in each room
2. Collect items and code digits
3. Unlock new rooms
4. Reach the final safe chamber
5. Escape before time runs out!

Type commands to interact with the game.
    `;
  }
}

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PrisonEscapeGame;
}
