# OneHundredAndTen

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTen } from "@vercel/sdk/models/jobdeployhook.js";

let value: OneHundredAndTen = {
  deployment: {
    id: "<id>",
    meta: {},
    name: "<value>",
    url: "https://wrathful-characterization.net",
  },
  deploymentId: "<id>",
  url: "https://arid-awareness.org/",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `deployment`                                                                       | [models.UserEventPayload110Deployment](../models/usereventpayload110deployment.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `deploymentId`                                                                     | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `url`                                                                              | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |