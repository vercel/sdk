# ThreeHundredAndSixty

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSixty } from "@vercel/sdk/models/principalintegration.js";

let value: ThreeHundredAndSixty = {
  next: {
    skewProtectionBoundaryAt: 7472.76,
  },
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload360Next](../models/usereventpayload360next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload360Previous](../models/usereventpayload360previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |