# FourHundredAndTen

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndTen } from "@vercel/sdk/models/threehundredandsixtysix.js";

let value: FourHundredAndTen = {
  nextConcurrentBuilds: 6382.62,
  previousConcurrentBuilds: 4742.66,
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `nextConcurrentBuilds`     | *number*                   | :heavy_check_mark:         | N/A                        |
| `previousConcurrentBuilds` | *number*                   | :heavy_check_mark:         | N/A                        |