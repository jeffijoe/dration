import { format } from '../format'
import { of } from '../create'

test('format', () => {
  expect(format(of(5))).toMatchInlineSnapshot(`"00:00:00.005"`)
  expect(format(of(0, 30))).toMatchInlineSnapshot(`"00:00:30"`)
  expect(format(of(0, 65))).toMatchInlineSnapshot(`"00:01:05"`)
  expect(format(of(0, 0, 30, 2))).toMatchInlineSnapshot(`"02:30:00"`)
  expect(format(of(0, 0, 0, 14, 2))).toMatchInlineSnapshot(`"2 14:00:00"`)
  expect(format(of(0, 0, 0, -2))).toMatchInlineSnapshot(`"-02:00:00"`)
})
