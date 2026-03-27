'use client'

import { useEffect, useMemo, useState } from 'react'
import {
  createInitialState,
  stepGame,
  togglePause,
  type Direction,
  updateDirection,
} from '@/lib/chain-claw-game'

const GRID_SIZE = 16
const TICK_MS = 140

const KEY_DIRECTION_MAP: Record<string, Direction> = {
  ArrowUp: 'up',
  ArrowDown: 'down',
  ArrowLeft: 'left',
  ArrowRight: 'right',
  w: 'up',
  a: 'left',
  s: 'down',
  d: 'right',
}

const CONTROL_ROWS: Direction[][] = [['up'], ['left', 'down', 'right']]

const DIRECTION_LABELS: Record<Direction, string> = {
  up: 'Up',
  down: 'Down',
  left: 'Left',
  right: 'Right',
}

export default function ChainClawPage() {
  const [gameState, setGameState] = useState(() => createInitialState(GRID_SIZE))

  const snakeCells = useMemo(() => {
    return new Set(gameState.snake.map((segment) => `${segment.x},${segment.y}`))
  }, [gameState.snake])

  useEffect(() => {
    const interval = setInterval(() => {
      setGameState((current) => stepGame(current))
    }, TICK_MS)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const nextDirection = KEY_DIRECTION_MAP[event.key]

      if (nextDirection) {
        event.preventDefault()
        setGameState((current) => updateDirection(current, nextDirection))
      }

      if (event.key === ' ' || event.key.toLowerCase() === 'p') {
        event.preventDefault()
        setGameState((current) => togglePause(current))
      }

      if (event.key === 'r') {
        event.preventDefault()
        setGameState(createInitialState(GRID_SIZE))
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const statusLabel = gameState.gameOver
    ? 'Game Over'
    : gameState.paused
      ? 'Paused'
      : 'Running'

  return (
    <main className="min-h-screen bg-white px-4 py-8 text-black dark:bg-[#111111] dark:text-white">
      <section className="mx-auto flex w-full max-w-2xl flex-col items-center gap-6">
        <header className="w-full rounded-lg border border-gray-200 p-4 dark:border-gray-800">
          <h1 className="text-2xl font-semibold">Chain Claw</h1>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Collect food to grow your claw chain. Avoid walls and yourself.
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-md bg-gray-100 px-2 py-1 dark:bg-gray-800">Score: {gameState.score}</span>
            <span className="rounded-md bg-gray-100 px-2 py-1 dark:bg-gray-800">Status: {statusLabel}</span>
            <button
              className="rounded-md border border-gray-300 px-3 py-1.5 text-sm hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
              onClick={() => setGameState((current) => togglePause(current))}
              type="button"
            >
              {gameState.paused ? 'Resume' : 'Pause'}
            </button>
            <button
              className="rounded-md border border-gray-300 px-3 py-1.5 text-sm hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
              onClick={() => setGameState(createInitialState(GRID_SIZE))}
              type="button"
            >
              Restart
            </button>
          </div>
        </header>

        <div
          className="grid w-full max-w-[540px] overflow-hidden rounded-lg border border-gray-300 bg-gray-100 dark:border-gray-700 dark:bg-gray-900"
          style={{
            gridTemplateColumns: `repeat(${gameState.gridSize}, minmax(0, 1fr))`,
            aspectRatio: '1 / 1',
          }}
          role="img"
          aria-label="Snake game board"
        >
          {Array.from({ length: gameState.gridSize * gameState.gridSize }, (_, index) => {
            const x = index % gameState.gridSize
            const y = Math.floor(index / gameState.gridSize)
            const key = `${x},${y}`
            const isSnake = snakeCells.has(key)
            const isFood = gameState.food.x === x && gameState.food.y === y

            let cellClassName = 'border border-black/5 dark:border-white/5 bg-transparent'
            if (isSnake) {
              cellClassName = 'border border-black/5 dark:border-white/5 bg-black dark:bg-white'
            }
            if (isFood) {
              cellClassName = 'border border-black/5 dark:border-white/5 bg-red-500'
            }

            return <div className={cellClassName} key={key} />
          })}
        </div>

        <div className="w-full rounded-lg border border-gray-200 p-4 text-sm dark:border-gray-800">
          <p>
            Controls: Arrow keys or WASD. Press <span className="font-semibold">P</span> or space to pause,{' '}
            <span className="font-semibold">R</span> to restart.
          </p>
        </div>

        <div className="w-full max-w-[320px] rounded-lg border border-gray-200 p-4 dark:border-gray-800 md:hidden">
          <p className="mb-3 text-center text-sm text-gray-600 dark:text-gray-400">Touch Controls</p>
          <div className="flex flex-col items-center gap-2">
            {CONTROL_ROWS.map((row, rowIndex) => (
              <div className="flex gap-2" key={`row-${rowIndex}`}>
                {row.map((direction) => (
                  <button
                    className="min-h-[44px] min-w-[64px] rounded-md border border-gray-300 px-3 py-2 text-sm hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
                    key={direction}
                    onClick={() => setGameState((current) => updateDirection(current, direction))}
                    type="button"
                  >
                    {DIRECTION_LABELS[direction]}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
