# UpdateByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuidRequest

## Example Usage

```typescript
import { UpdateByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuidRequest } from "@vercel/sdk/models/updatebyteamslugbyprojectslugbyrepositorynameblobsuploadsbyuuidop.js";

let value:
  UpdateByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuidRequest = {
    teamSlug: "team-slug",
    projectSlug: "project-slug",
    repositoryName: "nginx",
    uuid: "0123456789abcdef0123456789abcdef01234567",
  };
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      | Example                                          |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `teamSlug`                                       | *string*                                         | :heavy_check_mark:                               | Single Docker repository team slug component.    | team-slug                                        |
| `projectSlug`                                    | *string*                                         | :heavy_check_mark:                               | Single Docker repository project slug component. | project-slug                                     |
| `repositoryName`                                 | *string*                                         | :heavy_check_mark:                               | Single Docker repository name component.         | nginx                                            |
| `uuid`                                           | *string*                                         | :heavy_check_mark:                               | Blob upload session identifier.                  | 0123456789abcdef0123456789abcdef01234567         |