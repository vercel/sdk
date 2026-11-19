# ThirtyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { ThirtyFive } from "@vercel/sdk/models/thirteen.js";

let value: ThirtyFive = {
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