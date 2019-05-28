import {
  of,
  fromSeconds,
  fromMinutes,
  fromHours,
  fromDays,
  between
} from '../create'

test('of', () => {
  expect(of()).toBe(0)
  expect(of(1000)).toBe(1000)
  expect(of(0, 1)).toBe(1000)
  expect(of(0, 0, 1)).toBe(60000)
  expect(of(0, 0, 0, 1)).toBe(3600000)
  expect(of(0, 0, 0, 0, 1)).toBe(86400000)

  expect(of(1, 2, 3, 4, 5)).toBe(446582001)
  expect(of(-1, -2, -3, -4, -5)).toBe(-446582001)
})

test('from*', () => {
  expect(fromSeconds(1)).toBe(1000)
  expect(fromMinutes(1)).toBe(60000)
  expect(fromHours(1)).toBe(3600000)
  expect(fromDays(1)).toBe(86400000)

  expect(fromDays(-1)).toBe(-86400000)

  expect(() => between(null as any, null as any)).toThrow()
  expect(() => between(new Date(), null as any)).toThrow()
})

test('between', () => {
  expect(between(new Date(0), new Date(10))).toBe(10)
  expect(between(new Date(10), new Date(0))).toBe(-10)
})
