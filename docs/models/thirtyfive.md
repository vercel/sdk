# ThirtyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { ThirtyFive } from "@vercel/sdk/models/userevent.js";

let value: ThirtyFive = {
  added: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  changed: [],
  credential: {
    id: "<id>",
    name: "<value>",
    providerSlug: "<value>",
  },
  removed: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `added`                                                                      | *string*[]                                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `changed`                                                                    | *string*[]                                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `credential`                                                                 | [models.UserEventPayloadCredential](../models/usereventpayloadcredential.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `removed`                                                                    | *string*[]                                                                   | :heavy_check_mark:                                                           | N/A                                                                          |