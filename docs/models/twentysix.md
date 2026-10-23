# TwentySix

The payload of the event, if requested.

## Example Usage

```typescript
import { TwentySix } from "@vercel/sdk/models/twenty.js";

let value: TwentySix = {
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