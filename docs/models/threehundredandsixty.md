# ThreeHundredAndSixty

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSixty } from "@vercel/sdk/models/payloadmostspecificsubdivision.js";

let value: ThreeHundredAndSixty = {
  next: {
    enabled: false,
    includeDrafts: false,
    scope: "all",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload360Next](../models/usereventpayload360next.md)         | :heavy_check_mark:                                                             | Automatic code review settings                                                 |
| `previous`                                                                     | [models.UserEventPayload360Previous](../models/usereventpayload360previous.md) | :heavy_minus_sign:                                                             | Automatic code review settings                                                 |