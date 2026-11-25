# ThreeHundredAndEightyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEightyOne } from "@vercel/sdk/models/usereventpayload328previous.js";

let value: ThreeHundredAndEightyOne = {
  next: {
    skewProtectionBoundaryAt: 8905.55,
  },
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload381Next](../models/usereventpayload381next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload381Previous](../models/usereventpayload381previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |