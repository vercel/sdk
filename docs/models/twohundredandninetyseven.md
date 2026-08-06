# TwoHundredAndNinetySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndNinetySeven } from "@vercel/sdk/models/twohundredandforty.js";

let value: TwoHundredAndNinetySeven = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    skewProtectionMaxAge: 3608.49,
  },
  previous: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload297Next](../models/usereventpayload297next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload297Previous](../models/usereventpayload297previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |