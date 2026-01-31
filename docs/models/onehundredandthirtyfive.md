# OneHundredAndThirtyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndThirtyFive } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndThirtyFive = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    skewProtectionMaxAge: 6237.08,
  },
  previous: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload135Next](../models/usereventpayload135next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload135Previous](../models/usereventpayload135previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |