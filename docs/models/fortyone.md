# FortyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { FortyOne } from "@vercel/sdk/models/payloadaction.js";

let value: FortyOne = {
  added: [
    "<value 1>",
    "<value 2>",
  ],
  changed: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  credential: {
    id: "<id>",
    name: "<value>",
    providerSlug: "<value>",
  },
  removed: [],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `added`                                                                      | *string*[]                                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `changed`                                                                    | *string*[]                                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `credential`                                                                 | [models.UserEventPayloadCredential](../models/usereventpayloadcredential.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `removed`                                                                    | *string*[]                                                                   | :heavy_check_mark:                                                           | N/A                                                                          |