# ThreeHundredAndTwentySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTwentySeven } from "@vercel/sdk/models/ssoprotection2.js";

let value: ThreeHundredAndTwentySeven = {
  next: {
    enabled: true,
    scope: "all",
    includeDrafts: false,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `previous`                                                                     | [models.UserEventPayload327Previous](../models/usereventpayload327previous.md) | :heavy_minus_sign:                                                             | Automatic code review settings                                                 |
| `next`                                                                         | [models.UserEventPayload327Next](../models/usereventpayload327next.md)         | :heavy_check_mark:                                                             | Automatic code review settings                                                 |