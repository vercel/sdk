# ThreeHundredAndFortyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFortyTwo } from "@vercel/sdk/models/addedprojects.js";

let value: ThreeHundredAndFortyTwo = {
  previous: "manual-approval",
  next: "block",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `previous`                                                                     | [models.UserEventPayload342Previous](../models/usereventpayload342previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload342Next](../models/usereventpayload342next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `teamSlug`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |