# OneHundredAndThirtySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndThirtySeven } from "@vercel/sdk/models/payloadscope.js";

let value: OneHundredAndThirtySeven = {
  mode: "all",
  previousMode: "all",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `mode`                                                         | [models.PayloadMode](../models/payloadmode.md)                 | :heavy_check_mark:                                             | N/A                                                            |
| `previousMode`                                                 | [models.PayloadPreviousMode](../models/payloadpreviousmode.md) | :heavy_check_mark:                                             | N/A                                                            |