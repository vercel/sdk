# ThreeHundredAndThirtyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndThirtyNine } from "@vercel/sdk/models/removedprojects.js";

let value: ThreeHundredAndThirtyNine = {
  previous: "manual-approval",
  next: "block",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `previous`                                                                     | [models.UserEventPayload339Previous](../models/usereventpayload339previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload339Next](../models/usereventpayload339next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `teamSlug`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |