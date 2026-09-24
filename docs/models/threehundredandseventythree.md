# ThreeHundredAndSeventyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSeventyThree } from "@vercel/sdk/models/payloadcity.js";

let value: ThreeHundredAndSeventyThree = {
  next: "manual-approval",
  previous: "auto-approval",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload373Next](../models/usereventpayload373next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload373Previous](../models/usereventpayload373previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `teamSlug`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |