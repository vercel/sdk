# ThreeHundredAndSeventy

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSeventy } from "@vercel/sdk/models/threehundredandsixtysix.js";

let value: ThreeHundredAndSeventy = {
  next: {
    skewProtectionBoundaryAt: 5059.93,
  },
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload370Next](../models/usereventpayload370next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload370Previous](../models/usereventpayload370previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |