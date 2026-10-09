# ThreeHundredAndFortyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFortyTwo } from "@vercel/sdk/models/threehundredandthree.js";

let value: ThreeHundredAndFortyTwo = {
  next: {
    skewProtectionBoundaryAt: 7613.46,
  },
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload342Next](../models/usereventpayload342next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload342Previous](../models/usereventpayload342previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |