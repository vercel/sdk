# ThreeHundredAndNinetyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndNinetyTwo } from "@vercel/sdk/models/usereventpayload373previous.js";

let value: ThreeHundredAndNinetyTwo = {
  next: "block",
  previous: "manual-approval",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload392Next](../models/usereventpayload392next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload392Previous](../models/usereventpayload392previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `teamSlug`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |