# ThreeHundredAndTwentySix

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTwentySix } from "@vercel/sdk/models/ssoprotectiondeploymenttype.js";

let value: ThreeHundredAndTwentySix = {
  next: {
    enabled: true,
    scope: "private",
    includeDrafts: false,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `previous`                                                                     | [models.UserEventPayload326Previous](../models/usereventpayload326previous.md) | :heavy_minus_sign:                                                             | Automatic code review settings                                                 |
| `next`                                                                         | [models.UserEventPayload326Next](../models/usereventpayload326next.md)         | :heavy_check_mark:                                                             | Automatic code review settings                                                 |