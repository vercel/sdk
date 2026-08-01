# TwoHundredAndNinetyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndNinetyTwo } from "@vercel/sdk/models/envid.js";

let value: TwoHundredAndNinetyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    skewProtectionMaxAge: 3709.71,
  },
  previous: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload292Next](../models/usereventpayload292next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload292Previous](../models/usereventpayload292previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |