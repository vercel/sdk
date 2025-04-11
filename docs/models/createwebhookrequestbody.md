# CreateWebhookRequestBody

## Example Usage

```typescript
import { CreateWebhookRequestBody } from "@vercel/sdk/models/createwebhookop.js";

let value: CreateWebhookRequestBody = {
  url: "https://thin-gazebo.name",
  events: [
    "budget.reached",
  ],
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `url`                                  | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `events`                               | [models.Events](../models/events.md)[] | :heavy_check_mark:                     | N/A                                    |
| `projectIds`                           | *string*[]                             | :heavy_minus_sign:                     | N/A                                    |