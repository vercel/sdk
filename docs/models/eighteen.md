# Eighteen

The payload of the event, if requested.

## Example Usage

```typescript
import { Eighteen } from "@vercel/sdk/models/userevent.js";

let value: Eighteen = {
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