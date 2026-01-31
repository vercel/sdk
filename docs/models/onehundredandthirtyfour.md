# OneHundredAndThirtyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndThirtyFour } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndThirtyFour = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    skewProtectionBoundaryAt: 729.14,
  },
  previous: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload134Next](../models/usereventpayload134next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload134Previous](../models/usereventpayload134previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |