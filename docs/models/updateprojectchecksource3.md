# UpdateProjectCheckSource3

## Example Usage

```typescript
import { UpdateProjectCheckSource3 } from "@vercel/sdk/models/updateprojectcheckop.js";

let value: UpdateProjectCheckSource3 = {
  kind: "git-provider",
  provider: "gitlab",
  externalCheckName: "<value>",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `kind`                                                                                   | *"git-provider"*                                                                         | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `provider`                                                                               | [models.UpdateProjectCheckSourceProvider](../models/updateprojectchecksourceprovider.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `externalCheckName`                                                                      | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |