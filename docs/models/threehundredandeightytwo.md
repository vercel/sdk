# ThreeHundredAndEightyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEightyTwo } from "@vercel/sdk/models/threehundredandsixtyseven.js";

let value: ThreeHundredAndEightyTwo = {
  previous: {
    enabled: true,
    totpVerified: true,
  },
  next: {
    enabled: true,
    totpVerified: false,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `previous`                                                                     | [models.UserEventPayload382Previous](../models/usereventpayload382previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload382Next](../models/usereventpayload382next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |