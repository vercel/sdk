# OneHundredAndNinetyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndNinetyNine } from "@vercel/sdk/models/usereventpayload163previous.js";

let value: OneHundredAndNinetyNine = {
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
| `previous`                                                                     | [models.UserEventPayload199Previous](../models/usereventpayload199previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload199Next](../models/usereventpayload199next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |