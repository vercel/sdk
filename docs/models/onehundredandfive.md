# OneHundredAndFive

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFive } from "@vercel/sdk/models/ninetyseven.js";

let value: OneHundredAndFive = {
  deployment: {
    name: "<value>",
    id: "<id>",
    meta: {},
    url: "https://tricky-jet.org",
  },
  deploymentId: "<id>",
  url: "https://rural-custody.org",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `deployment`                                                                       | [models.UserEventPayload105Deployment](../models/usereventpayload105deployment.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `deploymentId`                                                                     | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `url`                                                                              | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |