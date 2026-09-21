# OneHundredAndThirteen

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndThirteen } from "@vercel/sdk/models/jobaction.js";

let value: OneHundredAndThirteen = {
  mode: "all",
  previousMode: "email-domain",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `mode`                                                         | [models.PayloadMode](../models/payloadmode.md)                 | :heavy_check_mark:                                             | N/A                                                            |
| `previousMode`                                                 | [models.PayloadPreviousMode](../models/payloadpreviousmode.md) | :heavy_check_mark:                                             | N/A                                                            |