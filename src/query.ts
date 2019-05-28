import { MS_DAY, MS_HOUR, MS_MINUTE, MS_SECOND } from './constants'

/**
 * Gets the millisecond component of a duration.
 *
 * @param duration
 */
export function getMilliseconds(duration: number): number {
  return duration % 1000
}

/**
 * Gets the second component of a duration.
 *
 * @param duration
 */
export function getSeconds(duration: number): number {
  return Math.floor(duration / MS_SECOND) % 60
}

/**
 * Gets the minute component of a duration.
 *
 * @param duration
 */
export function getMinutes(duration: number): number {
  return Math.floor(duration / MS_MINUTE) % 60
}

/**
 * Gets the hour component of a duration.
 *
 * @param duration
 */
export function getHours(duration: number): number {
  return Math.floor(duration / MS_HOUR) % 24
}

/**
 * Gets the day component of a duration.
 *
 * @param duration
 */
export function getDays(duration: number): number {
  return Math.floor(duration / MS_DAY)
}

/**
 * Gets the duration in seconds.
 *
 * @param duration
 */
export function getTotalSeconds(duration: number): number {
  return duration / MS_SECOND
}

/**
 * Gets the duration in minutes.
 *
 * @param duration
 */
export function getTotalMinutes(duration: number): number {
  return duration / MS_MINUTE
}

/**
 * Gets the duration in hours.
 *
 * @param duration
 */
export function getTotalHours(duration: number): number {
  return duration / MS_HOUR
}

/**
 * Gets the duration in days.
 *
 * @param duration
 */
export function getTotalDays(duration: number): number {
  return duration / MS_DAY
}
