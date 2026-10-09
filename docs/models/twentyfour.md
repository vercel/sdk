# TwentyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { TwentyFour } from "@vercel/sdk/models/principal.js";

let value: TwentyFour = {
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