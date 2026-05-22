# TwoHundredAndThirtyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndThirtyFour } from "@vercel/sdk/models/usereventpayload227next.js";

let value: TwoHundredAndThirtyFour = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    skewProtectionBoundaryAt: 4162.89,
  },
  previous: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload234Next](../models/usereventpayload234next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload234Previous](../models/usereventpayload234previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |