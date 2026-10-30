# ThirtyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { ThirtyThree } from "@vercel/sdk/models/usereventpayload26apikey.js";

let value: ThirtyThree = {
  credential: {
    id: "<id>",
    name: "<value>",
    providerSlug: "<value>",
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `changes`                                                  | [models.Changes](../models/changes.md)                     | :heavy_minus_sign:                                         | N/A                                                        |
| `credential`                                               | [models.PayloadCredential](../models/payloadcredential.md) | :heavy_check_mark:                                         | N/A                                                        |