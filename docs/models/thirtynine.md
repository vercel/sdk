# ThirtyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { ThirtyNine } from "@vercel/sdk/models/userevent.js";

let value: ThirtyNine = {
  previousConcurrentBuilds: 3862.91,
  nextConcurrentBuilds: 3531.2,
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `previousConcurrentBuilds` | *number*                   | :heavy_check_mark:         | N/A                        |
| `nextConcurrentBuilds`     | *number*                   | :heavy_check_mark:         | N/A                        |