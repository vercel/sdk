# ThreeHundredAndSixtyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSixtyFour } from "@vercel/sdk/models/addedprojects.js";

let value: ThreeHundredAndSixtyFour = {
  previousConcurrentBuilds: 5282.4,
  nextConcurrentBuilds: 9052.14,
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `previousConcurrentBuilds` | *number*                   | :heavy_check_mark:         | N/A                        |
| `nextConcurrentBuilds`     | *number*                   | :heavy_check_mark:         | N/A                        |