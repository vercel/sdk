# ListProjectChecksSource3

## Example Usage

```typescript
import { ListProjectChecksSource3 } from "@vercel/sdk/models/listprojectchecksop.js";

let value: ListProjectChecksSource3 = {
  kind: "git-provider",
  provider: "bitbucket",
  externalCheckName: "<value>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `kind`                                                                                 | *"git-provider"*                                                                       | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `provider`                                                                             | [models.ListProjectChecksSourceProvider](../models/listprojectcheckssourceprovider.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `externalCheckName`                                                                    | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |