# OneHundredAndSixtyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixtyThree } from "@vercel/sdk/models/two1.js";

let value: OneHundredAndSixtyThree = {
  next: {
    clientId: "<id>",
    deploymentType: "<value>",
    issuer: "diners_club",
  },
  previous: {
    clientId: "<id>",
    deploymentType: "<value>",
    issuer: "discover",
  },
  projectId: "<id>",
  projectName: "<value>",
  updates: [],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `next`                                                                   | [models.UserEventPayloadNext](../models/usereventpayloadnext.md)         | :heavy_check_mark:                                                       | N/A                                                                      |
| `previous`                                                               | [models.UserEventPayloadPrevious](../models/usereventpayloadprevious.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `projectId`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `projectName`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `updates`                                                                | [models.Updates](../models/updates.md)[]                                 | :heavy_check_mark:                                                       | N/A                                                                      |