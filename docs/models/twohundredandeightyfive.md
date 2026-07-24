# TwoHundredAndEightyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndEightyFive } from "@vercel/sdk/models/twohundredandeightyfour.js";

let value: TwoHundredAndEightyFive = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    skewProtectionBoundaryAt: 5374.02,
  },
  previous: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload285Next](../models/usereventpayload285next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload285Previous](../models/usereventpayload285previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |