# Eighteen

The payload of the event, if requested.

## Example Usage

```typescript
import { Eighteen } from "@vercel/sdk/models/userevent.js";

let value: Eighteen = {
  change: "update",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `change`                                           | [models.PayloadChange](../models/payloadchange.md) | :heavy_check_mark:                                 | N/A                                                |
| `commitment`                                       | [models.Commitment](../models/commitment.md)       | :heavy_minus_sign:                                 | N/A                                                |
| `previous`                                         | [models.Previous](../models/previous.md)           | :heavy_minus_sign:                                 | N/A                                                |
| `settings`                                         | [models.Settings](../models/settings.md)           | :heavy_minus_sign:                                 | N/A                                                |