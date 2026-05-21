# Eighty

The payload of the event, if requested.

## Example Usage

```typescript
import { Eighty } from "@vercel/sdk/models/thirtyfive.js";

let value: Eighty = {
  deployment: {
    id: "<id>",
    name: "<value>",
    meta: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    url: "https://equatorial-finer.org",
  },
  deploymentId: "<id>",
  url: "https://hungry-gown.com/",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `deployment`                                                                     | [models.UserEventPayload80Deployment](../models/usereventpayload80deployment.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `deploymentId`                                                                   | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `url`                                                                            | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |