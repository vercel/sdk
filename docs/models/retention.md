# Retention

## Example Usage

```typescript
import { Retention } from "@vercel/sdk/models/userevent.js";

let value: Retention = {
  defaultMode: "days",
  ceilingMode: "until-requested",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `defaultMode`                                  | [models.DefaultMode](../models/defaultmode.md) | :heavy_check_mark:                             | N/A                                            |
| `defaultDays`                                  | *number*                                       | :heavy_minus_sign:                             | N/A                                            |
| `ceilingMode`                                  | [models.CeilingMode](../models/ceilingmode.md) | :heavy_check_mark:                             | N/A                                            |
| `ceilingDays`                                  | *number*                                       | :heavy_minus_sign:                             | N/A                                            |