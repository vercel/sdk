# ThreeHundred

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundred } from "@vercel/sdk/models/payloadenvironment.js";

let value: ThreeHundred = {
  enabled: true,
  scope: "dashboard",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `enabled`                          | *boolean*                          | :heavy_check_mark:                 | N/A                                |
| `scope`                            | [models.Scope](../models/scope.md) | :heavy_check_mark:                 | N/A                                |