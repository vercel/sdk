# FortyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { FortyTwo } from "@vercel/sdk/models/usereventpayload27provider.js";

let value: FortyTwo = {
  added: [],
  changed: [
    "<value 1>",
    "<value 2>",
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