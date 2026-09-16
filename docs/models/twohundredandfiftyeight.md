# TwoHundredAndFiftyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFiftyEight } from "@vercel/sdk/models/payloadnext.js";

let value: TwoHundredAndFiftyEight = {
  customEnvironmentId: "<id>",
  customEnvironmentSlug: "<value>",
  next: {},
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `customEnvironmentId`                                                          | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `customEnvironmentSlug`                                                        | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload258Next](../models/usereventpayload258next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload258Previous](../models/usereventpayload258previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |