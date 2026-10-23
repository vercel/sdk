# ThreeHundredAndFiftyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFiftyOne } from "@vercel/sdk/models/threehundredandtwentythree.js";

let value: ThreeHundredAndFiftyOne = {
  next: {
    skewProtectionMaxAge: 3379.77,
  },
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload351Next](../models/usereventpayload351next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload351Previous](../models/usereventpayload351previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |