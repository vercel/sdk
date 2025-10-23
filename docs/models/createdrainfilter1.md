# CreateDrainFilter1

## Example Usage

```typescript
import { CreateDrainFilter1 } from "@vercel/sdk/models/createdrainop.js";

let value: CreateDrainFilter1 = {
  type: "basic",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `type`                                                                                     | [models.FilterType](../models/filtertype.md)                                               | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `project`                                                                                  | [models.CreateDrainFilterDrainsProject](../models/createdrainfilterdrainsproject.md)       | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `log`                                                                                      | [models.CreateDrainFilterDrainsLog](../models/createdrainfilterdrainslog.md)               | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `deployment`                                                                               | [models.CreateDrainFilterDrainsDeployment](../models/createdrainfilterdrainsdeployment.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |