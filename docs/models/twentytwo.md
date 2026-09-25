# TwentyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { TwentyTwo } from "@vercel/sdk/models/userevent.js";

let value: TwentyTwo = {
  added: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  changed: [
    "<value 1>",
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

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `added`                                                    | *string*[]                                                 | :heavy_check_mark:                                         | N/A                                                        |
| `changed`                                                  | *string*[]                                                 | :heavy_check_mark:                                         | N/A                                                        |
| `credential`                                               | [models.PayloadCredential](../models/payloadcredential.md) | :heavy_check_mark:                                         | N/A                                                        |
| `removed`                                                  | *string*[]                                                 | :heavy_check_mark:                                         | N/A                                                        |