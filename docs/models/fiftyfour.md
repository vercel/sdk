# FiftyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { FiftyFour } from "@vercel/sdk/models/twenty.js";

let value: FiftyFour = {
  retention: {
    ceilingMode: "days",
    defaultMode: "until-requested",
  },
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `retention`                                | [models.Retention](../models/retention.md) | :heavy_check_mark:                         | N/A                                        |