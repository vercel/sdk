# OneHundredAndSixtyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixtyNine } from "@vercel/sdk/models/payloadimportflowgitnamespaceid.js";

let value: OneHundredAndSixtyNine = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {
    functionDefaultTimeout: 6062.4,
  },
  next: {
    functionDefaultTimeout: 6707.47,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload169Previous](../models/usereventpayload169previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload169Next](../models/usereventpayload169next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |