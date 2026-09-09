# EightyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyThree } from "@vercel/sdk/models/payloadrule.js";

let value: EightyThree = {
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