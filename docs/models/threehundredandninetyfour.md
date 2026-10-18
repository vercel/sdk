# ThreeHundredAndNinetyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndNinetyFour } from "@vercel/sdk/models/usereventpayload380type.js";

let value: ThreeHundredAndNinetyFour = {
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
| `next`                                                                         | [models.UserEventPayload394Next](../models/usereventpayload394next.md)         | :heavy_check_mark:                                                             | Automatic code review settings                                                 |
| `previous`                                                                     | [models.UserEventPayload394Previous](../models/usereventpayload394previous.md) | :heavy_minus_sign:                                                             | Automatic code review settings                                                 |