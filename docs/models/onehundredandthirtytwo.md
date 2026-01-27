# OneHundredAndThirtyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndThirtyTwo } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndThirtyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    skewProtectionMaxAge: 1421.78,
  },
  previous: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload132Next](../models/usereventpayload132next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload132Previous](../models/usereventpayload132previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |