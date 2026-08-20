# ThreeHundredAndFour

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFour } from "@vercel/sdk/models/twohundredandsixty.js";

let value: ThreeHundredAndFour = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    skewProtectionBoundaryAt: 6362.94,
  },
  previous: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload304Next](../models/usereventpayload304next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload304Previous](../models/usereventpayload304previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |