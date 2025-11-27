# Fourteen

The payload of the event, if requested.

## Example Usage

```typescript
import { Fourteen } from "@vercel/sdk/models/userevent.js";

let value: Fourteen = {
  projectName: "<value>",
  alias: "<value>",
  action: "created",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `projectName`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `alias`                                                                  | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `action`                                                                 | [models.UserEventPayload14Action](../models/usereventpayload14action.md) | :heavy_check_mark:                                                       | N/A                                                                      |