# OneHundredAndNinetyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndNinetyThree } from "@vercel/sdk/models/payloadbranchmatcher.js";

let value: OneHundredAndNinetyThree = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {},
  next: {
    issuerMode: "team",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload193Previous](../models/usereventpayload193previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload193Next](../models/usereventpayload193next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |