# OneHundredAndNinetyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndNinetyFour } from "@vercel/sdk/models/usereventpayload162deploymenttype.js";

let value: OneHundredAndNinetyFour = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {
    functionDefaultTimeout: 6103,
  },
  next: {
    functionDefaultTimeout: 6819.62,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload194Previous](../models/usereventpayload194previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload194Next](../models/usereventpayload194next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |