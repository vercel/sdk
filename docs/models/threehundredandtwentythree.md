# ThreeHundredAndTwentyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTwentyThree } from "@vercel/sdk/models/twohundredandeightyone.js";

let value: ThreeHundredAndTwentyThree = {
  next: {
    skewProtectionBoundaryAt: 3905.94,
  },
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload323Next](../models/usereventpayload323next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload323Previous](../models/usereventpayload323previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |