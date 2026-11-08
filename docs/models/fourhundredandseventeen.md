# FourHundredAndSeventeen

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSeventeen } from "@vercel/sdk/models/usereventpayload404type.js";

let value: FourHundredAndSeventeen = {
  next: "manual-approval",
  previous: "block",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload417Next](../models/usereventpayload417next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload417Previous](../models/usereventpayload417previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `teamSlug`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |