'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Terminal, Users, Cpu, Coffee, Zap, DollarSign, TrendingUp, Building, Server, Globe } from 'lucide-react';

// --- Game Data & Lore ---

const UPGRADES = [
  {
    id: 'coffee',
    name: 'Filter Coffee',
    lore: 'Fuel from the local darshini.',
    baseCost: 500,
    baseIncome: 15,
    icon: <Coffee size={20} className="text-orange-400" />
  },
  {
    id: 'intern',
    name: 'VTU Intern',
    lore: 'Works for experience (and free pizza).',
    baseCost: 2500,
    baseIncome: 80,
    icon: <Users size={20} className="text-blue-400" />
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT Plus',
    lore: 'Writes better code than your CTO.',
    baseCost: 12000,
    baseIncome: 350,
    icon: <Zap size={20} className="text-yellow-400" />
  },
  {
    id: 'coworking',
    name: 'HSR Coworking Desk',
    lore: 'Great WiFi, questionable ergonomics.',
    baseCost: 50000,
    baseIncome: 1200,
    icon: <Building size={20} className="text-purple-400" />
  },
  {
    id: '10xdev',
    name: '10x Dev (Indiranagar)',
    lore: 'Refuses to attend standups.',
    baseCost: 150000,
    baseIncome: 4500,
    icon: <Terminal size={20} className="text-green-400" />
  },
  {
    id: 'cloud',
    name: 'AWS Credits (Hacked)',
    lore: 'Training models on borrowed time.',
    baseCost: 800000,
    baseIncome: 15000,
    icon: <Server size={20} className="text-red-400" />
  },
  {
    id: 'cto',
    name: 'Ex-FAANG CTO',
    lore: 'Constantly talks about "Scale".',
    baseCost: 5000000,
    baseIncome: 85000,
    icon: <Cpu size={20} className="text-cyan-400" />
  },
  {
    id: 'techpark',
    name: 'Ecospace Campus',
    lore: 'Now you are the traffic.',
    baseCost: 25000000,
    baseIncome: 450000,
    icon: <Globe size={20} className="text-indigo-400" />
  }
];

const FUNDING_ROUNDS = [
  {
    id: 'seed',
    name: 'Seed Round',
    description: "Pitch to your rich uncle in Sadashivnagar.",
    valuationRequirement: 1000000, // 10L
    cash: 2500000, // 25L
    equityCost: 10,
    color: 'bg-green-100 border-green-500 text-green-900'
  },
  {
    id: 'seriesA',
    name: 'Series A',
    description: "VCs from Koramangala are interested.",
    valuationRequirement: 10000000, // 1Cr
    cash: 50000000, // 5Cr
    equityCost: 15,
    color: 'bg-blue-100 border-blue-500 text-blue-900'
  },
  {
    id: 'seriesB',
    name: 'Series B',
    description: "Global expansion (opening an office in Gurgaon).",
    valuationRequirement: 500000000, // 50Cr
    cash: 250000000, // 25Cr
    equityCost: 10,
    color: 'bg-purple-100 border-purple-500 text-purple-900'
  },
  {
    id: 'ipo',
    name: 'IPO on BSE',
    description: "Ring the bell. You have won capitalism.",
    valuationRequirement: 5000000000, // 500Cr
    cash: 2000000000, // 200Cr
    equityCost: 20,
    color: 'bg-yellow-100 border-yellow-500 text-yellow-900'
  }
];

const LOG_MESSAGES = [
  "Stuck at Silk Board signal...",
  "Power cut! UPS battery low...",
  "Auto driver rejected your ride to office.",
  "Deploying to prod on a Friday...",
  "Swiggy delivery is late.",
  "Investor wants 'AI on Blockchain'.",
  "Neighbour aunty asking about your salary.",
  "Server crashed due to too much traffic.",
  "Rameshwaram Cafe meeting scheduled.",
  "Rain in Bangalore. Traffic halted.",
  "Hiring freeze? No, just 'strategic realignment'.",
  "Git merge conflict resolved.",
  "Third Wave Coffee run.",
  "WiFi down. Tethering to Jio 4G.",
];

// --- Helper Functions ---

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

const formatCompactCurrency = (amount: number) => {
  // Hybrid formatting: Use 'k' for thousands (< 1 Lakh), then standard Indian Lakh/Crore
  if (amount >= 1000 && amount < 100000) {
    return `₹${(amount / 1000).toFixed(1).replace(/\.0$/, '')}k`;
  }
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(amount);
};

// --- Components ---

interface FloatingTextProps {
  x: number;
  y: number;
  text: string;
  color?: string;
  onComplete: () => void;
}

const FloatingText: React.FC<FloatingTextProps> = ({ x, y, text, color = 'text-green-400', onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 1000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`pointer-events-none fixed z-50 animate-float font-mono font-bold ${color}`}
      style={{ left: x, top: y }}
    >
      {text}
    </div>
  );
};

interface FloatingTextData {
  id: number;
  x: number;
  y: number;
  text: string;
}

const SAVE_KEY = 'siliconhalli_save_v1';

export default function SiliconHalli() {
  // Game State
  const [balance, setBalance] = useState(1000); // Starting cash
  const [mrr, setMrr] = useState(0); // Monthly Recurring Revenue (Income per sec)
  const [equity, setEquity] = useState(100);
  const [valuation, setValuation] = useState(0);
  const [inventory, setInventory] = useState<Record<string, number>>({});
  const [logs, setLogs] = useState<string[]>(["Welcome to SiliconHalli. Start coding."]);
  const [clickCount, setClickCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // UI State
  const [floatingTexts, setFloatingTexts] = useState<FloatingTextData[]>([]);
  const laptopRef = useRef<HTMLDivElement>(null);

  // Load Game
  useEffect(() => {
    const savedData = localStorage.getItem(SAVE_KEY);
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        setBalance(parsed.balance ?? 1000);
        setEquity(parsed.equity ?? 100);
        setInventory(parsed.inventory ?? {});
        setLogs(parsed.logs ?? ["Welcome back to SiliconHalli."]);
        setClickCount(parsed.clickCount ?? 0);

        // Recalculate MRR to ensure consistency
        const loadedInventory = parsed.inventory || {};
        let calculatedMrr = 0;
        UPGRADES.forEach(u => {
            const count = loadedInventory[u.id] || 0;
            calculatedMrr += count * u.baseIncome;
        });
        setMrr(calculatedMrr);

        // Valuation will be updated by the tick loop, but we can set initial
        setValuation(parsed.valuation ?? 0);
      } catch (e) {
        console.error("Failed to load save", e);
      }
    }
    setIsLoaded(true);
  }, []);

  // Auto Save
  useEffect(() => {
    if (!isLoaded) return;

    const saveData = {
        balance,
        mrr, // We save it, but recalculate on load just in case
        equity,
        valuation,
        inventory,
        logs,
        clickCount
    };
    localStorage.setItem(SAVE_KEY, JSON.stringify(saveData));
  }, [balance, mrr, equity, valuation, inventory, logs, clickCount, isLoaded]);

  // Derived Stats
  const clickPower = 100 + (mrr * 0.1); // Click power scales slightly with MRR
  const nextValuation = (mrr * 12 * 5) + balance; // Valuation formula: 5x ARR + Cash

  // Game Loop
  useEffect(() => {
    const tickRate = 1000; // 1 second
    const interval = setInterval(() => {
      if (mrr > 0) {
        setBalance(prev => prev + mrr);
        // Random chance for flavor text
        if (Math.random() < 0.1) {
          addLog(LOG_MESSAGES[Math.floor(Math.random() * LOG_MESSAGES.length)]);
        }
      }
      setValuation(nextValuation);
    }, tickRate);

    return () => clearInterval(interval);
  }, [mrr, nextValuation]);

  const addLog = (msg: string) => {
    setLogs(prev => [`[${new Date().toLocaleTimeString()}] ${msg}`, ...prev].slice(0, 20));
  };

  const handleLaptopClick = (e: React.MouseEvent) => {
    // Generate Money
    const earned = clickPower;
    setBalance(prev => prev + earned);
    setClickCount(prev => prev + 1);

    // Add Floating Text
    if (laptopRef.current) {
      const rect = laptopRef.current.getBoundingClientRect();
      // Randomize position slightly around the click or center
      const x = e.clientX || rect.left + rect.width / 2;
      const y = e.clientY || rect.top + rect.height / 2;

      const newText = {
        id: Date.now() + Math.random(),
        x: x - 20, // offset to center
        y: y - 20,
        text: `+${formatCompactCurrency(earned)}`,
      };

      setFloatingTexts(prev => [...prev, newText]);
    }

    // Coding Messages
    if (clickCount % 10 === 0) {
        const codingMsgs = ["git commit -m 'fix'", "deploying...", "compiling...", "debugging..."];
        addLog(codingMsgs[Math.floor(Math.random() * codingMsgs.length)]);
    }
  };

  const removeFloatingText = (id: number) => {
    setFloatingTexts(prev => prev.filter(ft => ft.id !== id));
  };

  const buyUpgrade = (upgrade: typeof UPGRADES[0]) => {
    const currentCount = inventory[upgrade.id] || 0;
    const cost = Math.floor(upgrade.baseCost * Math.pow(1.15, currentCount));

    if (balance >= cost) {
      setBalance(prev => prev - cost);
      setInventory(prev => ({ ...prev, [upgrade.id]: currentCount + 1 }));
      setMrr(prev => prev + upgrade.baseIncome);
      addLog(`Purchased ${upgrade.name}.`);
    } else {
      addLog("Insufficient funds!");
    }
  };

  const signTermSheet = (round: typeof FUNDING_ROUNDS[0]) => {
    if (equity <= 0) {
        addLog("No equity left to give!");
        return;
    }
    if (valuation < round.valuationRequirement) {
        addLog(`Valuation too low for ${round.name}. Need ${formatCompactCurrency(round.valuationRequirement)}.`);
        return;
    }

    setBalance(prev => prev + round.cash);
    setEquity(prev => prev - round.equityCost);
    addLog(`Signed Term Sheet for ${round.name}! Cash infusion: ${formatCompactCurrency(round.cash)}.`);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white font-mono flex flex-col overflow-hidden selection:bg-green-500 selection:text-black">
      {/* Global Styles for Animations */}
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(-50px); opacity: 0; }
        }
        .animate-float {
          animation: floatUp 0.8s ease-out forwards;
        }
        .scanline {
          background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.1));
          background-size: 100% 4px;
        }
      `}</style>

      {/* --- TOP BAR --- */}
      <div className="h-16 bg-slate-800 border-b-4 border-black flex items-center justify-between px-4 lg:px-8 shadow-lg z-10">
        <div className="flex items-center space-x-6">
          <div className="bg-green-100 text-green-900 px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="text-xs font-bold uppercase tracking-wider">Bank Balance</div>
            <div className="text-xl font-black">{formatCurrency(balance)}</div>
          </div>
          <div className="bg-blue-100 text-blue-900 px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hidden sm:block">
            <div className="text-xs font-bold uppercase tracking-wider">Revenue Rate</div>
            <div className="text-xl font-black">{formatCurrency(mrr)}/s</div>
          </div>
        </div>

        <div className="text-center hidden md:block">
          <h1 className="text-2xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 uppercase italic">
            SILICON<span className="text-white">HALLI</span>
          </h1>
          <p className="text-[10px] text-slate-400">BANGALORE STARTUP SIMULATOR</p>
        </div>

        <div className="flex items-center space-x-6">
          <div className="bg-purple-100 text-purple-900 px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hidden sm:block">
            <div className="text-xs font-bold uppercase tracking-wider">Equity</div>
            <div className="text-xl font-black">{equity}%</div>
          </div>
          <div className="bg-yellow-100 text-yellow-900 px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="text-xs font-bold uppercase tracking-wider">Valuation</div>
            <div className="text-xl font-black">{formatCompactCurrency(valuation)}</div>
          </div>
        </div>
      </div>

      {/* --- MAIN GAME AREA --- */}
      <div className="flex-1 overflow-hidden flex flex-col lg:flex-row">

        {/* LEFT COLUMN: INFRASTRUCTURE */}
        <div className="w-full lg:w-1/4 bg-slate-800 border-r-4 border-black p-4 overflow-y-auto">
          <div className="bg-blue-600 text-white font-black text-center py-2 mb-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            INFRASTRUCTURE
          </div>
          <div className="space-y-4 pb-20">
            {UPGRADES.map((upgrade) => {
              const count = inventory[upgrade.id] || 0;
              const cost = Math.floor(upgrade.baseCost * Math.pow(1.15, count));
              const canAfford = balance >= cost;

              return (
                <button
                  key={upgrade.id}
                  onClick={() => buyUpgrade(upgrade)}
                  disabled={!canAfford}
                  className={`w-full text-left group relative p-3 border-2 border-black bg-white transition-all
                    ${canAfford ? 'hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(34,197,94,1)] cursor-pointer' : 'opacity-60 cursor-not-allowed grayscale'}
                    shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                  `}
                >
                  <div className="flex justify-between items-start mb-1">
                    <div className="flex items-center space-x-2">
                      <div className="bg-slate-100 p-1 border border-black rounded">
                        {upgrade.icon}
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-sm">{upgrade.name}</div>
                        <div className="text-xs text-slate-500 font-bold">Lvl {count}</div>
                      </div>
                    </div>
                    <div className={`text-xs font-black px-2 py-1 border border-black ${canAfford ? 'bg-green-400 text-black' : 'bg-red-100 text-red-800'}`}>
                      {formatCompactCurrency(cost)}
                    </div>
                  </div>
                  <div className="text-xs text-slate-600 italic border-t border-dashed border-slate-300 pt-1 mt-1">
                    "{upgrade.lore}"
                  </div>
                  <div className="absolute top-0 right-0 bg-blue-100 text-blue-800 text-[10px] font-bold px-1 border-l border-b border-black">
                    +{formatCompactCurrency(upgrade.baseIncome)}/s
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* CENTER COLUMN: ACTION AREA */}
        <div className="flex-1 bg-slate-900 relative flex flex-col items-center justify-center p-6 scanline">

          {/* Laptop Clicker */}
          <div className="relative w-full max-w-md aspect-video mb-8 group cursor-pointer" onClick={handleLaptopClick} ref={laptopRef}>
            {/* Simple Laptop CSS Art */}
            <div className="absolute inset-0 flex items-center justify-center transition-transform group-active:scale-95 group-active:translate-y-1">
               <div className="relative">
                 {/* Screen */}
                 <div className="w-64 h-40 bg-slate-800 border-4 border-slate-400 rounded-t-lg relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-black opacity-80 flex items-center justify-center">
                        <div className="text-green-500 text-xs p-2 font-mono opacity-50 whitespace-pre-wrap overflow-hidden h-full w-full">
                            {`> git init\n> npm install life\n> while(alive) {\n  code();\n  coffee();\n}\n> ERROR: sleep not found`}
                        </div>
                    </div>
                    {/* Apple/Logo glow */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white opacity-10 rounded-full blur-md"></div>
                 </div>
                 {/* Keyboard Base */}
                 <div className="w-80 h-4 bg-slate-300 border-b-4 border-r-4 border-l-4 border-slate-500 rounded-b-md -ml-8 relative">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-2 bg-slate-400 rounded-b-sm"></div>
                 </div>
               </div>
            </div>

            {/* Instructions */}
            <div className="absolute -bottom-12 w-full text-center">
              <div className="animate-pulse text-green-400 font-bold tracking-widest text-sm bg-slate-800 px-4 py-1 inline-block border border-green-900">
                [ TAP TO CODE ]
              </div>
            </div>
          </div>

          {/* Terminal Log */}
          <div className="w-full max-w-2xl bg-slate-950 border-2 border-slate-700 rounded p-4 h-48 overflow-hidden flex flex-col shadow-2xl">
            <div className="flex items-center space-x-2 border-b border-slate-800 pb-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-xs text-slate-500 font-mono ml-2">term_log — -zsh</span>
            </div>
            <div className="flex-1 overflow-y-auto font-mono text-xs space-y-1 scrollbar-hide">
              {logs.map((log, i) => (
                <div key={i} className={`pb-1 border-b border-slate-900 ${i === 0 ? 'text-green-400 animate-pulse' : 'text-slate-400'}`}>
                  <span className="text-slate-600 mr-2">{'>'}</span>{log}
                </div>
              ))}
            </div>
          </div>

          {/* Floating Text Container */}
          {floatingTexts.map(ft => (
            <FloatingText
              key={ft.id}
              x={ft.x}
              y={ft.y}
              text={ft.text}
              onComplete={() => removeFloatingText(ft.id)}
            />
          ))}
        </div>

        {/* RIGHT COLUMN: CAPITAL RAISING */}
        <div className="w-full lg:w-1/4 bg-slate-800 border-l-4 border-black p-4 overflow-y-auto">
          <div className="bg-orange-600 text-white font-black text-center py-2 mb-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            CAPITAL RAISING
          </div>

          {/* Equity Bar */}
          <div className="mb-6 bg-white p-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex justify-between text-xs font-bold mb-1 text-slate-900">
              <span>YOUR EQUITY STAKE</span>
              <span>{equity}%</span>
            </div>
            <div className="w-full h-4 bg-slate-200 border border-black relative">
              <div
                className="h-full bg-red-500 transition-all duration-500"
                style={{ width: `${equity}%` }}
              ></div>
            </div>
            <div className="text-[10px] text-slate-500 mt-1 text-center">
              Don't dilute too much, macha.
            </div>
          </div>

          {/* Funding Rounds */}
          <div className="space-y-4 pb-20">
            {FUNDING_ROUNDS.map((round) => {
              const isUnlocked = valuation >= round.valuationRequirement;
              // We can sign a round multiple times in this simplified game for gameplay loop,
              // or just once. Let's assume you can raise similar rounds multiple times but it gets harder?
              // For simplicity, let's keep it clickable always if valuation met, but equity drops.
              const canSign = isUnlocked && equity >= round.equityCost;

              return (
                <div
                  key={round.id}
                  className={`border-2 border-black p-3 transition-all ${isUnlocked ? 'bg-white opacity-100' : 'bg-slate-300 opacity-50 grayscale'}`}
                >
                  <div className="font-bold text-slate-900 mb-1">{round.name}</div>
                  <div className="text-xs text-slate-600 mb-2 h-8 leading-tight italic">
                    "{round.description}"
                  </div>

                  <div className="flex justify-between items-center mb-3 bg-slate-50 p-2 border border-slate-200">
                    <div className="text-center">
                      <div className="text-[10px] text-slate-500 uppercase">Cash</div>
                      <div className="text-green-600 font-bold text-sm">+{formatCompactCurrency(round.cash)}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-[10px] text-slate-500 uppercase">Equity</div>
                      <div className="text-red-600 font-bold text-sm">-{round.equityCost}%</div>
                    </div>
                  </div>

                  <button
                    onClick={() => signTermSheet(round)}
                    disabled={!canSign}
                    className={`w-full py-2 border-2 border-black text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none transition-all
                      ${canSign ? 'bg-blue-500 hover:bg-blue-400 text-white' : 'bg-slate-400 text-slate-600 cursor-not-allowed'}
                    `}
                  >
                    {!isUnlocked ? `Req: ${formatCompactCurrency(round.valuationRequirement)} Val` : 'Sign Term Sheet'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
