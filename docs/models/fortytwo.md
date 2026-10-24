# FortyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { FortyTwo } from "@vercel/sdk/models/twentyone.js";

let value: FortyTwo = {
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