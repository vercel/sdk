# FourHundredAndTwentyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndTwentyOne } from "@vercel/sdk/models/usereventpayload380type.js";

let value: FourHundredAndTwentyOne = {
  nextConcurrentBuilds: 7890.55,
  previousConcurrentBuilds: 2039.92,
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `nextConcurrentBuilds`     | *number*                   | :heavy_check_mark:         | N/A                        |
| `previousConcurrentBuilds` | *number*                   | :heavy_check_mark:         | N/A                        |