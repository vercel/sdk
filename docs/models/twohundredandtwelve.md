# TwoHundredAndTwelve

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwelve } from "@vercel/sdk/models/siftroute.js";

let value: TwoHundredAndTwelve = {
  projectId: "<id>",
  type: "header",
  headerName: "<value>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `projectId`                                                            | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `type`                                                                 | [models.UserEventPayload212Type](../models/usereventpayload212type.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `headerName`                                                           | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |