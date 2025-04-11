# CreateLogDrainLogDrainsSources

The sources from which logs are currently being delivered to this log drain.

## Example Usage

```typescript
import { CreateLogDrainLogDrainsSources } from "@vercel/sdk/models/createlogdrainop.js";

let value: CreateLogDrainLogDrainsSources = "build";
```

## Values

```typescript
"build" | "edge" | "lambda" | "static" | "external" | "firewall"
```