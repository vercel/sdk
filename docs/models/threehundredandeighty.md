# ThreeHundredAndEighty

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEighty } from "@vercel/sdk/models/usereventpayload340budget.js";

let value: ThreeHundredAndEighty = {
  previousConcurrentBuilds: 3729.95,
  nextConcurrentBuilds: 4538.98,
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `previousConcurrentBuilds` | *number*                   | :heavy_check_mark:         | N/A                        |
| `nextConcurrentBuilds`     | *number*                   | :heavy_check_mark:         | N/A                        |