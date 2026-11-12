# ThreeHundredAndSixtySix

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSixtySix } from "@vercel/sdk/models/usereventprincipal4.js";

let value: ThreeHundredAndSixtySix = {
  next: {
    skewProtectionBoundaryAt: 2185.81,
  },
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload366Next](../models/usereventpayload366next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload366Previous](../models/usereventpayload366previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |