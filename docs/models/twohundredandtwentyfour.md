# TwoHundredAndTwentyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwentyFour } from "@vercel/sdk/models/trigger.js";

let value: TwoHundredAndTwentyFour = {
  headerName: "<value>",
  projectId: "<id>",
  type: "header",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `headerName`                                                           | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `projectId`                                                            | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `type`                                                                 | [models.UserEventPayload224Type](../models/usereventpayload224type.md) | :heavy_check_mark:                                                     | N/A                                                                    |