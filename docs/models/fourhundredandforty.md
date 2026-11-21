# FourHundredAndForty

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndForty } from "@vercel/sdk/models/fourhundredandthirtynine.js";

let value: FourHundredAndForty = {
  next: "manual-approval",
  previous: "auto-approval",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload440Next](../models/usereventpayload440next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload440Previous](../models/usereventpayload440previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `teamSlug`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |