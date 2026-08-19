# Sixteen

The payload of the event, if requested.

## Example Usage

```typescript
import { Sixteen } from "@vercel/sdk/models/userevent.js";

let value: Sixteen = {
  change: "enable",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `change`                                           | [models.PayloadChange](../models/payloadchange.md) | :heavy_check_mark:                                 | N/A                                                |
| `settings`                                         | [models.Settings](../models/settings.md)           | :heavy_minus_sign:                                 | N/A                                                |
| `previous`                                         | [models.Previous](../models/previous.md)           | :heavy_minus_sign:                                 | N/A                                                |
| `commitment`                                       | [models.Commitment](../models/commitment.md)       | :heavy_minus_sign:                                 | N/A                                                |