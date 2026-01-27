# OneHundredAndNineteen

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndNineteen } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndNineteen = {
  projectId: "<id>",
  projectName: "<value>",
  customEnvironmentId: "<id>",
  customEnvironmentSlug: "<value>",
  previous: {},
  next: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `customEnvironmentId`                                                          | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `customEnvironmentSlug`                                                        | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload119Previous](../models/usereventpayload119previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload119Next](../models/usereventpayload119next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |