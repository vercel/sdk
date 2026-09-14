# Fifteen

The payload of the event, if requested.

## Example Usage

```typescript
import { Fifteen } from "@vercel/sdk/models/userevent.js";

let value: Fifteen = {
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