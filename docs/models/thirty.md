# Thirty

The payload of the event, if requested.

## Example Usage

```typescript
import { Thirty } from "@vercel/sdk/models/userevent.js";

let value: Thirty = {
  projectName: "<value>",
  alias: "<value>",
  action: "removed",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `projectId`                                                              | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `projectName`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `alias`                                                                  | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `action`                                                                 | [models.UserEventPayload30Action](../models/usereventpayload30action.md) | :heavy_check_mark:                                                       | N/A                                                                      |