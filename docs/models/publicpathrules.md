# PublicPathRules

## Example Usage

```typescript
import { PublicPathRules } from "@vercel/sdk/models/updateprojectbranchmatcher.js";

let value: PublicPathRules = {
  type: "startsWith",
  value: "<value>",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `type`                                                     | [models.UpdateProjectType](../models/updateprojecttype.md) | :heavy_check_mark:                                         | N/A                                                        |
| `value`                                                    | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |