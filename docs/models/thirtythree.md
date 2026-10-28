# ThirtyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { ThirtyThree } from "@vercel/sdk/models/usereventpayload21provider.js";

let value: ThirtyThree = {
  added: [
    "<value 1>",
    "<value 2>",
  ],
  changed: [],
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