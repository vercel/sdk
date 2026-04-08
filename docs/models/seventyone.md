# SeventyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { SeventyOne } from "@vercel/sdk/models/fortythree.js";

let value: SeventyOne = {
  deployment: {
    id: "<id>",
    name: "<value>",
    meta: {
      "key": "<value>",
      "key1": "<value>",
    },
    url: "https://superior-gripper.biz/",
  },
  deploymentId: "<id>",
  url: "https://substantial-gym.biz",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `deployment`                                                                     | [models.UserEventPayload71Deployment](../models/usereventpayload71deployment.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `deploymentId`                                                                   | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `url`                                                                            | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |