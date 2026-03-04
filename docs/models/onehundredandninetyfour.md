# OneHundredAndNinetyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndNinetyFour } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndNinetyFour = {
  previous: {},
  next: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload194Previous](../models/usereventpayload194previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload194Next](../models/usereventpayload194next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |