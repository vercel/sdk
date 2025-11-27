# ThirtyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { ThirtyFive } from "@vercel/sdk/models/userevent.js";

let value: ThirtyFive = {
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