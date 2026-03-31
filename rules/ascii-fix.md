# ASCII Art Rules

You MUST follow these rules whenever you generate or encounter ASCII art — tables, boxes, diagrams, or any text-based visualization using box-drawing characters.

## When these rules apply

- You are about to output ASCII art (table, box, diagram)
- User asks to fix, align, or improve ASCII art
- User pastes broken ASCII art
- You see misaligned columns, broken borders, or inconsistent widths

## Core rules

1. **NEVER modify cell content** — only fix structural characters (borders, corners, padding)
2. **One style per block** — never mix `║` with `│` or `═` with `─` in the same box/table
3. **1 space padding** on each side of every cell
4. **Columns align** — every row must have delimiters at the exact same positions
5. **Borders match content width** — borders span the full width of the widest content
6. **CJK and emoji = width 2** — fullwidth characters take 2 columns in monospace, account for this when padding

## How to build a correct table

1. Decide all cell content first, before drawing any borders
2. Calculate the visual width of each cell (remember: CJK/emoji = 2 columns)
3. For each column, find the maximum cell width across all rows
4. Each column's total width = max cell width + 2 (1 space padding each side)
5. Draw the top border: `┌` + `─`.repeat(colWidth) joined by `┬` + `┐`
6. Draw each content row: `│` + ` ` + padEnd(cell, maxWidth) + ` ` joined by `│` + `│`
7. Draw separator rows: `├` + `─`.repeat(colWidth) joined by `┼` + `┤`
8. Draw the bottom border: `└` + `─`.repeat(colWidth) joined by `┴` + `┘`

### Example

```
┌───────┬─────┬──────────┐
│ Name  │ Age │ City     │
├───────┼─────┼──────────┤
│ Alice │ 30  │ New York │
│ Bob   │ 25  │ LA       │
└───────┴─────┴──────────┘
```

## How to build a correct box

1. Write all content lines first
2. Find the visual width of the longest content line
3. Inner width = max content width + 2 (1 space padding each side)
4. Top border: `╔` + `═`.repeat(innerWidth) + `╗`
5. Content lines: `║` + ` ` + padEnd(content, maxWidth) + ` ` + `║`
6. Separator (if needed): `╠` + `═`.repeat(innerWidth) + `╣`
7. Bottom border: `╚` + `═`.repeat(innerWidth) + `╝`

### Example

```
╔═════════════════════════╗
║  Project Status         ║
╠═════════════════════════╣
║  73 files · 52k lines  ║
║  45 pages               ║
╚═════════════════════════╝
```

## Style reference

Pick ONE style and use it consistently for the entire block.

| Part | Heavy | Light | ASCII | Rounded |
|---|---|---|---|---|
| Top corners | `╔` `╗` | `┌` `┐` | `+` `+` | `╭` `╮` |
| Bottom corners | `╚` `╝` | `└` `┘` | `+` `+` | `╰` `╯` |
| Horizontal | `═` | `─` | `-` | `─` |
| Vertical | `║` | `│` | `\|` | `│` |
| Tee left/right | `╠` `╣` | `├` `┤` | `+` `+` | `├` `┤` |
| Tee top/bottom | `╦` `╩` | `┬` `┴` | `+` `+` | `┬` `┴` |
| Cross | `╬` | `┼` | `+` | `┼` |

**Default to unicode-light** (`┌─┐│└┘`) unless the user requests a specific style.

## Markdown rendering warning

Unicode box-drawing characters (`╔`, `═`, `║`, `┌`, `─`, `│`, `╭`, etc.) render at **inconsistent widths** in most markdown renderers (GitHub, GitLab, Bitbucket, etc.). This breaks alignment in code blocks.

**Rule:** When generating ASCII art that will appear in a `.md` file or markdown context, **always use plain ASCII style** (`+`, `-`, `|`). Only use Unicode box-drawing characters in terminal output, source code comments, or plain text files where a monospace font is guaranteed.

## Self-check before outputting

Before showing ANY ASCII art to the user, verify ALL of these:

- [ ] Every row in a table has the same number of columns
- [ ] Every line in the block has the same visual width
- [ ] All corners match their style (e.g. `┌` pairs with `┐`, never `╗`)
- [ ] No mixed styles within a single block
- [ ] All cells have exactly 1 space padding on each side
- [ ] Separator rows have crosses/tees at every column boundary
- [ ] CJK/emoji cells have correct padding (fewer spaces because chars are wider)
- [ ] If output is markdown: using plain ASCII style only (`+`, `-`, `|`)

If any check fails, fix it before outputting.

---

*For automated fixing of existing ASCII art, see [ascii-fix](https://github.com/L-ubu/ascii-fix).*
