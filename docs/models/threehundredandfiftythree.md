# ThreeHundredAndFiftyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFiftyThree } from "@vercel/sdk/models/usereventpayload335budget.js";

let value: ThreeHundredAndFiftyThree = {
  previous: "manual-approval",
  next: "block",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `previous`                                                                     | [models.UserEventPayload353Previous](../models/usereventpayload353previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload353Next](../models/usereventpayload353next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `teamSlug`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |