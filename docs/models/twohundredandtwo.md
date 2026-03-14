# TwoHundredAndTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwo } from "@vercel/sdk/models/onehundredandfiftythree.js";

let value: TwoHundredAndTwo = {
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
| `next`                                                                         | [models.UserEventPayload202Next](../models/usereventpayload202next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload202Previous](../models/usereventpayload202previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |