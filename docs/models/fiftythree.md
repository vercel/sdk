# FiftyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { FiftyThree } from "@vercel/sdk/models/usereventprincipaltype.js";

let value: FiftyThree = {
  retention: {
    ceilingMode: "until-requested",
    defaultMode: "days",
  },
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `retention`                                | [models.Retention](../models/retention.md) | :heavy_check_mark:                         | N/A                                        |