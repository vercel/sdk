# GitSources1

## Example Usage

```typescript
import { GitSources1 } from "@vercel/sdk/models/updateprojectprojectsresponsebuildmachineselection.js";

let value: GitSources1 = {
  enabled: false,
  sources: [
    {
      provider: "gitlab",
      org: "<value>",
    },
  ],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `enabled`                                                    | *boolean*                                                    | :heavy_check_mark:                                           | N/A                                                          |
| `sources`                                                    | [models.GitSourcesSources](../models/gitsourcessources.md)[] | :heavy_check_mark:                                           | N/A                                                          |