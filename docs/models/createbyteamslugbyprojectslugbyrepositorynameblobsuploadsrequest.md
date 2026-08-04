# CreateByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsRequest

## Example Usage

```typescript
import { CreateByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsRequest } from "@vercel/sdk/models/createbyteamslugbyprojectslugbyrepositorynameblobsuploadsop.js";

let value: CreateByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsRequest = {
  teamSlug: "team-slug",
  projectSlug: "project-slug",
  repositoryName: "nginx",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          | Example                                              |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `teamSlug`                                           | *string*                                             | :heavy_check_mark:                                   | Single Docker repository team slug component.        | team-slug                                            |
| `projectSlug`                                        | *string*                                             | :heavy_check_mark:                                   | Single Docker repository project slug component.     | project-slug                                         |
| `repositoryName`                                     | *string*                                             | :heavy_check_mark:                                   | Single Docker repository name component.             | nginx                                                |
| `mount`                                              | *string*                                             | :heavy_minus_sign:                                   | Digest of the blob to mount from another repository. |                                                      |
| `from`                                               | *string*                                             | :heavy_minus_sign:                                   | Source repository to mount the blob from.            |                                                      |