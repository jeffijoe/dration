import { MS_DAY, MS_HOUR, MS_MINUTE, MS_SECOND } from './constants'

/**
 * Returns the duration in milliseconds.
 *
 * @param ms the amount of milliseconds
 * @param s the amount of seconds
 * @param m the amount of minutes
 * @param h the amount of hours
 * @param d the amount of days
 */
export function of(
  ms?: number,
  s?: number,
  m?: number,
  h?: number,
  d?: number
): number {
  ms = ms || 0
  s = s || 0
  m = m || 0
  h = h || 0
  d = d || 0
  return ms + s * MS_SECOND + m * MS_MINUTE + h * MS_HOUR + d * MS_DAY
}

/**
 * Returns the duration from seconds.
 *
 * @param seconds
 */
export function fromSeconds(seconds: number): number {
  return seconds * MS_SECOND
}

/**
 * Returns the duration from minutes.
 *
 * @param minutes
 */
export function fromMinutes(minutes: number): number {
  return minutes * MS_MINUTE
}

/**
 * Returns the duration from hours.
 *
 * @param hours
 */
export function fromHours(hours: number): number {
  return hours * MS_HOUR
}

/**
 * Returns the duration from days.
 *
 * @param days
 */
export function fromDays(days: number): number {
  return days * MS_DAY
}

/**
 * Gets the duration between 2 dates.
 *
 * @param left the first date
 * @param right
 */
export function between(left: Date, right: Date) {
  if (left instanceof Date === false) {
    throw new TypeError(
      'Both arguments passed to between must be actual Date instances, but the first one was not.'
    )
  }

  if (right instanceof Date === false) {
    throw new TypeError(
      'Both arguments passed to between must be actual Date instances, but the second one was not.'
    )
  }

  return right.getTime() - left.getTime()
}
