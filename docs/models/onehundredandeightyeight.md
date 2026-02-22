# OneHundredAndEightyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEightyEight } from "@vercel/sdk/models/onehundredandsixtyfour.js";

let value: OneHundredAndEightyEight = {
  previous: {
    enabled: false,
    totpVerified: false,
  },
  next: {
    enabled: false,
    totpVerified: true,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `previous`                                                                     | [models.UserEventPayload188Previous](../models/usereventpayload188previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload188Next](../models/usereventpayload188next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |