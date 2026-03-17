# TwoHundredAndThree

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndThree } from "@vercel/sdk/models/payloadbranchmatcher.js";

let value: TwoHundredAndThree = {
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
| `next`                                                                         | [models.UserEventPayload203Next](../models/usereventpayload203next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload203Previous](../models/usereventpayload203previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |