# TwoHundredAndNinetyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndNinetyTwo } from "@vercel/sdk/models/twohundredandfortyseven.js";

let value: TwoHundredAndNinetyTwo = {
  previous: {
    enabled: true,
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
| `previous`                                                                     | [models.UserEventPayload292Previous](../models/usereventpayload292previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload292Next](../models/usereventpayload292next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |