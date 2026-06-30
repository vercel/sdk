# GetProjectTrustedSources

## Example Usage

```typescript
import { GetProjectTrustedSources } from "@vercel/sdk/models/getprojectresponsebody.js";

let value: GetProjectTrustedSources = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `projects`                                                                               | Record<string, [models.GetProjectProjects](../models/getprojectprojects.md)>             | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `oidcProviders`                                                                          | Record<string, [models.GetProjectOidcProviders](../models/getprojectoidcproviders.md)[]> | :heavy_minus_sign:                                                                       | N/A                                                                                      |