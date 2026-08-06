# TwoHundredAndNinetyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndNinetyEight } from "@vercel/sdk/models/twohundredandforty.js";

let value: TwoHundredAndNinetyEight = {
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
| `next`                                                                         | [models.UserEventPayload298Next](../models/usereventpayload298next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload298Previous](../models/usereventpayload298previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |