# OneHundredAndFortyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFortyTwo } from "@vercel/sdk/models/job8.js";

let value: OneHundredAndFortyTwo = {
  domain: "frivolous-dredger.org",
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