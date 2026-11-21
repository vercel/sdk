# OneHundredAndThirteen

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndThirteen } from "@vercel/sdk/models/usereventpayloaditems.js";

let value: OneHundredAndThirteen = {
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