# GetProjectCheckSource3

## Example Usage

```typescript
import { GetProjectCheckSource3 } from "@vercel/sdk/models/getprojectcheckop.js";

let value: GetProjectCheckSource3 = {
  externalCheckName: "<value>",
  kind: "git-provider",
  provider: "bitbucket",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `externalCheckName`                                                                | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `kind`                                                                             | *"git-provider"*                                                                   | :heavy_check_mark:                                                                 | N/A                                                                                |
| `provider`                                                                         | [models.GetProjectCheckSourceProvider](../models/getprojectchecksourceprovider.md) | :heavy_check_mark:                                                                 | N/A                                                                                |