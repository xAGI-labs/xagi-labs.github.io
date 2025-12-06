# SiliconHalli - Bangalore Startup Simulator

**SiliconHalli** is a satirical idle clicker game that captures the beautiful chaos of building a startup in Bangalore, India's Silicon Valley. From navigating Silk Board traffic to pitching skeptical investors, this game is a love letter to the Indian startup ecosystem.

## 🎮 Gameplay Overview

Your goal is to build a unicorn startup. You start with a simple laptop and a dream.

### Core Mechanics

1.  **Code (Click):** Tap the laptop to write code, fix bugs, and earn initial cash.
2.  **Infrastructure (Upgrades):** Invest your cash into assets that generate **Monthly Recurring Revenue (MRR)** automatically over time.
3.  **Capital Raising:** As your valuation grows, raise funding from VCs. This gives you a massive cash injection but costs you **Equity**. Don't dilute yourself too much!
4.  **Valuation:** Your startup's valuation is dynamically calculated based on your revenue (5x ARR) and cash on hand.

## 🚀 Features

*   **Authentic Bangalore Lore:** References to Silk Board, filter coffee, Indiranagar, HSR Layout, and Rameshwaram Cafe.
*   **Progressive Upgrades:**
    *   *Filter Coffee* & *VTU Interns* (Early stage)
    *   *Coworking Desks* & *10x Devs* (Growth stage)
    *   *Ex-FAANG CTOs* & *Tech Parks* (Scale stage)
*   **Funding Rounds:**
    *   Seed Round (Pitch to rich uncle)
    *   Series A (Koramangala VCs)
    *   Series B (Global expansion)
    *   IPO (The ultimate exit)
*   **Autosave:** Your progress (Balance, Equity, Inventory, Valuation) is automatically saved to your browser's local storage so you can refresh without losing your empire.
*   **Reactive UI:** Dynamic messages, floating text effects, and a retro terminal log that tracks your journey.

## 🛠️ Technical Details

Built with **Next.js** and **Tailwind CSS**.

*   **State Management:** React `useState` and `useEffect` hooks.
*   **Persistence:** `localStorage` is used to persist game state across sessions. The game intelligently recalculates metrics like MRR on load to ensure consistency.
*   **Icons:** `lucide-react`.
*   **Styling:** Custom Tailwind classes for animations (floating text, CRT scanlines).

## 🤝 Contributing

This project is open for ideas! Future plans include a physical board game version.
Check out the **About** page within the game for more details on the vision.

## ❤️ Credits

Created by [Saurav Kumar](https://sauravtom.github.io/).
Inspired by the Y Combinator idle game and the indomitable spirit of Bangalore.

*Made with ❤️ in India.*
