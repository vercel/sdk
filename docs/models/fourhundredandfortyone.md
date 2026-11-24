# FourHundredAndFortyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFortyOne } from "@vercel/sdk/models/fourhundredandforty.js";

let value: FourHundredAndFortyOne = {
  next: "manual-approval",
  previous: "block",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload441Next](../models/usereventpayload441next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload441Previous](../models/usereventpayload441previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `teamSlug`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |