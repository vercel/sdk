# ThreeHundredAndFortyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFortyThree } from "@vercel/sdk/models/threehundredandthree.js";

let value: ThreeHundredAndFortyThree = {
  next: {
    skewProtectionMaxAge: 9724.59,
  },
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload343Next](../models/usereventpayload343next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload343Previous](../models/usereventpayload343previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |