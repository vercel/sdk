# TwoHundredAndEighteen

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndEighteen } from "@vercel/sdk/models/onehundredandninetytwo.js";

let value: TwoHundredAndEighteen = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    skewProtectionMaxAge: 2164.06,
  },
  previous: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload218Next](../models/usereventpayload218next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload218Previous](../models/usereventpayload218previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |