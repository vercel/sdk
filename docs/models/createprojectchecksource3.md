# CreateProjectCheckSource3

## Example Usage

```typescript
import { CreateProjectCheckSource3 } from "@vercel/sdk/models/createprojectcheckop.js";

let value: CreateProjectCheckSource3 = {
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
| `provider`                                                                               | [models.CreateProjectCheckSourceProvider](../models/createprojectchecksourceprovider.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |