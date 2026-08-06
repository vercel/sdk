# TwoHundredAndNinetySix

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndNinetySix } from "@vercel/sdk/models/twohundredandforty.js";

let value: TwoHundredAndNinetySix = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    skewProtectionBoundaryAt: 4682.37,
  },
  previous: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload296Next](../models/usereventpayload296next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload296Previous](../models/usereventpayload296previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |