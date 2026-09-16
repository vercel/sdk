# Four

The payload of the event, if requested.

## Example Usage

```typescript
import { Four } from "@vercel/sdk/models/userevent.js";

let value: Four = {
  action: "added",
  environment: "<value>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `action`                                                               | [models.UserEventPayload4Action](../models/usereventpayload4action.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `environment`                                                          | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `label`                                                                | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `projectId`                                                            | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `projectName`                                                          | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |