# TwoHundredAndOne

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndOne } from "@vercel/sdk/models/onehundredandsixty.js";

let value: TwoHundredAndOne = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    skewProtectionBoundaryAt: 149.76,
  },
  previous: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload201Next](../models/usereventpayload201next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload201Previous](../models/usereventpayload201previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |