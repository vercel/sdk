# OneHundredAndFiftyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFiftyTwo } from "@vercel/sdk/models/payloadscope.js";

let value: OneHundredAndFiftyTwo = {
  domain: "sad-swine.name",
  echMode: "auto",
  previousEchMode: "disabled",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `domain`                                               | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `echMode`                                              | [models.EchMode](../models/echmode.md)                 | :heavy_check_mark:                                     | N/A                                                    |
| `previousEchMode`                                      | [models.PreviousEchMode](../models/previousechmode.md) | :heavy_check_mark:                                     | N/A                                                    |