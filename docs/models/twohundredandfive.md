# TwoHundredAndFive

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFive } from "@vercel/sdk/models/oneorigin.js";

let value: TwoHundredAndFive = {
  projectId: "<id>",
  type: "header",
  headerName: "<value>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `projectId`                                                            | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `type`                                                                 | [models.UserEventPayload205Type](../models/usereventpayload205type.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `headerName`                                                           | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |