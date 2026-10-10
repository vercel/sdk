# FourHundredAndFifteen

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFifteen } from "@vercel/sdk/models/usereventpayload373previous.js";

let value: FourHundredAndFifteen = {
  nextConcurrentBuilds: 1411.16,
  previousConcurrentBuilds: 2737.81,
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `nextConcurrentBuilds`     | *number*                   | :heavy_check_mark:         | N/A                        |
| `previousConcurrentBuilds` | *number*                   | :heavy_check_mark:         | N/A                        |