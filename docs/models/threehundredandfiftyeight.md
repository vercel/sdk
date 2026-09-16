# ThreeHundredAndFiftyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFiftyEight } from "@vercel/sdk/models/payloadmostspecificsubdivision.js";

let value: ThreeHundredAndFiftyEight = {
  next: {
    enabled: true,
    includeDrafts: false,
    scope: "public",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload358Next](../models/usereventpayload358next.md)         | :heavy_check_mark:                                                             | Automatic code review settings                                                 |
| `previous`                                                                     | [models.UserEventPayload358Previous](../models/usereventpayload358previous.md) | :heavy_minus_sign:                                                             | Automatic code review settings                                                 |