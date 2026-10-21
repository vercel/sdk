# OneHundredAndTwentySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTwentySeven } from "@vercel/sdk/models/job8.js";

let value: OneHundredAndTwentySeven = {
  mode: "all",
  previousMode: "none",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `mode`                                                         | [models.PayloadMode](../models/payloadmode.md)                 | :heavy_check_mark:                                             | N/A                                                            |
| `previousMode`                                                 | [models.PayloadPreviousMode](../models/payloadpreviousmode.md) | :heavy_check_mark:                                             | N/A                                                            |