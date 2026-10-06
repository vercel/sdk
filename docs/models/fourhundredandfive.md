# FourHundredAndFive

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFive } from "@vercel/sdk/models/threehundredandsixtyone.js";

let value: FourHundredAndFive = {
  nextConcurrentBuilds: 9730.9,
  previousConcurrentBuilds: 9174.05,
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `nextConcurrentBuilds`     | *number*                   | :heavy_check_mark:         | N/A                        |
| `previousConcurrentBuilds` | *number*                   | :heavy_check_mark:         | N/A                        |