# CreateProjectTrustedOidcProviders

## Example Usage

```typescript
import { CreateProjectTrustedOidcProviders } from "@vercel/sdk/models/createprojectop.js";

let value: CreateProjectTrustedOidcProviders = {
  projects: {
    "key": {
      environments: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
    },
  },
  providers: {},
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `projects`                                                                           | Record<string, [models.CreateProjectProjects](../models/createprojectprojects.md)>   | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `providers`                                                                          | Record<string, [models.CreateProjectProviders](../models/createprojectproviders.md)> | :heavy_check_mark:                                                                   | N/A                                                                                  |