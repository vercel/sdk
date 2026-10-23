# TwentyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { TwentyEight } from "@vercel/sdk/models/twenty.js";

let value: TwentyEight = {
  change: "update",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `change`                                                                 | [models.PayloadChange](../models/payloadchange.md)                       | :heavy_check_mark:                                                       | N/A                                                                      |
| `commitment`                                                             | [models.Commitment](../models/commitment.md)                             | :heavy_minus_sign:                                                       | N/A                                                                      |
| `previous`                                                               | [models.UserEventPayloadPrevious](../models/usereventpayloadprevious.md) | :heavy_minus_sign:                                                       | N/A                                                                      |
| `settings`                                                               | [models.Settings](../models/settings.md)                                 | :heavy_minus_sign:                                                       | N/A                                                                      |