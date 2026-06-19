# TwoHundredAndFortyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFortyNine } from "@vercel/sdk/models/consent.js";

let value: TwoHundredAndFortyNine = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {},
  next: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload249Previous](../models/usereventpayload249previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload249Next](../models/usereventpayload249next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |