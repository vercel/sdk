# GetByTeamSlugByProjectSlugByRepositoryNameTagsListRequest

## Example Usage

```typescript
import { GetByTeamSlugByProjectSlugByRepositoryNameTagsListRequest } from "@vercel/sdk/models/getbyteamslugbyprojectslugbyrepositorynametagslistop.js";

let value: GetByTeamSlugByProjectSlugByRepositoryNameTagsListRequest = {
  teamSlug: "team-slug",
  projectSlug: "project-slug",
  repositoryName: "nginx",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `teamSlug`                                                     | *string*                                                       | :heavy_check_mark:                                             | Single Docker repository team slug or team ID component.       | team-slug                                                      |
| `projectSlug`                                                  | *string*                                                       | :heavy_check_mark:                                             | Single Docker repository project slug component.               | project-slug                                                   |
| `repositoryName`                                               | *string*                                                       | :heavy_check_mark:                                             | Single Docker repository name component.                       | nginx                                                          |
| `n`                                                            | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `last`                                                         | *string*                                                       | :heavy_minus_sign:                                             | Opaque pagination cursor returned by a previous list response. |                                                                |