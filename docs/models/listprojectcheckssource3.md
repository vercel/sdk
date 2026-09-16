# ListProjectChecksSource3

## Example Usage

```typescript
import { ListProjectChecksSource3 } from "@vercel/sdk/models/listprojectchecksop.js";

let value: ListProjectChecksSource3 = {
  externalCheckName: "<value>",
  kind: "git-provider",
  provider: "gitlab",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `externalCheckName`                                                                    | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `kind`                                                                                 | *"git-provider"*                                                                       | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `provider`                                                                             | [models.ListProjectChecksSourceProvider](../models/listprojectcheckssourceprovider.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |