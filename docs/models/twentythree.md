# TwentyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { TwentyThree } from "@vercel/sdk/models/userevent.js";

let value: TwentyThree = {
  change: "enable-commitment",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `change`                                           | [models.PayloadChange](../models/payloadchange.md) | :heavy_check_mark:                                 | N/A                                                |
| `commitment`                                       | [models.Commitment](../models/commitment.md)       | :heavy_minus_sign:                                 | N/A                                                |
| `previous`                                         | [models.Previous](../models/previous.md)           | :heavy_minus_sign:                                 | N/A                                                |
| `settings`                                         | [models.Settings](../models/settings.md)           | :heavy_minus_sign:                                 | N/A                                                |