# OneHundredAndThirtyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndThirtyOne } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndThirtyOne = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    skewProtectionBoundaryAt: 6947.17,
  },
  previous: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload131Next](../models/usereventpayload131next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload131Previous](../models/usereventpayload131previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |