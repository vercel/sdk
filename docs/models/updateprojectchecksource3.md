# UpdateProjectCheckSource3

## Example Usage

```typescript
import { UpdateProjectCheckSource3 } from "@vercel/sdk/models/updateprojectcheckop.js";

let value: UpdateProjectCheckSource3 = {
  externalCheckName: "<value>",
  kind: "git-provider",
  provider: "github",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `externalCheckName`                                                                      | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `kind`                                                                                   | *"git-provider"*                                                                         | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `provider`                                                                               | [models.UpdateProjectCheckSourceProvider](../models/updateprojectchecksourceprovider.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |