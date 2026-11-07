# FourHundredAndSixteen

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSixteen } from "@vercel/sdk/models/usereventpayload403type.js";

let value: FourHundredAndSixteen = {
  next: "auto-approval",
  previous: null,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload416Next](../models/usereventpayload416next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload416Previous](../models/usereventpayload416previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `teamSlug`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |