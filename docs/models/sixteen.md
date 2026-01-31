# Sixteen

The payload of the event, if requested.

## Example Usage

```typescript
import { Sixteen } from "@vercel/sdk/models/userevent.js";

let value: Sixteen = {
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
| `action`                                                                 | [models.UserEventPayload16Action](../models/usereventpayload16action.md) | :heavy_check_mark:                                                       | N/A                                                                      |