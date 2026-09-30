# ThreeHundredAndSeventySix

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSeventySix } from "@vercel/sdk/models/threehundredandfiftynine.js";

let value: ThreeHundredAndSeventySix = {
  next: {
    enabled: true,
    includeDrafts: false,
    scope: "private",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload376Next](../models/usereventpayload376next.md)         | :heavy_check_mark:                                                             | Automatic code review settings                                                 |
| `previous`                                                                     | [models.UserEventPayload376Previous](../models/usereventpayload376previous.md) | :heavy_minus_sign:                                                             | Automatic code review settings                                                 |