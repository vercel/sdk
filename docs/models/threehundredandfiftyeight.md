# ThreeHundredAndFiftyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFiftyEight } from "@vercel/sdk/models/usereventpayload340budget.js";

let value: ThreeHundredAndFiftyEight = {
  previous: "manual-approval",
  next: "manual-approval",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `previous`                                                                     | [models.UserEventPayload358Previous](../models/usereventpayload358previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload358Next](../models/usereventpayload358next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `teamSlug`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |