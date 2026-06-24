# TwoHundredAndFiftyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFiftyNine } from "@vercel/sdk/models/consent.js";

let value: TwoHundredAndFiftyNine = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    skewProtectionMaxAge: 5966.87,
  },
  previous: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload259Next](../models/usereventpayload259next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload259Previous](../models/usereventpayload259previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |