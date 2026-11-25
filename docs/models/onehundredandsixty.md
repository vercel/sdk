# OneHundredAndSixty

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixty } from "@vercel/sdk/models/jobproject.js";

let value: OneHundredAndSixty = {
  domain: "sticky-antelope.name",
  echMode: "enabled",
  previousEchMode: "enabled",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `domain`                                               | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `echMode`                                              | [models.EchMode](../models/echmode.md)                 | :heavy_check_mark:                                     | N/A                                                    |
| `previousEchMode`                                      | [models.PreviousEchMode](../models/previousechmode.md) | :heavy_check_mark:                                     | N/A                                                    |