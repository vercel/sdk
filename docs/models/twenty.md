# Twenty

The payload of the event, if requested.

## Example Usage

```typescript
import { Twenty } from "@vercel/sdk/models/userevent.js";

let value: Twenty = {
  credential: {
    id: "<id>",
    name: "<value>",
    providerSlug: "<value>",
  },
  added: [
    "<value 1>",
    "<value 2>",
  ],
  removed: [
    "<value 1>",
    "<value 2>",
  ],
  changed: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `credential`                                               | [models.PayloadCredential](../models/payloadcredential.md) | :heavy_check_mark:                                         | N/A                                                        |
| `added`                                                    | *string*[]                                                 | :heavy_check_mark:                                         | N/A                                                        |
| `removed`                                                  | *string*[]                                                 | :heavy_check_mark:                                         | N/A                                                        |
| `changed`                                                  | *string*[]                                                 | :heavy_check_mark:                                         | N/A                                                        |