# FourHundredAndSeventeen

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSeventeen } from "@vercel/sdk/models/usereventpayload375previous.js";

let value: FourHundredAndSeventeen = {
  nextConcurrentBuilds: 1760.76,
  previousConcurrentBuilds: 9734.94,
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `nextConcurrentBuilds`     | *number*                   | :heavy_check_mark:         | N/A                        |
| `previousConcurrentBuilds` | *number*                   | :heavy_check_mark:         | N/A                        |