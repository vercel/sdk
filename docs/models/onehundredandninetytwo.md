# OneHundredAndNinetyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndNinetyTwo } from "@vercel/sdk/models/onehundredandfiftythree.js";

let value: OneHundredAndNinetyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {},
  next: {
    issuerMode: "global",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload192Previous](../models/usereventpayload192previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload192Next](../models/usereventpayload192next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |