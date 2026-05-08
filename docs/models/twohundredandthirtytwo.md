# TwoHundredAndThirtyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndThirtyTwo } from "@vercel/sdk/models/twohundredandtwentythree.js";

let value: TwoHundredAndThirtyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    skewProtectionMaxAge: 8777.49,
  },
  previous: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload232Next](../models/usereventpayload232next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload232Previous](../models/usereventpayload232previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |