# ThreeHundredAndThirtyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndThirtyFour } from "@vercel/sdk/models/twohundredandninetyfour.js";

let value: ThreeHundredAndThirtyFour = {
  next: {
    skewProtectionMaxAge: 1045.89,
  },
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload334Next](../models/usereventpayload334next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload334Previous](../models/usereventpayload334previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |