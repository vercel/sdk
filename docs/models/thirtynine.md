# ThirtyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { ThirtyNine } from "@vercel/sdk/models/via3.js";

let value: ThirtyNine = {
  retention: {
    ceilingMode: "days",
    defaultMode: "days",
  },
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `retention`                                | [models.Retention](../models/retention.md) | :heavy_check_mark:                         | N/A                                        |