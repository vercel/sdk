# FourHundredAndFortyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFortyThree } from "@vercel/sdk/models/usereventpayload404type.js";

let value: FourHundredAndFortyThree = {
  nextConcurrentBuilds: 553.75,
  previousConcurrentBuilds: 1597.01,
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `nextConcurrentBuilds`     | *number*                   | :heavy_check_mark:         | N/A                        |
| `previousConcurrentBuilds` | *number*                   | :heavy_check_mark:         | N/A                        |