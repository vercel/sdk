# EightyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyNine } from "@vercel/sdk/models/usereventpayload54action.js";

let value: EightyNine = {
  deployment: {
    id: "<id>",
    name: "<value>",
    meta: {
      "key": "<value>",
    },
    url: "https://yellowish-account.net/",
  },
  deploymentId: "<id>",
  url: "https://mixed-repeat.net",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `deployment`                                                                     | [models.UserEventPayload89Deployment](../models/usereventpayload89deployment.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `deploymentId`                                                                   | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `url`                                                                            | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |