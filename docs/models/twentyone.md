# TwentyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { TwentyOne } from "@vercel/sdk/models/payload1.js";

let value: TwentyOne = {
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
| `action`                                                                 | [models.UserEventPayload21Action](../models/usereventpayload21action.md) | :heavy_check_mark:                                                       | N/A                                                                      |