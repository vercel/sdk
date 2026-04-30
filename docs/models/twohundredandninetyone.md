# TwoHundredAndNinetyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndNinetyOne } from "@vercel/sdk/models/environment.js";

let value: TwoHundredAndNinetyOne = {
  enabled: false,
  scope: "dashboard",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `enabled`                          | *boolean*                          | :heavy_check_mark:                 | N/A                                |
| `scope`                            | [models.Scope](../models/scope.md) | :heavy_check_mark:                 | N/A                                |