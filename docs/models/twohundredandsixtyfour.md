# TwoHundredAndSixtyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSixtyFour } from "@vercel/sdk/models/rollbackdescription.js";

let value: TwoHundredAndSixtyFour = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    skewProtectionMaxAge: 4710.98,
  },
  previous: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload264Next](../models/usereventpayload264next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload264Previous](../models/usereventpayload264previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |