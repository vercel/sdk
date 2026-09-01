# TwentyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { TwentyEight } from "@vercel/sdk/models/piiredaction.js";

let value: TwentyEight = {
  retention: {
    defaultMode: "until-requested",
    ceilingMode: "days",
  },
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `retention`                                | [models.Retention](../models/retention.md) | :heavy_check_mark:                         | N/A                                        |