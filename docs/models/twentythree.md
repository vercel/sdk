# TwentyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { TwentyThree } from "@vercel/sdk/models/userevent.js";

let value: TwentyThree = {
  retention: {
    defaultMode: "until-requested",
    ceilingMode: "until-requested",
  },
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `retention`                                | [models.Retention](../models/retention.md) | :heavy_check_mark:                         | N/A                                        |