# OneHundredAndEighteen

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEighteen } from "@vercel/sdk/models/jobnsnbsideeffect.js";

let value: OneHundredAndEighteen = {
  deployment: {
    id: "<id>",
    meta: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    name: "<value>",
    url: "https://french-simple.name",
  },
  deploymentId: "<id>",
  url: "https://austere-smoke.org",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `deployment`                                                                       | [models.UserEventPayload118Deployment](../models/usereventpayload118deployment.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `deploymentId`                                                                     | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `url`                                                                              | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |