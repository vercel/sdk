# TwoHundredAndEleven

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndEleven } from "@vercel/sdk/models/oneorigin.js";

let value: TwoHundredAndEleven = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {},
  next: {},
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `projectId`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `projectName`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `previous`                                                               | [models.UserEventPayloadPrevious](../models/usereventpayloadprevious.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `next`                                                                   | [models.UserEventPayload211Next](../models/usereventpayload211next.md)   | :heavy_check_mark:                                                       | N/A                                                                      |