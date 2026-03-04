# TwoHundredAndFifty

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFifty } from "@vercel/sdk/models/userevent.js";

let value: TwoHundredAndFifty = {
  enabled: false,
  scope: "log-drains",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `enabled`                          | *boolean*                          | :heavy_check_mark:                 | N/A                                |
| `scope`                            | [models.Scope](../models/scope.md) | :heavy_check_mark:                 | N/A                                |