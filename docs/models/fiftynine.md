# FiftyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { FiftyNine } from "@vercel/sdk/models/usereventprincipal4type.js";

let value: FiftyNine = {
  action: "removed",
  alias: "<value>",
  projectName: "<value>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `action`                                                                 | [models.UserEventPayload59Action](../models/usereventpayload59action.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `alias`                                                                  | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `projectId`                                                              | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `projectName`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |