# FourHundredAndThirtySix

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndThirtySix } from "@vercel/sdk/models/fourhundredandthirtyfive.js";

let value: FourHundredAndThirtySix = {
  next: "manual-approval",
  previous: "manual-approval",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload436Next](../models/usereventpayload436next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload436Previous](../models/usereventpayload436previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `teamSlug`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |