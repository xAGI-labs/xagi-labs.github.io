import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About SiliconHalli - The Bangalore Startup Simulator',
  description: 'Learn about the origin story of SiliconHalli, the satirical idle clicker game about building a startup in Bangalore.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-mono selection:bg-green-500 selection:text-black p-6 md:p-12">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link
            href="/siliconhalli"
            className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors border border-green-900 bg-slate-800 px-4 py-2 rounded hover:border-green-400"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Game
          </Link>
        </div>

        <article className="prose prose-invert prose-lg prose-green max-w-none text-slate-200">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-8">
            About SiliconHalli
          </h1>

          <h2 className="text-white">The Game</h2>
          <p className="text-slate-200">
            SiliconHalli is a satirical idle clicker game that captures the beautiful chaos of building a startup in Bangalore, India's Silicon Valley. From navigating Silk Board traffic to pitching skeptical investors, from managing team drama to the eternal quest for decent filter coffee – this game is a love letter to everyone who's ever tried to build something in this crazy ecosystem.
          </p>

          <h2 className="text-white">The Origin Story</h2>
          <p className="text-slate-200">
            This started as a fun experiment. I saw a Y Combinator-themed idle game making rounds on LinkedIn and thought, "Why not Bangalore?"
          </p>
          <p className="text-slate-200">
            Four prompts and less than 10 minutes later (thanks, Claude!), SiliconHalli was born. What began as a quick fork turned into something that resonated with founders, developers, and startup folks across the city. Turns out, we all share the same beautiful struggles.
          </p>

          <h2 className="text-white">What's Next: The Board Game</h2>
          <p className="text-slate-200">
            SiliconHalli is evolving. The next iteration will be a physical board game that brings the startup journey to your table.
          </p>

          <h3 className="text-green-400">The Vision</h3>
          <p className="text-slate-200">
            Imagine a board game where 2-6 players compete to build the next unicorn out of Bangalore. Here's how it could work:
          </p>

          <p><strong className="text-white">Game Board Layout:</strong></p>
          <ul className="text-slate-200">
            <li>A map of Bangalore with key locations: Koramangala (startup hub), Indiranagar (client meetings), Whitefield (tech parks), MG Road (investor offices), Electronic City (operations), and of course, Silk Board (the dreaded bottleneck)</li>
            <li>Funding round tracks: Pre-seed → Seed → Series A → Series B → Unicorn</li>
            <li>Resource meters: Cash, Team Morale, Product Quality, Market Traction</li>
          </ul>

          <p><strong className="text-white">Game Mechanics:</strong></p>
          <ul className="text-slate-200">
            <li><strong>Movement:</strong> Roll dice to move around the city. Land on different locations to trigger events</li>
            <li><strong>Cards:</strong> Three decks
              <ul>
                <li><em>Opportunity Cards:</em> Client deals, partnerships, press coverage</li>
                <li><em>Challenge Cards:</em> Server crashes, co-founder conflicts, regulatory hurdles, competitor launches</li>
                <li><em>Investor Cards:</em> Angel investors, VCs, each with different terms and conditions</li>
              </ul>
            </li>
            <li><strong>Resources to Manage:</strong> Cash (obviously), Team tokens (hire developers, designers, marketers), Morale points (keep your team from burning out), Product development tokens (ship features to gain traction)</li>
          </ul>

          <p><strong className="text-white">Win Conditions:</strong></p>
          <ul className="text-slate-200">
            <li>First to raise Series B with positive unit economics, OR</li>
            <li>Highest valuation after 12 rounds (quarters), OR</li>
            <li>Achieve profitability with 50+ employees</li>
          </ul>

          <p><strong className="text-white">Special Bangalore Mechanics:</strong></p>
          <ul className="text-slate-200">
            <li><strong>Traffic Tax:</strong> Certain routes cost you extra turns (looking at you, Silk Board)</li>
            <li><strong>Chai Break:</strong> Land on select spaces to recover morale points</li>
            <li><strong>WeWork Wednesdays:</strong> Community events where players can form alliances</li>
            <li><strong>Investor Gauntlet:</strong> Pitch rounds where you present to other players acting as VCs</li>
            <li><strong>Pivot Power:</strong> Once per game, completely change your startup's direction</li>
          </ul>

          <p><strong className="text-white">Sample Scenarios:</strong></p>
          <ul className="text-slate-200">
            <li>"Your developer got a 2x offer from a FAANG. Pay ₹5L retention bonus or lose 2 product tokens"</li>
            <li>"You met an investor at a Koramangala cafe. Roll 6+ to schedule a meeting"</li>
            <li>"Traffic jam on Outer Ring Road. Miss your investor meeting. Lose one turn"</li>
            <li>"Your LinkedIn post went viral. Gain 3 marketing points"</li>
            <li>"Co-founder wants to relocate to Goa. Resolve or split equity"</li>
          </ul>

          <p><strong className="text-white">Physical Components:</strong></p>
          <ul className="text-slate-200">
            <li>Game board (map of Bangalore)</li>
            <li>Player tokens (different startup archetypes: SaaS, D2C, Fintech, EdTech, etc.)</li>
            <li>Resource tokens (cash, team, morale chips)</li>
            <li>Three card decks (150+ unique cards)</li>
            <li>Dice (standard six-sided)</li>
            <li>Funding round tracker</li>
            <li>Player dashboards to manage resources</li>
          </ul>

          <p><strong className="text-white">Expansion Packs (future):</strong></p>
          <ul className="text-slate-200">
            <li><em>The Delhi Pack:</em> Navigate government regulations and enterprise sales</li>
            <li><em>The Mumbai Pack:</em> Bollywood partnerships and consumer market dynamics</li>
            <li><em>The Global Pack:</em> International expansion challenges</li>
          </ul>

          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 not-prose mt-12">
            <h2 className="text-2xl font-bold mb-4 text-green-400">Created By</h2>
            <div className="mb-4">
              <strong className="text-lg text-white">Saurav Kumar</strong>
              <p className="text-slate-300 text-sm">Builder, tinkerer, and apparent game designer now.</p>
            </div>

            <p className="mb-4 text-slate-200">
              I spend my days working on interesting problems in tech. Nights are for experiments like this. SiliconHalli came together in a creative sprint, and I'm excited to see where it goes next.
            </p>

            <a
              href="https://sauravtom.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 hover:underline"
            >
              sauravtom.github.io
            </a>
          </div>

          <div className="mt-12 not-prose">
            <h2 className="text-2xl font-bold mb-6 text-green-400">Want to Contribute?</h2>
            <p className="mb-6 text-slate-200">
              This is a work in progress, and I'd love your input! Whether you want to collaborate on the board game, have feedback on the digital version, or just want to chat about startups and game design – I'm all ears!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-800 p-4 rounded border border-slate-700">
                <h3 className="font-bold text-white mb-2">Ways to contribute</h3>
                <ul className="text-sm text-slate-300 space-y-2 list-disc pl-4">
                  <li><strong>Game Design:</strong> Ideas for mechanics/scenarios?</li>
                  <li><strong>Playtesting:</strong> Break the prototype!</li>
                  <li><strong>Art & Design:</strong> Bring it to life visually.</li>
                  <li><strong>Writing:</strong> Flavor text & scenarios.</li>
                  <li><strong>Development:</strong> Improve code/build apps.</li>
                </ul>
              </div>

              <div className="bg-slate-800 p-4 rounded border border-slate-700">
                 <h3 className="font-bold text-white mb-2">Reach out</h3>
                 <div className="flex flex-col space-y-3">
                    <a href="mailto:your-email@example.com" className="flex items-center text-slate-300 hover:text-white transition-colors">
                      <Mail size={18} className="mr-3" />
                      <span>Email</span>
                    </a>
                    {/* <a href="#" className="flex items-center text-slate-300 hover:text-white transition-colors">
                      <Twitter size={18} className="mr-3" />
                      <span>Twitter</span>
                    </a> */}
                    {/* <a href="#" className="flex items-center text-slate-300 hover:text-white transition-colors">
                      <Linkedin size={18} className="mr-3" />
                      <span>LinkedIn</span>
                    </a> */}
                    <a href="https://github.com/sauravtom" target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-300 hover:text-white transition-colors">
                      <Github size={18} className="mr-3" />
                      <span>@sauravtom</span>
                    </a>
                 </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8 mt-12 text-sm text-slate-400">
            <h3 className="text-lg font-bold text-white mb-4">Special Thanks</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>The original Y Combinator idle game that sparked this idea</li>
              <li>Claude (Anthropic) for being an incredible creative partner</li>
              <li>The Bangalore startup community for being endlessly entertaining and inspiring</li>
              <li>Everyone who's played, shared feedback, and kept the energy going</li>
            </ul>
          </div>

          <div className="mt-12 p-6 bg-green-900/20 border border-green-900 rounded text-center">
            <p className="text-lg font-bold text-green-400 italic">
              "Let's build something fun together. Because if we're going to survive this startup journey, we might as well make a game out of it." 🚀☕🎲
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
