# OneHundredAndFiftyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFiftyNine } from "@vercel/sdk/models/payloadviewpreference.js";

let value: OneHundredAndFiftyNine = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {
    functionDefaultTimeout: 4739.55,
  },
  next: {
    functionDefaultTimeout: 2222.38,
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