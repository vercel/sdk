# NinetyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetyTwo } from "@vercel/sdk/models/usereventpayload70project.js";

let value: NinetyTwo = {
  deployment: {
    id: "<id>",
    name: "<value>",
    meta: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    url: "https://scaly-venom.name",
  },
  deploymentId: "<id>",
  url: "https://illustrious-schnitzel.info/",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `deployment`                                                                     | [models.UserEventPayload92Deployment](../models/usereventpayload92deployment.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `deploymentId`                                                                   | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `url`                                                                            | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |