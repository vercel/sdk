# HeadByTeamSlugByProjectSlugByRepositoryNameManifestsByReferenceRequest

## Example Usage

```typescript
import { HeadByTeamSlugByProjectSlugByRepositoryNameManifestsByReferenceRequest } from "@vercel/sdk/models/headbyteamslugbyprojectslugbyrepositorynamemanifestsbyreferenceop.js";

let value:
  HeadByTeamSlugByProjectSlugByRepositoryNameManifestsByReferenceRequest = {
    teamSlug: "team-slug",
    projectSlug: "project-slug",
    repositoryName: "nginx",
    reference: "latest",
  };
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `teamSlug`                                               | *string*                                                 | :heavy_check_mark:                                       | Single Docker repository team slug or team ID component. | team-slug                                                |
| `projectSlug`                                            | *string*                                                 | :heavy_check_mark:                                       | Single Docker repository project slug component.         | project-slug                                             |
| `repositoryName`                                         | *string*                                                 | :heavy_check_mark:                                       | Single Docker repository name component.                 | nginx                                                    |
| `reference`                                              | *string*                                                 | :heavy_check_mark:                                       | Manifest reference: a tag or digest.                     | latest                                                   |