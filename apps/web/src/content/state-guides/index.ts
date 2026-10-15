import type { StateCode, StateGuide } from '../types'

/** One researched file per state, e.g. ./oh.ts. A state is published once its guide is listed here. */
const guides: StateGuide[] = []

export const stateGuides = new Map<StateCode, StateGuide>(guides.map((g) => [g.code, g]))
