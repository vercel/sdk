# TwoHundredAndEightyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndEightyThree } from "@vercel/sdk/models/twohundredandeighty.js";

let value: TwoHundredAndEightyThree = {
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
| `next`                                                                         | [models.UserEventPayload283Next](../models/usereventpayload283next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload283Previous](../models/usereventpayload283previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |