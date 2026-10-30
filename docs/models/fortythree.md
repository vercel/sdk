# FortyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { FortyThree } from "@vercel/sdk/models/usereventpayload26apikey.js";

let value: FortyThree = {
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