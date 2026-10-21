# ThreeHundredAndFortySix

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFortySix } from "@vercel/sdk/models/usereventpayload318project.js";

let value: ThreeHundredAndFortySix = {
  next: {
    skewProtectionBoundaryAt: 7839.68,
  },
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload346Next](../models/usereventpayload346next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload346Previous](../models/usereventpayload346previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |