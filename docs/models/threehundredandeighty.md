# ThreeHundredAndEighty

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEighty } from "@vercel/sdk/models/threehundredandfiftynine.js";

let value: ThreeHundredAndEighty = {
  next: "block",
  previous: "manual-approval",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload380Next](../models/usereventpayload380next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload380Previous](../models/usereventpayload380previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `teamSlug`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |