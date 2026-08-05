# TwoHundredAndTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwo } from "@vercel/sdk/models/onehundredandseventyone.js";

let value: TwoHundredAndTwo = {
  projectId: "<id>",
  type: "header",
  headerName: "<value>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `projectId`                                                            | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `type`                                                                 | [models.UserEventPayload202Type](../models/usereventpayload202type.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `headerName`                                                           | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |