# TwoHundredAndTwentySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwentySeven } from "@vercel/sdk/models/twohundredandfourteen.js";

let value: TwoHundredAndTwentySeven = {
  next: {
    enabled: true,
    scope: "private",
    includeDrafts: true,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `previous`                                                                     | [models.UserEventPayload227Previous](../models/usereventpayload227previous.md) | :heavy_minus_sign:                                                             | Automatic code review settings                                                 |
| `next`                                                                         | [models.UserEventPayload227Next](../models/usereventpayload227next.md)         | :heavy_check_mark:                                                             | Automatic code review settings                                                 |