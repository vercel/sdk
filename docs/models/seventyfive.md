# SeventyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { SeventyFive } from "@vercel/sdk/models/usereventpayload41action.js";

let value: SeventyFive = {
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