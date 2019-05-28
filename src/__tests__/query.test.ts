import { of } from '../create'
import {
  getMilliseconds,
  getSeconds,
  getMinutes,
  getHours,
  getDays,
  getTotalSeconds,
  getTotalMinutes,
  getTotalHours,
  getTotalDays
} from '../query'

test('get*', () => {
  expect(getMilliseconds(of(500, 1))).toBe(500)
  expect(getSeconds(of(500, 1, 2))).toBe(1)
  expect(getMinutes(of(500, 1, 2, 4))).toBe(2)
  expect(getHours(of(500, 1, 2, 4, 6))).toBe(4)
  expect(getDays(of(500, 1, 2, 4, 6))).toBe(6)
})

test('getTotal*', () => {
  expect(getTotalSeconds(of(500, 0))).toBe(0.5)
  expect(getTotalSeconds(of(500, 1))).toBe(1.5)

  expect(getTotalMinutes(of(0, 30, 0))).toBe(0.5)
  expect(getTotalMinutes(of(0, 30, 1))).toBe(1.5)

  expect(getTotalHours(of(0, 0, 30, 0))).toBe(0.5)
  expect(getTotalHours(of(0, 0, 30, 1))).toBe(1.5)

  expect(getTotalDays(of(0, 0, 0, 12, 0))).toBe(0.5)
  expect(getTotalDays(of(0, 0, 0, 12, 1))).toBe(1.5)
})
