# TwoHundredAndEightyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndEightyTwo } from "@vercel/sdk/models/twohundredandeighty.js";

let value: TwoHundredAndEightyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    skewProtectionMaxAge: 6756.02,
  },
  previous: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload282Next](../models/usereventpayload282next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload282Previous](../models/usereventpayload282previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |