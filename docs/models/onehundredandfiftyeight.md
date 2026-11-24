# OneHundredAndFiftyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFiftyEight } from "@vercel/sdk/models/usereventjobpayload137gitcomments.js";

let value: OneHundredAndFiftyEight = {
  domain: "bulky-kielbasa.info",
  echMode: "enabled",
  previousEchMode: "disabled",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `domain`                                               | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `echMode`                                              | [models.EchMode](../models/echmode.md)                 | :heavy_check_mark:                                     | N/A                                                    |
| `previousEchMode`                                      | [models.PreviousEchMode](../models/previousechmode.md) | :heavy_check_mark:                                     | N/A                                                    |