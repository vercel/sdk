# EightyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyOne } from "@vercel/sdk/models/piiredaction.js";

let value: EightyOne = {
  configuration: {
    id: "<id>",
    name: "<value>",
  },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `configuration`                                    | [models.Configuration](../models/configuration.md) | :heavy_check_mark:                                 | N/A                                                |