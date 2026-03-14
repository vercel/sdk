# TwoHundredAndTwentyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwentyEight } from "@vercel/sdk/models/usereventfactors1.js";

let value: TwoHundredAndTwentyEight = {
  next: {
    enabled: false,
    scope: "all",
    includeDrafts: false,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `previous`                                                                     | [models.UserEventPayload228Previous](../models/usereventpayload228previous.md) | :heavy_minus_sign:                                                             | Automatic code review settings                                                 |
| `next`                                                                         | [models.UserEventPayload228Next](../models/usereventpayload228next.md)         | :heavy_check_mark:                                                             | Automatic code review settings                                                 |