# OneHundredAndFortySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFortySeven } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndFortySeven = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    skewProtectionBoundaryAt: 9250.55,
  },
  previous: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload147Next](../models/usereventpayload147next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload147Previous](../models/usereventpayload147previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |