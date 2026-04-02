# Nineteen

The payload of the event, if requested.

## Example Usage

```typescript
import { Nineteen } from "@vercel/sdk/models/userevent.js";

let value: Nineteen = {
  projectName: "<value>",
  alias: "<value>",
  action: "removed",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `projectName`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `alias`                                                                  | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `action`                                                                 | [models.UserEventPayload19Action](../models/usereventpayload19action.md) | :heavy_check_mark:                                                       | N/A                                                                      |