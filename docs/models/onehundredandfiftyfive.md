# OneHundredAndFiftyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFiftyFive } from "@vercel/sdk/models/usereventpayloadallowlistedreadystatereasoninternal.js";

let value: OneHundredAndFiftyFive = {
  domain: "damaged-guard.org",
  echMode: "disabled",
  previousEchMode: "disabled",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `domain`                                               | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `echMode`                                              | [models.EchMode](../models/echmode.md)                 | :heavy_check_mark:                                     | N/A                                                    |
| `previousEchMode`                                      | [models.PreviousEchMode](../models/previousechmode.md) | :heavy_check_mark:                                     | N/A                                                    |