# SeventyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { SeventyThree } from "@vercel/sdk/models/twenty.js";

let value: SeventyThree = {
  action: "removed",
  alias: "<value>",
  projectName: "<value>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `action`                                                                 | [models.UserEventPayload73Action](../models/usereventpayload73action.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `alias`                                                                  | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `projectId`                                                              | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `projectName`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |