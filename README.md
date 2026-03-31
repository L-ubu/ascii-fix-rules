# ascii-fix-rules

AI rules that teach your coding assistant to generate correct ASCII art tables, boxes, and diagrams. Works with Cursor, Claude Code, and any AI that reads project rules.

## Install

```bash
# For Cursor
npx ascii-fix-rules init

# For Claude Code
npx ascii-fix-rules init --claude
```

That's it. Your AI assistant will now follow ASCII art best practices automatically.

## What it does

Installs a rules file that teaches your AI to:

- **Align columns correctly** — every row has delimiters at the same positions
- **Use consistent style** — never mix border characters in the same block
- **Pad cells properly** — 1 space on each side, always
- **Match border widths** — borders span the full width of the widest content
- **Handle CJK/emoji** — fullwidth characters count as 2 columns
- **Self-check before outputting** — verify alignment before showing ASCII art

### Before (without rules)

```
+----------------------------+
|  Project Status             |
+----------------------------+
|  73 files . 52k lines  |
|  45 pages              |
+----------------------------+
```

### After (with rules)

```
+----------------------+
| Project Status       |
+----------------------+
| 73 files . 52k lines |
| 45 pages             |
+----------------------+
```

## Usage

```bash
npx ascii-fix-rules init              # Install for Cursor (.cursor/rules/)
npx ascii-fix-rules init --cursor     # Same as above
npx ascii-fix-rules init --claude     # Install for Claude Code (.claude/rules/)
npx ascii-fix-rules                   # Print rules to stdout
```

## What gets installed

A single markdown file with:
- Rules for building correct tables and boxes
- Style reference (heavy, light, ASCII, rounded)
- Self-check checklist the AI runs before outputting
- Examples of correct formatting

## Automated fixing

For programmatic/CLI fixing of existing broken ASCII art, see [ascii-fix](https://github.com/L-ubu/ascii-fix).

## License

MIT

---

Made by [Lubu](https://github.com/L-ubu)
