# TwoHundredAndTwentyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwentyNine } from "@vercel/sdk/models/payloadmostspecificsubdivision.js";

let value: TwoHundredAndTwentyNine = {
  next: {
    enabled: false,
    scope: "all",
    includeDrafts: true,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `previous`                                                                     | [models.UserEventPayload229Previous](../models/usereventpayload229previous.md) | :heavy_minus_sign:                                                             | Automatic code review settings                                                 |
| `next`                                                                         | [models.UserEventPayload229Next](../models/usereventpayload229next.md)         | :heavy_check_mark:                                                             | Automatic code review settings                                                 |