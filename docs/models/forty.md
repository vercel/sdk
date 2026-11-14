# Forty

The payload of the event, if requested.

## Example Usage

```typescript
import { Forty } from "@vercel/sdk/models/usereventvia4type.js";

let value: Forty = {
  added: [],
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

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `added`                                                                      | *string*[]                                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `changed`                                                                    | *string*[]                                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `credential`                                                                 | [models.UserEventPayloadCredential](../models/usereventpayloadcredential.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `removed`                                                                    | *string*[]                                                                   | :heavy_check_mark:                                                           | N/A                                                                          |