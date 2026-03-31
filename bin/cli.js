#!/usr/bin/env node

import { readFileSync, mkdirSync, copyFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';

const __dirname = dirname(fileURLToPath(import.meta.url));
const RULES_FILE = join(__dirname, '..', 'rules', 'ascii-fix.md');

const USAGE = `
ascii-fix-rules — AI rules for generating correct ASCII art

Usage:
  npx ascii-fix-rules init [--cursor | --claude]   Install rules into your project
  npx ascii-fix-rules                               Print rules to stdout
  npx ascii-fix-rules --help                         Show this help

Options:
  --cursor    Install to .cursor/rules/ascii-fix.md (default)
  --claude    Install to .claude/rules/ascii-fix.md
  --help      Show this help message

Examples:
  npx ascii-fix-rules init              # Install for Cursor
  npx ascii-fix-rules init --claude     # Install for Claude Code
  npx ascii-fix-rules > rules.md        # Save rules to a file
`.trim();

const { values: flags, positionals } = parseArgs({
  options: {
    cursor: { type: 'boolean', default: false },
    claude: { type: 'boolean', default: false },
    help: { type: 'boolean', short: 'h', default: false },
  },
  allowPositionals: true,
});

if (flags.help) {
  console.log(USAGE);
  process.exit(0);
}

const command = positionals[0];

if (command === 'init') {
  const targetDir = flags.claude
    ? join(process.cwd(), '.claude', 'rules')
    : join(process.cwd(), '.cursor', 'rules');

  const targetFile = join(targetDir, 'ascii-fix.md');
  const platform = flags.claude ? 'Claude Code' : 'Cursor';

  mkdirSync(targetDir, { recursive: true });
  copyFileSync(RULES_FILE, targetFile);

  console.log(`  Installed ascii-fix rules for ${platform}`);
  console.log(`  ${targetFile}`);
  console.log();
  console.log(`  Your AI assistant will now follow ASCII art best practices.`);
} else {
  // No command — print rules to stdout
  const rules = readFileSync(RULES_FILE, 'utf-8');
  process.stdout.write(rules);
}
