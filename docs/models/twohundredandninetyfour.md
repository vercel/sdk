# TwoHundredAndNinetyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndNinetyFour } from "@vercel/sdk/models/payloadenvironment.js";

let value: TwoHundredAndNinetyFour = {
  previousConcurrentBuilds: 3455.89,
  nextConcurrentBuilds: 7317.1,
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `previousConcurrentBuilds` | *number*                   | :heavy_check_mark:         | N/A                        |
| `nextConcurrentBuilds`     | *number*                   | :heavy_check_mark:         | N/A                        |