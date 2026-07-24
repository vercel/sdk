# TwoHundredAndEightySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndEightySeven } from "@vercel/sdk/models/twohundredandeightyfour.js";

let value: TwoHundredAndEightySeven = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    skewProtectionAllowedDomains: [],
  },
  previous: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload287Next](../models/usereventpayload287next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload287Previous](../models/usereventpayload287previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |