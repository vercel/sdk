# ThreeHundredAndEightyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEightyTwo } from "@vercel/sdk/models/usereventpayload328previous.js";

let value: ThreeHundredAndEightyTwo = {
  next: {
    skewProtectionMaxAge: 1264.98,
  },
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload382Next](../models/usereventpayload382next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload382Previous](../models/usereventpayload382previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |