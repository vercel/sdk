# TwoHundredAndFortyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFortyThree } from "@vercel/sdk/models/userevent.js";

let value: TwoHundredAndFortyThree = {
  enabled: true,
  scope: "log-drains",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `enabled`                          | *boolean*                          | :heavy_check_mark:                 | N/A                                |
| `scope`                            | [models.Scope](../models/scope.md) | :heavy_check_mark:                 | N/A                                |