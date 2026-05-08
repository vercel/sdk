# OneHundredAndFortyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFortyEight } from "@vercel/sdk/models/fluidduration.js";

let value: OneHundredAndFortyEight = {
  projectId: "<id>",
  type: "header",
  headerName: "<value>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `projectId`                                                            | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `type`                                                                 | [models.UserEventPayload148Type](../models/usereventpayload148type.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `headerName`                                                           | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |