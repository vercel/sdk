# TwoHundredAndSixtyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSixtyOne } from "@vercel/sdk/models/rollbackdescription.js";

let value: TwoHundredAndSixtyOne = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    skewProtectionAllowedDomains: [
      "<value 1>",
    ],
  },
  previous: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload261Next](../models/usereventpayload261next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload261Previous](../models/usereventpayload261previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |