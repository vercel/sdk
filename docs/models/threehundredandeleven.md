# ThreeHundredAndEleven

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEleven } from "@vercel/sdk/models/twohundredandseventysix.js";

let value: ThreeHundredAndEleven = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    skewProtectionBoundaryAt: 9238.09,
  },
  previous: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload311Next](../models/usereventpayload311next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload311Previous](../models/usereventpayload311previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |