# ThreeHundredAndEightyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEightyFive } from "@vercel/sdk/models/threehundredandsixtyeight.js";

let value: ThreeHundredAndEightyFive = {
  next: {
    enabled: false,
    includeDrafts: false,
    scope: "private",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload385Next](../models/usereventpayload385next.md)         | :heavy_check_mark:                                                             | Automatic code review settings                                                 |
| `previous`                                                                     | [models.UserEventPayload385Previous](../models/usereventpayload385previous.md) | :heavy_minus_sign:                                                             | Automatic code review settings                                                 |