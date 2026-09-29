# OneHundredAndEighteen

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEighteen } from "@vercel/sdk/models/usereventjobaction.js";

let value: OneHundredAndEighteen = {
  mode: "none",
  previousMode: "email-domain",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `mode`                                                         | [models.PayloadMode](../models/payloadmode.md)                 | :heavy_check_mark:                                             | N/A                                                            |
| `previousMode`                                                 | [models.PayloadPreviousMode](../models/payloadpreviousmode.md) | :heavy_check_mark:                                             | N/A                                                            |