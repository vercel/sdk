# Retention

## Example Usage

```typescript
import { Retention } from "@vercel/sdk/models/twentynine.js";

let value: Retention = {
  ceilingMode: "days",
  defaultMode: "until-requested",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `ceilingDays`                                  | *number*                                       | :heavy_minus_sign:                             | N/A                                            |
| `ceilingMode`                                  | [models.CeilingMode](../models/ceilingmode.md) | :heavy_check_mark:                             | N/A                                            |
| `defaultDays`                                  | *number*                                       | :heavy_minus_sign:                             | N/A                                            |
| `defaultMode`                                  | [models.DefaultMode](../models/defaultmode.md) | :heavy_check_mark:                             | N/A                                            |