# OneHundredAndTwelve

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTwelve } from "@vercel/sdk/models/usereventjobaction.js";

let value: OneHundredAndTwelve = {
  deployment: {
    id: "<id>",
    meta: {},
    name: "<value>",
    url: "https://next-airbus.name/",
  },
  deploymentId: "<id>",
  url: "https://beneficial-runway.com",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `deployment`                                                                       | [models.UserEventPayload112Deployment](../models/usereventpayload112deployment.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `deploymentId`                                                                     | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `url`                                                                              | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |