# ThreeHundredAndFive

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFive } from "@vercel/sdk/models/twohundredandseventy.js";

let value: ThreeHundredAndFive = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    skewProtectionBoundaryAt: 3024.44,
  },
  previous: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload305Next](../models/usereventpayload305next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload305Previous](../models/usereventpayload305previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |