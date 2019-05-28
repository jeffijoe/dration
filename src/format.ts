import {
  getDays,
  getHours,
  getMinutes,
  getSeconds,
  getMilliseconds
} from './query'

/**
 * Formats a duration as a string.
 *
 * @param duration
 */
export function format(duration: number): string {
  const abs = Math.abs(duration)
  const isNegative = abs !== duration
  const days = getDays(abs)
  const hours = getHours(abs)
  const minutes = getMinutes(abs)
  const seconds = getSeconds(abs)
  const milliseconds = getMilliseconds(abs)
  let result = `${padNumber(hours)}:${padNumber(minutes)}:${padNumber(seconds)}`

  // Only displays the milliseconds portion is there is one.
  if (milliseconds !== 0) {
    result += `.${padNumber(milliseconds, 3)}`
  }

  // Only displays the days portion is there is one.
  if (days !== 0) {
    result = `${days} ${result}`
  }

  // Negative durations need a prefix.
  if (isNegative) {
    result = '-' + result
  }

  return result
}

/**
 * Pads a number with extra zeroes if needed.
 *
 * @param n
 */
function padNumber(n: number, amount = 2): string {
  const s = n.toString()
  return '0'.repeat(amount - s.length) + s
}
