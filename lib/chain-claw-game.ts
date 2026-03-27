export type Direction = 'up' | 'down' | 'left' | 'right'

export interface Position {
  x: number
  y: number
}

export interface GameState {
  gridSize: number
  snake: Position[]
  direction: Direction
  food: Position
  foodEmoji: string
  score: number
  gameOver: boolean
  paused: boolean
}

const DIRECTION_VECTORS: Record<Direction, Position> = {
  up: { x: 0, y: -1 },
  down: { x: 0, y: 1 },
  left: { x: -1, y: 0 },
  right: { x: 1, y: 0 },
}

const OPPOSITE_DIRECTION: Record<Direction, Direction> = {
  up: 'down',
  down: 'up',
  left: 'right',
  right: 'left',
}

const FOOD_EMOJIS = ['🐟']

const samePosition = (a: Position, b: Position) => a.x === b.x && a.y === b.y

const wrapPosition = (position: Position, gridSize: number): Position => {
  const x = ((position.x % gridSize) + gridSize) % gridSize
  const y = ((position.y % gridSize) + gridSize) % gridSize
  return { x, y }
}

const randomInt = (max: number, randomFn: () => number) => {
  return Math.floor(randomFn() * max)
}

const pickFoodEmoji = (randomFn: () => number = Math.random) => {
  return FOOD_EMOJIS[randomInt(FOOD_EMOJIS.length, randomFn)]
}

export const getEmptyCells = (gridSize: number, snake: Position[]) => {
  const occupied = new Set(snake.map((segment) => `${segment.x},${segment.y}`))
  const emptyCells: Position[] = []

  for (let y = 0; y < gridSize; y += 1) {
    for (let x = 0; x < gridSize; x += 1) {
      const key = `${x},${y}`
      if (!occupied.has(key)) {
        emptyCells.push({ x, y })
      }
    }
  }

  return emptyCells
}

export const pickFoodPosition = (
  gridSize: number,
  snake: Position[],
  randomFn: () => number = Math.random
): Position | null => {
  const emptyCells = getEmptyCells(gridSize, snake)
  if (emptyCells.length === 0) {
    return null
  }

  return emptyCells[randomInt(emptyCells.length, randomFn)]
}

export const createInitialState = (
  gridSize = 16,
  randomFn: () => number = Math.random
): GameState => {
  const center = Math.floor(gridSize / 2)
  const snake: Position[] = [
    { x: center, y: center },
    { x: center - 1, y: center },
  ]

  const food = pickFoodPosition(gridSize, snake, randomFn)

  if (!food) {
    throw new Error('Unable to place initial food')
  }

  return {
    gridSize,
    snake,
    direction: 'right',
    food,
    foodEmoji: pickFoodEmoji(randomFn),
    score: 0,
    gameOver: false,
    paused: false,
  }
}

export const updateDirection = (state: GameState, nextDirection: Direction): GameState => {
  if (state.gameOver) {
    return state
  }

  const currentDirection = state.direction
  const isOpposite = OPPOSITE_DIRECTION[currentDirection] === nextDirection

  if (isOpposite && state.snake.length > 1) {
    return state
  }

  if (currentDirection === nextDirection) {
    return state
  }

  return {
    ...state,
    direction: nextDirection,
  }
}

export const togglePause = (state: GameState): GameState => {
  if (state.gameOver) {
    return state
  }

  return {
    ...state,
    paused: !state.paused,
  }
}

export const stepGame = (
  state: GameState,
  randomFn: () => number = Math.random
): GameState => {
  if (state.gameOver || state.paused) {
    return state
  }

  const movement = DIRECTION_VECTORS[state.direction]
  const head = state.snake[0]
  const nextHead = {
    x: head.x + movement.x,
    y: head.y + movement.y,
  }
  const wrappedHead = wrapPosition(nextHead, state.gridSize)

  const willGrow = samePosition(wrappedHead, state.food)
  const collisionBody = willGrow ? state.snake : state.snake.slice(0, -1)
  const hasSelfCollision = collisionBody.some((segment) => samePosition(segment, wrappedHead))

  if (hasSelfCollision) {
    return {
      ...state,
      gameOver: true,
    }
  }

  const nextSnake = [wrappedHead, ...state.snake]
  if (!willGrow) {
    nextSnake.pop()
  }

  if (!willGrow) {
    return {
      ...state,
      snake: nextSnake,
    }
  }

  const nextFood = pickFoodPosition(state.gridSize, nextSnake, randomFn)

  if (!nextFood) {
    return {
      ...state,
      snake: nextSnake,
      score: state.score + 1,
      gameOver: true,
    }
  }

  return {
    ...state,
    snake: nextSnake,
    food: nextFood,
    foodEmoji: pickFoodEmoji(randomFn),
    score: state.score + 1,
  }
}
