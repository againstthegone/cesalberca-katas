export class ChristmasTree {
  render(rows: number): string {
    var tree = ''
    for (var i = 0; i < rows; ++i) {
      const spacer = ' '.repeat(rows - 1 - i)
      const leaves = '*'.repeat(i * 2 + 1)
      tree += spacer + leaves + `\n`
    }

    const trunk = ' '.repeat(rows - 1) + '|' + `\n`
    return tree + trunk
  }
}
