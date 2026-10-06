# ThreeHundredAndSeventyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSeventyEight } from "@vercel/sdk/models/threehundredandsixtyone.js";

let value: ThreeHundredAndSeventyEight = {
  next: {
    enabled: false,
    includeDrafts: true,
    scope: "private",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload378Next](../models/usereventpayload378next.md)         | :heavy_check_mark:                                                             | Automatic code review settings                                                 |
| `previous`                                                                     | [models.UserEventPayload378Previous](../models/usereventpayload378previous.md) | :heavy_minus_sign:                                                             | Automatic code review settings                                                 |