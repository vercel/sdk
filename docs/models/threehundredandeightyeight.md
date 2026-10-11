# ThreeHundredAndEightyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEightyEight } from "@vercel/sdk/models/usereventpayload373previous.js";

let value: ThreeHundredAndEightyEight = {
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
| `next`                                                                         | [models.UserEventPayload388Next](../models/usereventpayload388next.md)         | :heavy_check_mark:                                                             | Automatic code review settings                                                 |
| `previous`                                                                     | [models.UserEventPayload388Previous](../models/usereventpayload388previous.md) | :heavy_minus_sign:                                                             | Automatic code review settings                                                 |