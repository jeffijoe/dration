# dration 

###### pronounced "duration"

A dependency-free JavaScript library for working with durations/time spans using pure functions and primitive types, written in TypeScript.

[![npm](https://img.shields.io/npm/v/dration.svg?maxAge=1000)](https://www.npmjs.com/package/dration)
[![dependency Status](https://img.shields.io/david/jeffijoe/dration.svg?maxAge=1000)](https://david-dm.org/jeffijoe/dration)
[![devDependency Status](https://img.shields.io/david/dev/jeffijoe/dration.svg?maxAge=1000)](https://david-dm.org/jeffijoe/dration)
[![Build Status](https://img.shields.io/travis/jeffijoe/dration.svg?maxAge=1000)](https://travis-ci.org/jeffijoe/dration)
[![Coveralls](https://img.shields.io/coveralls/jeffijoe/dration.svg?maxAge=1000)](https://coveralls.io/github/jeffijoe/dration)
[![npm](https://img.shields.io/npm/dt/dration.svg?maxAge=1000)](https://www.npmjs.com/package/dration)
[![npm](https://img.shields.io/npm/l/dration.svg?maxAge=1000)](https://github.com/jeffijoe/dration/blob/master/LICENSE.md)

# Install

With `npm`:

```
npm install dration
```

Or with `yarn`

```
yarn add dration
```

There are also UMD and ES Modules builds in `lib/`. The entire library is tree-shakeable, and has the proper configurations in `package.json` for bundlers like Webpack to pick it up.

# Usage

The functions are pure and work with milliseconds. The benefit of this is you don't need "add", "subtract", "greater than" and "equals"-style functions; _just use regular JavaScript!_

```ts
import * as Duration from 'dration'

const value = Duration.of(0, 0, 2) // creates a duration of 2 minutes
console.log(value) // 120000
console.log(typeof value) // "number"

// `fromMinutes` is a shortcut to creating a duration of 2 minutes
const newValue = value + Duration.fromMinutes(2) 
console.log(newValue) // 240000
console.log(Duration.format(newValue)) // 00:04:00

// A nice bonus of just using numbers, you can add a duration to a date quite easily:
const twoDaysFromNow = new Date(Date.now() + Duration.fromDays(2))
```

# API

The functions exposed by dration are quite simple and all follow the same form.
When referring to a "duration", it means a numeric value in milliseconds.

## `of(ms: number, s?: number, m?: number, h?: number, d?: number): number`

Probably the most important function, converts individual time components to a duration. Leaving any arguments out is the same as passing `0`.

The arguments are:

1. milliseconds
2. seconds
3. minutes
4. hours
5. days

## The `from` functions

There are `from` functions for each unit, and they all take a single parameter, the amount:

- `fromSeconds(seconds: number): number`
- `fromMinutes(minutes: number): number`
- `fromHours(hours: number): number`
- `fromDays(days: number): number`

## `between(left: Date, right: Date): number`

Returns the duration (milliseconds) between 2 dates.

```ts
const start = new Date('2019-05-28T12:00:00Z')
const end = new Date('2019-05-29T14:00:00Z')

const value = Duration.between(start, end)

console.log(value) // 1 02:00:00
```

## `format(duration: number): string`

Formats a duration to a string in `d hh:mm:ss.sss` format, with days and milliseconds left out if zero.

```ts
console.log(
  format(
    of(50, 4, 33, 2, 1)
  )
)
// "1 02:33:04.050"
```

# Author

Jeff Hansen — [@Jeffijoe](https://twitter.com/Jeffijoe)
