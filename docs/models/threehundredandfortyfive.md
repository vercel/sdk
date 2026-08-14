# ThreeHundredAndFortyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFortyFive } from "@vercel/sdk/models/usereventfactors1.js";

let value: ThreeHundredAndFortyFive = {
  previous: "manual-approval",
  next: "manual-approval",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `previous`                                                                     | [models.UserEventPayload345Previous](../models/usereventpayload345previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload345Next](../models/usereventpayload345next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `teamSlug`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |