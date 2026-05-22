# TwoHundredAndNinetyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndNinetyTwo } from "@vercel/sdk/models/payloadenvironment.js";

let value: TwoHundredAndNinetyTwo = {
  previousConcurrentBuilds: 3709.71,
  nextConcurrentBuilds: 8966.71,
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `previousConcurrentBuilds` | *number*                   | :heavy_check_mark:         | N/A                        |
| `nextConcurrentBuilds`     | *number*                   | :heavy_check_mark:         | N/A                        |