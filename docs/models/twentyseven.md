# TwentySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { TwentySeven } from "@vercel/sdk/models/via.js";

let value: TwentySeven = {
  added: [
    "<value 1>",
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
    "<value 3>",
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `added`                                                    | *string*[]                                                 | :heavy_check_mark:                                         | N/A                                                        |
| `changed`                                                  | *string*[]                                                 | :heavy_check_mark:                                         | N/A                                                        |
| `credential`                                               | [models.PayloadCredential](../models/payloadcredential.md) | :heavy_check_mark:                                         | N/A                                                        |
| `removed`                                                  | *string*[]                                                 | :heavy_check_mark:                                         | N/A                                                        |