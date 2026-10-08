# ThreeHundredAndForty

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndForty } from "@vercel/sdk/models/threehundredandone.js";

let value: ThreeHundredAndForty = {
  next: {
    skewProtectionBoundaryAt: 4639.91,
  },
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload340Next](../models/usereventpayload340next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload340Previous](../models/usereventpayload340previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |