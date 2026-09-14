# TwentyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { TwentyOne } from "@vercel/sdk/models/userevent.js";

let value: TwentyOne = {
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
  ],
  changed: [
    "<value 1>",
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