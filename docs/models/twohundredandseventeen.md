# TwoHundredAndSeventeen

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeventeen } from "@vercel/sdk/models/onehundredandninetytwo.js";

let value: TwoHundredAndSeventeen = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    skewProtectionBoundaryAt: 118.53,
  },
  previous: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload217Next](../models/usereventpayload217next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload217Previous](../models/usereventpayload217previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |