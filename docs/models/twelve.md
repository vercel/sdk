# Twelve

The payload of the event, if requested.

## Example Usage

```typescript
import { Twelve } from "@vercel/sdk/models/userevent.js";

let value: Twelve = {
  projectName: "<value>",
  alias: "<value>",
  action: "created",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `projectName`                                      | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `alias`                                            | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `action`                                           | [models.PayloadAction](../models/payloadaction.md) | :heavy_check_mark:                                 | N/A                                                |