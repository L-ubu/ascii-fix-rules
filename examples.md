# ASCII Art Examples

A collection of tables and boxes in various styles and sizes.

## Small Tables

### Minimal 2x2

```
┌───────┬───────┐
│ Key   │ Value │
├───────┼───────┤
│ Alpha │ 100   │
│ Beta  │ 200   │
└───────┴───────┘
```

### Single Row

```
┌────┬──────────┬────────┐
│ ID │ Name     │ Active │
├────┼──────────┼────────┤
│ 1  │ Postgres │ Yes    │
└────┴──────────┴────────┘
```

## Medium Tables

### Project Dependencies

```
┌──────────────┬─────────┬─────────┬────────────────────┐
│ Package      │ Version │ License │ Description        │
├──────────────┼─────────┼─────────┼────────────────────┤
│ express      │ 4.18.2  │ MIT     │ Web framework      │
│ pg           │ 8.11.3  │ MIT     │ PostgreSQL client  │
│ redis        │ 4.6.10  │ MIT     │ Redis client       │
│ jsonwebtoken │ 9.0.2   │ MIT     │ JWT implementation │
│ zod          │ 3.22.4  │ MIT     │ Schema validation  │
└──────────────┴─────────┴─────────┴────────────────────┘
```

### HTTP Status Codes

```
╔══════╦═══════════════════════╦══════════╗
║ Code ║ Message               ║ Category ║
╠══════╬═══════════════════════╬══════════╣
║ 200  ║ OK                    ║ Success  ║
║ 201  ║ Created               ║ Success  ║
║ 301  ║ Moved Permanently     ║ Redirect ║
║ 400  ║ Bad Request           ║ Client   ║
║ 401  ║ Unauthorized          ║ Client   ║
║ 403  ║ Forbidden             ║ Client   ║
║ 404  ║ Not Found             ║ Client   ║
║ 500  ║ Internal Server Error ║ Server   ║
║ 503  ║ Service Unavailable   ║ Server   ║
╚══════╩═══════════════════════╩══════════╝
```

## Wide Tables

### Team Roster

```
╭───────────────┬──────────────────┬───────────┬───────────┬──────────────────────────────────────╮
│ Name          │ Role             │ Team      │ Location  │ Focus Area                           │
├───────────────┼──────────────────┼───────────┼───────────┼──────────────────────────────────────┤
│ Alice Johnson │ Staff Engineer   │ Platform  │ Amsterdam │ API design and service architecture  │
│ Bob Chen      │ Senior Designer  │ Product   │ London    │ Design systems and accessibility     │
│ Carol Müller  │ Engineering Lead │ Platform  │ Berlin    │ Infrastructure and developer tooling │
│ Dave Kim      │ Product Manager  │ Product   │ Seoul     │ Roadmap and stakeholder alignment    │
│ Eve Santos    │ Junior Developer │ Platform  │ Lisbon    │ Frontend components and testing      │
│ Frank Tanaka  │ Data Engineer    │ Analytics │ Tokyo     │ Pipeline reliability and monitoring  │
╰───────────────┴──────────────────┴───────────┴───────────┴──────────────────────────────────────╯
```

### ASCII Style — Feature Matrix

```
+-------------------+-------+-------+-------+-------+--------+
| Feature           | Free  | Basic | Pro   | Team  | Custom |
+-------------------+-------+-------+-------+-------+--------+
| Users             | 1     | 5     | 25    | 100   | Custom |
| Storage (GB)      | 1     | 10    | 100   | 500   | Custom |
| API calls / month | 1k    | 10k   | 100k  | 1M    | Custom |
| Support           | Forum | Email | Chat  | Phone | Phone  |
| SSO               | No    | No    | Yes   | Yes   | Yes    |
| Audit log         | No    | No    | No    | Yes   | Yes    |
| SLA               | None  | None  | 99.9% | 99.9% | 99.99% |
+-------------------+-------+-------+-------+-------+--------+
```

## Boxes

### Simple Status Box

```
╔══════════════════════╗
║  Build Status: PASS  ║
╚══════════════════════╝
```

### Info Box with Separator

```
┌───────────────────────────┐
│ ascii-fix-rules v1.0.0    │
├───────────────────────────┤
│ AI rules for correct      │
│ ASCII art generation.     │
│                           │
│ Supports: Cursor, Claude  │
└───────────────────────────┘
```

### Dashboard Box

```
╔════════════════════════════════╗
║ DEPLOYMENT SUMMARY             ║
╠════════════════════════════════╣
║ Environment: production        ║
║ Version:     3.14.1            ║
║ Commit:      a1b2c3d           ║
║ Timestamp:   2026-03-31 11:45  ║
╠════════════════════════════════╣
║ Services:    12 healthy        ║
║ Uptime:      99.97%            ║
║ Avg latency: 42ms              ║
╚════════════════════════════════╝
```

### Rounded Warning Box

```
╭──────────────────────────────────────╮
│ WARNING                              │
├──────────────────────────────────────┤
│ This action cannot be undone.        │
│ All data in the staging environment  │
│ will be permanently deleted.         │
│                                      │
│ Proceed with caution.                │
╰──────────────────────────────────────╯
```

## Tiny Tables

### Boolean

```
┌───────┬───┐
│ Flag  │ ? │
├───────┼───┤
│ Debug │ Y │
│ Trace │ N │
└───────┴───┘
```

### Key-Value

```
┌──────────┬────────────────┐
│ Host     │ 127.0.0.1      │
│ Port     │ 5432           │
│ Database │ app_production │
│ SSL      │ required       │
└──────────┴────────────────┘
```
