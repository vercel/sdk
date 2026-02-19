# CreateProjectCheckSource3

## Example Usage

```typescript
import { CreateProjectCheckSource3 } from "@vercel/sdk/models/createprojectcheckop.js";

let value: CreateProjectCheckSource3 = {
  kind: "git-provider",
  provider: "gitlab",
  externalCheckName: "<value>",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `kind`                                                                                   | *"git-provider"*                                                                         | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `provider`                                                                               | [models.CreateProjectCheckSourceProvider](../models/createprojectchecksourceprovider.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `externalCheckName`                                                                      | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |