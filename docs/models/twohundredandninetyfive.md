# TwoHundredAndNinetyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndNinetyFive } from "@vercel/sdk/models/envid2.js";

let value: TwoHundredAndNinetyFive = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    skewProtectionBoundaryAt: 9780.4,
  },
  previous: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload295Next](../models/usereventpayload295next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload295Previous](../models/usereventpayload295previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |