# TwoHundredAndFortyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFortyFive } from "@vercel/sdk/models/twohundredandthirtyone.js";

let value: TwoHundredAndFortyFive = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    skewProtectionBoundaryAt: 7779.39,
  },
  previous: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload245Next](../models/usereventpayload245next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload245Previous](../models/usereventpayload245previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |