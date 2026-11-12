# ThirtyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { ThirtyNine } from "@vercel/sdk/models/userevent.js";

let value: ThirtyNine = {
  added: [
    "<value 1>",
  ],
  changed: [
    "<value 1>",
  ],
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