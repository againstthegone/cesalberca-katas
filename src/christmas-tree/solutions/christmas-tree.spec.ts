import { describe, it, expect } from 'vitest'
import { ChristmasTree } from './christmas-tree'

describe('ChristmasTree', () => {
  it('renders a tree with a single row when 1 is passed in', () => {
    const christmasTree = new ChristmasTree()
    const actual = christmasTree.render(1)

    expect(actual).toBe(`*
|
`)
  })

  it('renders a tree with two rows when 2 is passed in', () => {
    const christmasTree = new ChristmasTree()
    const actual = christmasTree.render(2)

    expect(actual).toBe(` *
***
 |
`)
  })

  it('should render a tree with 3 rows', () => {
    const christmasTree = new ChristmasTree()

    const actual = christmasTree.render(3)

    expect(actual).toBe(`  *
 ***
*****
  |
`)
  })
})
