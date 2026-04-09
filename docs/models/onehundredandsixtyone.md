# OneHundredAndSixtyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixtyOne } from "@vercel/sdk/models/payloadresourceconfig.js";

let value: OneHundredAndSixtyOne = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {
    functionDefaultTimeout: 3352.56,
  },
  next: {
    functionDefaultTimeout: 6329.41,
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `projectId`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `projectName`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `previous`                                                               | [models.UserEventPayloadPrevious](../models/usereventpayloadprevious.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `next`                                                                   | [models.UserEventPayloadNext](../models/usereventpayloadnext.md)         | :heavy_check_mark:                                                       | N/A                                                                      |