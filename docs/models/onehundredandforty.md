# OneHundredAndForty

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndForty } from "@vercel/sdk/models/job5.js";

let value: OneHundredAndForty = {
  deployment: {
    id: "<id>",
    meta: {
      "key": "<value>",
      "key1": "<value>",
    },
    name: "<value>",
    url: "https://rotating-rust.com",
  },
  deploymentId: "<id>",
  url: "https://avaricious-remark.name/",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `deployment`                                                                       | [models.UserEventPayload140Deployment](../models/usereventpayload140deployment.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `deploymentId`                                                                     | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `projectId`                                                                        | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `url`                                                                              | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |