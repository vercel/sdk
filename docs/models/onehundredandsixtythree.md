# OneHundredAndSixtyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixtyThree } from "@vercel/sdk/models/usereventpayload151role.js";

let value: OneHundredAndSixtyThree = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {},
  next: {},
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `projectId`                                            | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `projectName`                                          | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `previous`                                             | [models.PayloadPrevious](../models/payloadprevious.md) | :heavy_check_mark:                                     | N/A                                                    |
| `next`                                                 | [models.PayloadNext](../models/payloadnext.md)         | :heavy_check_mark:                                     | N/A                                                    |