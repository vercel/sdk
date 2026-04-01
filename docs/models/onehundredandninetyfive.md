# OneHundredAndNinetyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndNinetyFive } from "@vercel/sdk/models/usereventpayload160next.js";

let value: OneHundredAndNinetyFive = {
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
| `previous`                                                                     | [models.UserEventPayload195Previous](../models/usereventpayload195previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload195Next](../models/usereventpayload195next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |