# ThirtySix

The payload of the event, if requested.

## Example Usage

```typescript
import { ThirtySix } from "@vercel/sdk/models/via3.js";

let value: ThirtySix = {
  retention: {
    ceilingMode: "until-requested",
    defaultMode: "until-requested",
  },
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `retention`                                | [models.Retention](../models/retention.md) | :heavy_check_mark:                         | N/A                                        |