# ThreeHundredAndTwentySix

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTwentySix } from "@vercel/sdk/models/twohundredandeightythree.js";

let value: ThreeHundredAndTwentySix = {
  next: {
    skewProtectionBoundaryAt: 1856.3,
  },
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload326Next](../models/usereventpayload326next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload326Previous](../models/usereventpayload326previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |