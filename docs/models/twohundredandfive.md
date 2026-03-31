# TwoHundredAndFive

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFive } from "@vercel/sdk/models/onehundredandsixty.js";

let value: TwoHundredAndFive = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    project: {
      staticIps: {
        enabled: false,
      },
    },
  },
  previous: {
    project: {
      staticIps: {
        enabled: false,
      },
    },
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload205Next](../models/usereventpayload205next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload205Previous](../models/usereventpayload205previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |