# OneHundredAndOne

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndOne } from "@vercel/sdk/models/usereventjobpayload9810headinfo.js";

let value: OneHundredAndOne = {
  deployment: {
    id: "<id>",
    name: "<value>",
    meta: {
      "key": "<value>",
    },
    url: "https://insidious-deer.info",
  },
  deploymentId: "<id>",
  url: "https://talkative-roadway.info/",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `deployment`                                                                       | [models.UserEventPayload101Deployment](../models/usereventpayload101deployment.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `deploymentId`                                                                     | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `url`                                                                              | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |