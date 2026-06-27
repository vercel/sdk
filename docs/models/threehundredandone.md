# ThreeHundredAndOne

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndOne } from "@vercel/sdk/models/twohundredandfiftysix.js";

let value: ThreeHundredAndOne = {
  next: {
    enabled: false,
    scope: "public",
    includeDrafts: false,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `previous`                                                                     | [models.UserEventPayload301Previous](../models/usereventpayload301previous.md) | :heavy_minus_sign:                                                             | Automatic code review settings                                                 |
| `next`                                                                         | [models.UserEventPayload301Next](../models/usereventpayload301next.md)         | :heavy_check_mark:                                                             | Automatic code review settings                                                 |