# GetProjectCheckSource3

## Example Usage

```typescript
import { GetProjectCheckSource3 } from "@vercel/sdk/models/getprojectcheckop.js";

let value: GetProjectCheckSource3 = {
  kind: "git-provider",
  provider: "github",
  externalCheckName: "<value>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `kind`                                                                             | *"git-provider"*                                                                   | :heavy_check_mark:                                                                 | N/A                                                                                |
| `provider`                                                                         | [models.GetProjectCheckSourceProvider](../models/getprojectchecksourceprovider.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `externalCheckName`                                                                | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |