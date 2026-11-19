# OneHundredAndFiftySix

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFiftySix } from "@vercel/sdk/models/job4.js";

let value: OneHundredAndFiftySix = {
  domain: "sour-knuckle.name",
  echMode: "disabled",
  previousEchMode: "enabled",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `domain`                                               | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `echMode`                                              | [models.EchMode](../models/echmode.md)                 | :heavy_check_mark:                                     | N/A                                                    |
| `previousEchMode`                                      | [models.PreviousEchMode](../models/previousechmode.md) | :heavy_check_mark:                                     | N/A                                                    |