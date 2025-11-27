# Three

The payload of the event, if requested.

## Example Usage

```typescript
import { Three } from "@vercel/sdk/models/userevent.js";

let value: Three = {
  action: "rotated",
  environment: "<value>",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `action`                                           | [models.PayloadAction](../models/payloadaction.md) | :heavy_check_mark:                                 | N/A                                                |
| `label`                                            | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `projectName`                                      | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `projectId`                                        | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `environment`                                      | *string*                                           | :heavy_check_mark:                                 | N/A                                                |