# CreateProjectSources2

## Example Usage

```typescript
import { CreateProjectSources2 } from "@vercel/sdk/models/createprojectresponsebody.js";

let value: CreateProjectSources2 = {
  provider: "bitbucket",
  org: "<value>",
  repo: "<value>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `provider`                                                                       | [models.CreateProjectSourcesProvider](../models/createprojectsourcesprovider.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `org`                                                                            | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `repo`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |