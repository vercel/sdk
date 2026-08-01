# ThreeHundredAndThirtyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndThirtyOne } from "@vercel/sdk/models/ssoprotection2.js";

let value: ThreeHundredAndThirtyOne = {
  previous: "auto-approval",
  next: "block",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `previous`                                                                     | [models.UserEventPayload331Previous](../models/usereventpayload331previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload331Next](../models/usereventpayload331next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `teamSlug`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |