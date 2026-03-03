# TwoHundredAndFortyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFortyFour } from "@vercel/sdk/models/userevent.js";

let value: TwoHundredAndFortyFour = {
  enabled: true,
  scope: "dashboard",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `enabled`                          | *boolean*                          | :heavy_check_mark:                 | N/A                                |
| `scope`                            | [models.Scope](../models/scope.md) | :heavy_check_mark:                 | N/A                                |