# Four

The payload of the event, if requested.

## Example Usage

```typescript
import { Four } from "@vercel/sdk/models/userevent.js";

let value: Four = {
  action: "read",
  environment: [],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `action`                                                             | [models.UserEventPayloadAction](../models/usereventpayloadaction.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `projectName`                                                        | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `projectId`                                                          | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `environment`                                                        | *string*[]                                                           | :heavy_check_mark:                                                   | N/A                                                                  |