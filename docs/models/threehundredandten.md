# ThreeHundredAndTen

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTen } from "@vercel/sdk/models/twohundredandseventyone.js";

let value: ThreeHundredAndTen = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    project: {
      staticIps: {
        enabled: true,
      },
    },
  },
  previous: {
    project: {
      staticIps: {
        enabled: true,
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
| `next`                                                                         | [models.UserEventPayload310Next](../models/usereventpayload310next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload310Previous](../models/usereventpayload310previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |