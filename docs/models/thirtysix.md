# ThirtySix

The payload of the event, if requested.

## Example Usage

```typescript
import { ThirtySix } from "@vercel/sdk/models/usereventpayload27provider.js";

let value: ThirtySix = {
  change: "update-commitment",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `change`                                           | [models.PayloadChange](../models/payloadchange.md) | :heavy_check_mark:                                 | N/A                                                |
| `commitment`                                       | [models.Commitment](../models/commitment.md)       | :heavy_minus_sign:                                 | N/A                                                |
| `previous`                                         | *models.UserEventPayloadPrevious*                  | :heavy_minus_sign:                                 | N/A                                                |
| `settings`                                         | [models.Settings](../models/settings.md)           | :heavy_minus_sign:                                 | N/A                                                |