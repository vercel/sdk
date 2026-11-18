# ThreeHundredAndSeventyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSeventyFive } from "@vercel/sdk/models/threehundredandseventyfive.js";

let value: ThreeHundredAndSeventyFive = {
  next: {
    skewProtectionBoundaryAt: 5899.86,
  },
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload375Next](../models/usereventpayload375next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload375Previous](../models/usereventpayload375previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |