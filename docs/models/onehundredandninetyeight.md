# OneHundredAndNinetyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndNinetyEight } from "@vercel/sdk/models/payloadbranchmatcher.js";

let value: OneHundredAndNinetyEight = {
  previous: {},
  next: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload198Previous](../models/usereventpayload198previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload198Next](../models/usereventpayload198next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |