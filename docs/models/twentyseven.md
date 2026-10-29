# TwentySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { TwentySeven } from "@vercel/sdk/models/usereventpayload22provider.js";

let value: TwentySeven = {
  apiKey: {
    id: "<id>",
    name: "<value>",
  },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `apiKey`                                           | [models.PayloadApiKey](../models/payloadapikey.md) | :heavy_check_mark:                                 | N/A                                                |