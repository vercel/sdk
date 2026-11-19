# Forty

The payload of the event, if requested.

## Example Usage

```typescript
import { Forty } from "@vercel/sdk/models/thirteen.js";

let value: Forty = {
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