# ThreeHundredAndEightyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEightyThree } from "@vercel/sdk/models/threehundredandsixtysix.js";

let value: ThreeHundredAndEightyThree = {
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
| `next`                                                                         | [models.UserEventPayload383Next](../models/usereventpayload383next.md)         | :heavy_check_mark:                                                             | Automatic code review settings                                                 |
| `previous`                                                                     | [models.UserEventPayload383Previous](../models/usereventpayload383previous.md) | :heavy_minus_sign:                                                             | Automatic code review settings                                                 |